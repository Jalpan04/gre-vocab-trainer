/* =====================================================
   GRE Vocab Trainer — app.js (100% Serverless Client-Side)
   Uses browser localStorage to persist GRE study progress.
   ===================================================== */

// -------------------------------------------------------
// STATE
// -------------------------------------------------------
const state = {
  view: "dashboard",       // dashboard | detail | quiz | stats | add
  words: [],               // flat list from localStorage
  filteredWords: [],       // after sentiment/search filter
  currentWordId: null,
  currentSentiment: "all",
  currentSort: "",
  quizData: null,
  quizAnswered: false,
  addRelatedIds: [],
  addIntensity: 3,
  addSentiment: "neutral",
};

// -------------------------------------------------------
// DATABASE SEEDER (LOCAL STORAGE)
// -------------------------------------------------------
function initDatabase() {
  if (!localStorage.getItem("gre_words")) {
    const rawData = INITIAL_DATA; // loaded from seed_data.js
    
    // Format vocabulary array
    const words = rawData.words.map((w, idx) => ({
      id: idx + 1,
      word: w.word,
      meaning: w.meaning,
      official_example: w.official_example || null,
      sentiment: w.sentiment,
      intensity: w.intensity,
      mastery_score: 0,
      user_sentence: null,
      related_ids: []
    }));

    // Link related word pairs
    const wordMap = {};
    words.forEach(w => { wordMap[w.word] = w; });

    rawData.related_pairs.forEach(([a, b]) => {
      const wa = wordMap[a];
      const wb = wordMap[b];
      if (wa && wb) {
        if (!wa.related_ids.includes(wb.id)) wa.related_ids.push(wb.id);
        if (!wb.related_ids.includes(wa.id)) wb.related_ids.push(wa.id);
      }
    });

    localStorage.setItem("gre_words", JSON.stringify(words));
  }
}

// -------------------------------------------------------
// LOCAL CRUD HELPERS
// -------------------------------------------------------
function getLocalWords(sentiment, sort) {
  let list = JSON.parse(localStorage.getItem("gre_words") || "[]");
  if (sentiment && sentiment !== "all") {
    list = list.filter(w => w.sentiment === sentiment);
  }
  if (sort === "mastery_asc") {
    list.sort((a, b) => a.mastery_score - b.mastery_score);
  } else if (sort === "mastery_desc") {
    list.sort((a, b) => b.mastery_score - a.mastery_score);
  } else {
    list.sort((a, b) => a.word.localeCompare(b.word));
  }
  return list;
}

function getLocalWord(id) {
  const list = JSON.parse(localStorage.getItem("gre_words") || "[]");
  const word = list.find(w => w.id === id);
  if (!word) throw new Error("Word not found");
  
  // Hydrate related words list
  word.related = word.related_ids.map(rid => {
    const match = list.find(w => w.id === rid);
    return match ? { id: match.id, word: match.word } : null;
  }).filter(Boolean);
  
  return word;
}

function saveLocalSentiment(id, sentiment, intensity) {
  const list = JSON.parse(localStorage.getItem("gre_words") || "[]");
  const idx = list.findIndex(w => w.id === id);
  if (idx !== -1) {
    list[idx].sentiment = sentiment;
    list[idx].intensity = intensity;
    localStorage.setItem("gre_words", JSON.stringify(list));
    
    // Update local state arrays
    const cachedIdx = state.words.findIndex(w => w.id === id);
    if (cachedIdx !== -1) {
      state.words[cachedIdx].sentiment = sentiment;
      state.words[cachedIdx].intensity = intensity;
    }
  }
}

function saveLocalSentence(id, sentence) {
  const list = JSON.parse(localStorage.getItem("gre_words") || "[]");
  const idx = list.findIndex(w => w.id === id);
  if (idx !== -1) {
    list[idx].user_sentence = sentence.trim() || null;
    localStorage.setItem("gre_words", JSON.stringify(list));
  }
}

function deleteLocalWord(id) {
  let list = JSON.parse(localStorage.getItem("gre_words") || "[]");
  list = list.filter(w => w.id !== id);
  
  // Remove references in related_ids
  list.forEach(w => {
    w.related_ids = w.related_ids.filter(rid => rid !== id);
  });
  
  localStorage.setItem("gre_words", JSON.stringify(list));
}

function addLocalWord(payload) {
  const list = JSON.parse(localStorage.getItem("gre_words") || "[]");
  const existing = list.find(w => w.word.trim().toLowerCase() === payload.word.trim().toLowerCase());
  if (existing) throw new Error("Word already exists");
  
  const newId = list.length > 0 ? Math.max(...list.map(w => w.id)) + 1 : 1;
  const newWord = {
    id: newId,
    word: payload.word.trim(),
    meaning: payload.meaning.trim(),
    official_example: payload.official_example || null,
    sentiment: payload.sentiment,
    intensity: payload.intensity,
    mastery_score: 0,
    user_sentence: null,
    related_ids: payload.related_ids || []
  };
  
  list.push(newWord);
  
  // Link related words bidirectionally
  if (payload.related_ids) {
    payload.related_ids.forEach(rid => {
      const match = list.find(w => w.id === rid);
      if (match && !match.related_ids.includes(newId)) {
        match.related_ids.push(newId);
      }
    });
  }
  
  localStorage.setItem("gre_words", JSON.stringify(list));
  return newWord;
}

function searchLocalWords(q) {
  const list = JSON.parse(localStorage.getItem("gre_words") || "[]");
  return list.filter(w => w.word.toLowerCase().startsWith(q.trim().toLowerCase())).slice(0, 10);
}

function getLocalQuiz(sentiment) {
  let list = JSON.parse(localStorage.getItem("gre_words") || "[]");
  if (sentiment) {
    list = list.filter(w => w.sentiment === sentiment);
  }
  if (list.length < 4) {
    throw new Error("Need at least 4 words in the database to generate a quiz.");
  }
  
  // Bias toward lower mastery scores
  const weights = list.map(w => Math.max(1, 10 - w.mastery_score));
  const totalWeight = weights.reduce((sum, val) => sum + val, 0);
  
  let rand = Math.random() * totalWeight;
  let target = list[0];
  for (let i = 0; i < list.length; i++) {
    rand -= weights[i];
    if (rand <= 0) {
      target = list[i];
      break;
    }
  }
  
  // Distractors
  const pool = list.filter(w => w.id !== target.id);
  const distractors = [];
  const chosen = new Set();
  while (distractors.length < 3 && pool.length > distractors.length) {
    const idx = Math.floor(Math.random() * pool.length);
    if (!chosen.has(idx)) {
      chosen.add(idx);
      distractors.push(pool[idx]);
    }
  }
  
  const options = [
    { word_id: target.id, meaning: target.meaning },
    ...distractors.map(d => ({ word_id: d.id, meaning: d.meaning }))
  ];
  
  // Random shuffle options
  options.sort(() => Math.random() - 0.5);
  
  return {
    word_id: target.id,
    word: target.word,
    correct_meaning: target.meaning,
    options
  };
}

function updateLocalScore(wordId, correct) {
  const list = JSON.parse(localStorage.getItem("gre_words") || "[]");
  const idx = list.findIndex(w => w.id === wordId);
  if (idx !== -1) {
    const w = list[idx];
    if (correct) {
      w.mastery_score = Math.min(w.mastery_score + 1, 10);
    } else {
      w.mastery_score = Math.max(w.mastery_score - 1, 0);
    }
    localStorage.setItem("gre_words", JSON.stringify(list));
  }
}

function getLocalStats() {
  const list = JSON.parse(localStorage.getItem("gre_words") || "[]");
  const total = list.length;
  if (total === 0) {
    return { total: 0, positive: 0, negative: 0, neutral: 0, avg_mastery: 0, needs_review: 0 };
  }
  const sumMastery = list.reduce((sum, w) => sum + w.mastery_score, 0);
  return {
    total,
    positive: list.filter(w => w.sentiment === "positive").length,
    negative: list.filter(w => w.sentiment === "negative").length,
    neutral: list.filter(w => w.sentiment === "neutral").length,
    avg_mastery: (sumMastery / total).toFixed(2),
    needs_review: list.filter(w => w.mastery_score < 3).length
  };
}

// -------------------------------------------------------
// DOM REFS
// -------------------------------------------------------
const $ = (id) => document.getElementById(id);

const topbarTitle  = $("topbar-title");
const backBtn      = $("back-btn");
const addBtn       = $("add-btn");

const views = {
  dashboard : $("view-dashboard"),
  detail    : $("view-detail"),
  quiz      : $("view-quiz"),
  stats     : $("view-stats"),
  add       : $("view-add"),
};

const navItems = document.querySelectorAll(".nav-item");

// -------------------------------------------------------
// ROUTER
// -------------------------------------------------------
function showView(name, title = "GRE Vocab") {
  state.view = name;
  topbarTitle.textContent = title;

  Object.values(views).forEach((v) => v.classList.add("hidden"));
  views[name].classList.remove("hidden");

  const showBack = name === "detail" || name === "add";
  backBtn.classList.toggle("hidden", !showBack);
  addBtn.classList.toggle("hidden", name === "add");

  navItems.forEach((item) => {
    item.classList.toggle(
      "active",
      item.dataset.view === name ||
      (name === "detail" && item.dataset.view === "dashboard") ||
      (name === "add"    && item.dataset.view === "dashboard")
    );
  });

  document.getElementById("content").scrollTop = 0;
}

// -------------------------------------------------------
// DASHBOARD
// -------------------------------------------------------
async function loadDashboard() {
  showView("dashboard", "GRE Vocab");
  renderSkeletons();

  try {
    state.words = getLocalWords(state.currentSentiment, state.currentSort);
    state.filteredWords = [...state.words];
    applySearch();
  } catch (e) {
    $("word-list").innerHTML = `<div class="empty-state">Failed to query local database.<br><small>${e.message}</small></div>`;
  }
}

function renderSkeletons() {
  $("word-list").innerHTML = `
    <div class="skeleton-list">
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
    </div>`;
}

function applySearch() {
  const q = $("search-input").value.trim().toLowerCase();
  state.filteredWords = q
    ? state.words.filter((w) => w.word.toLowerCase().includes(q) || w.meaning.toLowerCase().includes(q))
    : [...state.words];
  renderWordList();
}

function renderWordList() {
  const list = $("word-list");
  if (state.filteredWords.length === 0) {
    list.innerHTML = `<div class="empty-state">No words found.</div>`;
    return;
  }

  list.innerHTML = state.filteredWords.map((w) => {
    const pct = Math.round((w.mastery_score / 10) * 100);
    const dots = Array.from({ length: 5 }, (_, i) =>
      `<span class="intensity-dot${i < w.intensity ? " filled" : ""}"></span>`
    ).join("");

    return `
      <div class="word-card" data-id="${w.id}" role="button" tabindex="0" aria-label="View ${w.word}">
        <div class="word-card-top">
          <span class="word-name">${w.word}</span>
          <span class="sentiment-badge ${w.sentiment}">${cap(w.sentiment)}</span>
          <span class="intensity-dots">${dots}</span>
        </div>
        <div class="word-meaning-preview">${w.meaning}</div>
        <div class="mastery-bar-wrap">
          <div class="mastery-bar">
            <div class="mastery-bar-fill" style="width:${pct}%"></div>
          </div>
          <span class="mastery-label">${w.mastery_score}/10</span>
        </div>
      </div>`;
  }).join("");

  list.querySelectorAll(".word-card").forEach((card) => {
    card.addEventListener("click", () => openDetail(Number(card.dataset.id)));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") openDetail(Number(card.dataset.id));
    });
  });
}

// -------------------------------------------------------
// DETAIL VIEW
// -------------------------------------------------------
async function openDetail(id) {
  state.currentWordId = id;
  showView("detail");
  $("detail-card").innerHTML = `<div class="skeleton-list"><div class="skeleton-card" style="height:200px"></div></div>`;

  try {
    const w = getLocalWord(id);
    topbarTitle.textContent = w.word;
    renderDetail(w);
  } catch (e) {
    $("detail-card").innerHTML = `<div class="empty-state">Failed to load.<br><small>${e.message}</small></div>`;
  }
}

function renderDetail(w) {
  const pct = Math.round((w.mastery_score / 10) * 100);

  const dotPicker = (currentIntensity, ctx) =>
    Array.from({ length: 5 }, (_, i) => {
      const n = i + 1;
      return `<button class="dot-btn${n <= currentIntensity ? " filled" : ""}" data-dot="${n}" data-ctx="${ctx}" aria-label="Intensity ${n}" disabled></button>`;
    }).join("");

  const relatedChips = w.related.map((r) =>
    `<span class="chip" data-id="${r.id}" role="button" tabindex="0">${r.word}</span>`
  ).join("") || `<span style="font-size:0.8rem;color:var(--text-faint)">None</span>`;

  $("detail-card").innerHTML = `
    <div class="detail-word">${w.word}</div>
    <div class="detail-meta">
      <span class="sentiment-badge ${w.sentiment}" id="detail-sent-badge">${cap(w.sentiment)}</span>
    </div>

    <div class="detail-section-label">Meaning</div>
    <div class="detail-meaning">${w.meaning}</div>

    ${w.official_example ? `
    <div class="detail-section-label">Official Example</div>
    <div class="detail-example">${w.official_example}</div>
    ` : ""}

    <div class="detail-section-label hidden" id="detail-sent-label">Sentiment</div>
    <div class="detail-sentiment-row hidden" id="detail-sent-row">
      <button class="sent-btn positive${w.sentiment === "positive" ? " active" : ""}" data-value="positive" disabled>Positive</button>
      <button class="sent-btn neutral${w.sentiment === "neutral" ? " active" : ""}"   data-value="neutral" disabled>Neutral</button>
      <button class="sent-btn negative${w.sentiment === "negative" ? " active" : ""}" data-value="negative" disabled>Negative</button>
    </div>

    <div class="detail-section-label">Intensity <span class="intensity-hint" id="detail-intensity-hint">${w.intensity}</span></div>
    <div class="intensity-dots-picker" id="detail-intensity-picker" data-intensity="${w.intensity}">
      ${dotPicker(w.intensity, "detail")}
    </div>

    <div class="detail-section-label">Mastery</div>
    <div class="detail-mastery-row">
      <div class="detail-mastery-bar">
        <div class="detail-mastery-fill" id="detail-mastery-fill" style="width:${pct}%"></div>
      </div>
      <span class="detail-mastery-label" id="detail-mastery-label">${w.mastery_score}/10</span>
    </div>

    <div class="detail-section-label">My Memory Sentence</div>
    <textarea class="user-sentence-textarea" id="user-sentence" readonly placeholder="${w.user_sentence ? "Write a sentence that pins this word in your memory..." : "No memory sentence saved yet."}">${w.user_sentence || ""}</textarea>
    <div class="save-indicator hidden" id="save-indicator">Auto-saves on edit</div>

    <div class="detail-section-label">Related Words</div>
    <div class="related-chips" id="detail-related-chips">${relatedChips}</div>

    <div class="detail-actions">
      <button class="btn-edit" id="btn-edit-toggle">Edit Word</button>
      <button class="btn-delete hidden" id="btn-delete">Delete word</button>
    </div>
  `;

  // Sentiment buttons
  let currentSent = w.sentiment;
  let currentIntensity = w.intensity;

  document.getElementById("detail-sent-row").querySelectorAll(".sent-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      currentSent = btn.dataset.value;
      document.getElementById("detail-sent-row").querySelectorAll(".sent-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("detail-sent-badge").className = `sentiment-badge ${currentSent}`;
      document.getElementById("detail-sent-badge").textContent = cap(currentSent);
      saveLocalSentiment(w.id, currentSent, currentIntensity);
    });
  });

  // Intensity dots
  document.getElementById("detail-intensity-picker").querySelectorAll(".dot-btn").forEach((dot) => {
    const btn = dot;
    btn.addEventListener("click", async () => {
      currentIntensity = Number(btn.dataset.dot);
      updateDotPicker("detail-intensity-picker", currentIntensity);
      document.getElementById("detail-intensity-hint").textContent = currentIntensity;
      saveLocalSentiment(w.id, currentSent, currentIntensity);
    });
  });

  // Auto-save sentence
  let saveTimer = null;
  const sentenceEl = document.getElementById("user-sentence");
  const indicator  = document.getElementById("save-indicator");
  sentenceEl.addEventListener("input", () => {
    indicator.textContent = "Saving...";
    indicator.classList.remove("saved");
    clearTimeout(saveTimer);
    saveTimer = setTimeout(async () => {
      try {
        saveLocalSentence(w.id, sentenceEl.value);
        indicator.textContent = "Saved";
        indicator.classList.add("saved");
        setTimeout(() => { indicator.textContent = "Auto-saves on edit"; indicator.classList.remove("saved"); }, 2000);
      } catch {
        indicator.textContent = "Save failed";
      }
    }, 700);
  });

  // Related chips — navigate to word
  document.getElementById("detail-related-chips").querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => openDetail(Number(chip.dataset.id)));
    chip.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") openDetail(Number(chip.dataset.id));
    });
  });

  // Delete
  document.getElementById("btn-delete").addEventListener("click", async () => {
    if (!confirm(`Delete "${w.word}"? This cannot be undone.`)) return;
    deleteLocalWord(w.id);
    await loadDashboard();
  });

  // View / Edit mode toggler
  let isEditing = false;
  const toggleBtn = document.getElementById("btn-edit-toggle");
  const deleteBtn = document.getElementById("btn-delete");
  const sentLabel = document.getElementById("detail-sent-label");
  const sentRow = document.getElementById("detail-sent-row");
  const sentButtons = sentRow.querySelectorAll(".sent-btn");
  const intensityButtons = document.getElementById("detail-intensity-picker").querySelectorAll(".dot-btn");

  toggleBtn.addEventListener("click", () => {
    isEditing = !isEditing;
    if (isEditing) {
      toggleBtn.textContent = "Done Editing";
      toggleBtn.classList.add("active");
      deleteBtn.classList.remove("hidden");
      sentLabel.classList.remove("hidden");
      sentRow.classList.remove("hidden");
      sentenceEl.removeAttribute("readonly");
      sentenceEl.placeholder = "Write a sentence that pins this word in your memory...";
      indicator.classList.remove("hidden");
      sentButtons.forEach(b => b.removeAttribute("disabled"));
      intensityButtons.forEach(b => b.removeAttribute("disabled"));
    } else {
      toggleBtn.textContent = "Edit Word";
      toggleBtn.classList.remove("active");
      deleteBtn.classList.add("hidden");
      sentLabel.classList.add("hidden");
      sentRow.classList.add("hidden");
      sentenceEl.setAttribute("readonly", "true");
      if (!sentenceEl.value.trim()) {
        sentenceEl.placeholder = "No memory sentence saved yet.";
      }
      indicator.classList.add("hidden");
      sentButtons.forEach(b => b.setAttribute("disabled", "true"));
      intensityButtons.forEach(b => b.setAttribute("disabled", "true"));
    }
  });
}

function updateDotPicker(pickerId, intensity) {
  document.getElementById(pickerId).querySelectorAll(".dot-btn").forEach((d) => {
    d.classList.toggle("filled", Number(d.dataset.dot) <= intensity);
  });
}

// -------------------------------------------------------
// QUIZ VIEW
// -------------------------------------------------------
async function loadQuiz() {
  showView("quiz", "Quiz");
  state.quizAnswered = false;

  const sentiment = $("quiz-sentiment-filter").value || "";

  $("quiz-word").textContent = "...";
  $("quiz-options").innerHTML = "";
  $("btn-next").classList.add("hidden");

  try {
    state.quizData = getLocalQuiz(sentiment);
    renderQuiz();
  } catch (e) {
    $("quiz-wrap").innerHTML = `<div class="empty-state">${e.message}</div>`;
  }
}

function renderQuiz() {
  const q = state.quizData;
  $("quiz-word").textContent = q.word;

  $("quiz-options").innerHTML = q.options.map((opt, i) =>
    `<button class="quiz-option" data-id="${opt.word_id}" id="quiz-opt-${i}">${opt.meaning}</button>`
  ).join("");

  $("quiz-options").querySelectorAll(".quiz-option").forEach((btn) => {
    btn.addEventListener("click", () => handleQuizAnswer(btn, q));
  });
}

async function handleQuizAnswer(btn, q) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const correct = Number(btn.dataset.id) === q.word_id;

  // Highlight all options
  $("quiz-options").querySelectorAll(".quiz-option").forEach((b) => {
    b.disabled = true;
    if (Number(b.dataset.id) === q.word_id) b.classList.add("correct");
    else if (b === btn) b.classList.add("wrong");
  });

  // Update score
  try {
    updateLocalScore(q.word_id, correct);
  } catch (_) { /* ignore */ }

  $("btn-next").classList.remove("hidden");
}

// -------------------------------------------------------
// STATS VIEW
// -------------------------------------------------------
async function loadStats() {
  showView("stats", "Stats");
  $("stats-wrap").innerHTML = `<div class="skeleton-list"><div class="skeleton-card"></div><div class="skeleton-card"></div></div>`;

  try {
    const stats = getLocalStats();
    const words = getLocalWords("", "mastery_asc");
    renderStats(stats, words);
  } catch (e) {
    $("stats-wrap").innerHTML = `<div class="empty-state">${e.message}</div>`;
  }
}

function renderStats(stats, words) {
  const weakWords = words.filter((w) => w.mastery_score < 3);
  const masteryPct = stats.total > 0 ? Math.round((stats.avg_mastery / 10) * 100) : 0;

  $("stats-wrap").innerHTML = `
    <div class="stats-heading">Your Progress</div>

    <div class="stats-card">
      <div class="stats-row">
        <span>Total words</span>
        <span class="stats-val">${stats.total}</span>
      </div>
      <div class="stats-row">
        <span>Average mastery</span>
        <span class="stats-val">${stats.avg_mastery}/10</span>
      </div>
      <div class="stats-row">
        <span>Mastery progress</span>
        <span class="stats-val">${masteryPct}%</span>
      </div>
      <div class="stats-row">
        <span>Needs review (&lt;3)</span>
        <span class="stats-val" style="color:var(--negative)">${stats.needs_review}</span>
      </div>
    </div>

    <div class="stats-card">
      <div class="stats-row">
        <span style="color:var(--positive);font-weight:600">Positive words</span>
        <span class="stats-val">${stats.positive}</span>
      </div>
      <div class="stats-row">
        <span style="color:var(--negative);font-weight:600">Negative words</span>
        <span class="stats-val">${stats.negative}</span>
      </div>
      <div class="stats-row">
        <span style="color:var(--neutral);font-weight:600">Neutral words</span>
        <span class="stats-val">${stats.neutral}</span>
      </div>
    </div>

    ${weakWords.length > 0 ? `
    <div class="stats-card">
      <div class="review-list-title">Needs Review</div>
      <div class="related-chips">${weakWords.map((w) =>
        `<span class="review-chip" data-id="${w.id}">${w.word} (${w.mastery_score})</span>`
      ).join("")}</div>
    </div>` : ""}
  `;

  // Review chips -> open detail
  $("stats-wrap").querySelectorAll(".review-chip").forEach((chip) => {
    chip.addEventListener("click", () => openDetail(Number(chip.dataset.id)));
  });
}

// -------------------------------------------------------
// ADD WORD VIEW
// -------------------------------------------------------
function setupAddForm() {
  $("add-sent-positive").addEventListener("click", () => setAddSentiment("positive"));
  $("add-sent-neutral").addEventListener("click",  () => setAddSentiment("neutral"));
  $("add-sent-negative").addEventListener("click", () => setAddSentiment("negative"));

  $("add-intensity-picker").querySelectorAll(".dot-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.addIntensity = Number(btn.dataset.dot);
      updateDotPicker("add-intensity-picker", state.addIntensity);
      $("add-intensity-hint").textContent = state.addIntensity;
    });
  });

  let relSearchTimer = null;
  $("add-related-search").addEventListener("input", () => {
    clearTimeout(relSearchTimer);
    relSearchTimer = setTimeout(() => fetchRelatedSuggestions($("add-related-search").value), 300);
  });

  $("add-form").addEventListener("submit", handleAddSubmit);
}

function setAddSentiment(value) {
  state.addSentiment = value;
  $("add-sentiment-value").value = value;
  ["positive", "neutral", "negative"].forEach((s) => {
    $(`add-sent-${s}`).classList.toggle("active", s === value);
  });
}

async function fetchRelatedSuggestions(q) {
  if (!q.trim()) { $("add-related-dropdown").classList.add("hidden"); return; }
  try {
    const results = searchLocalWords(q.trim());
    const existing = state.addRelatedIds;
    const filtered = results.filter((r) => !existing.includes(r.id));
    if (filtered.length === 0) { $("add-related-dropdown").classList.add("hidden"); return; }

    $("add-related-dropdown").innerHTML = filtered.map((r) =>
      `<div class="dropdown-item" data-id="${r.id}" data-word="${r.word}">${r.word}</div>`
    ).join("");
    $("add-related-dropdown").classList.remove("hidden");

    $("add-related-dropdown").querySelectorAll(".dropdown-item").forEach((item) => {
      item.addEventListener("click", () => addRelatedChip(Number(item.dataset.id), item.dataset.word));
    });
  } catch (_) { /* ignore */ }
}

function addRelatedChip(id, word) {
  if (state.addRelatedIds.includes(id)) return;
  state.addRelatedIds.push(id);
  $("add-related-ids").value = JSON.stringify(state.addRelatedIds);
  $("add-related-search").value = "";
  $("add-related-dropdown").classList.add("hidden");

  const chip = document.createElement("span");
  chip.className = "chip";
  chip.dataset.id = id;
  chip.innerHTML = `${word}<span class="chip-remove" aria-label="Remove">x</span>`;
  chip.querySelector(".chip-remove").addEventListener("click", () => {
    state.addRelatedIds = state.addRelatedIds.filter((i) => i !== id);
    $("add-related-ids").value = JSON.stringify(state.addRelatedIds);
    chip.remove();
  });
  $("add-related-chips").appendChild(chip);
}

async function handleAddSubmit(e) {
  e.preventDefault();
  const word    = $("add-word").value.trim();
  const meaning = $("add-meaning").value.trim();
  const example = $("add-example").value.trim();

  $("add-error").classList.add("hidden");
  if (!word || !meaning) {
    $("add-error").textContent = "Word and meaning are required.";
    $("add-error").classList.remove("hidden");
    return;
  }

  $("add-submit").disabled = true;
  $("add-submit").textContent = "Adding...";

  try {
    addLocalWord({
      word,
      meaning,
      official_example: example || null,
      sentiment: state.addSentiment,
      intensity: state.addIntensity,
      related_ids: state.addRelatedIds,
    });
    
    // Reset form
    $("add-form").reset();
    state.addRelatedIds = [];
    $("add-related-chips").innerHTML = "";
    $("add-related-ids").value = "[]";
    state.addIntensity = 3;
    state.addSentiment = "neutral";
    updateDotPicker("add-intensity-picker", 3);
    $("add-intensity-hint").textContent = "3";
    setAddSentiment("neutral");
    await loadDashboard();
  } catch (err) {
    $("add-error").textContent = err.message;
    $("add-error").classList.remove("hidden");
  } finally {
    $("add-submit").disabled = false;
    $("add-submit").textContent = "Add Word";
  }
}

// -------------------------------------------------------
// UTILITY
// -------------------------------------------------------
function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

// -------------------------------------------------------
// EVENT WIRING
// -------------------------------------------------------
backBtn.addEventListener("click", () => {
  if (state.view === "add") { loadDashboard(); return; }
  loadDashboard();
});

addBtn.addEventListener("click", () => {
  state.addRelatedIds = [];
  showView("add", "Add Word");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const view = item.dataset.view;
    if (view === "dashboard") loadDashboard();
    else if (view === "quiz")  loadQuiz();
    else if (view === "stats") loadStats();
  });
});

document.querySelectorAll(".filter-pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    document.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    state.currentSentiment = pill.dataset.sentiment;
    loadDashboard();
  });
});

$("sort-select").addEventListener("change", () => {
  state.currentSort = $("sort-select").value;
  loadDashboard();
});

$("search-input").addEventListener("input", applySearch);

$("btn-next").addEventListener("click", loadQuiz);

$("quiz-sentiment-filter").addEventListener("change", loadQuiz);

// -------------------------------------------------------
// INIT
// -------------------------------------------------------
initDatabase();
setupAddForm();
loadDashboard();
