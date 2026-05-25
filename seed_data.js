const INITIAL_DATA = {
  "words": [
    {
      "word": "abate",
      "meaning": "To become less active, less intense, or less in amount.",
      "official_example": "As the hurricane's force abated, the winds dropped.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "aberrant",
      "meaning": "Deviating from the norm; atypical.",
      "official_example": "His aberrant behavior alarmed his colleagues.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "abjure",
      "meaning": "Solemnly renounce a belief, cause, or claim.",
      "official_example": "His refusal to abjure the Catholic faith resulted in execution.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "abrogate",
      "meaning": "Repeal or do away with (a law, right, or formal agreement).",
      "official_example": "A proposal to abrogate temporarily the right to strike.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "abscond",
      "meaning": "Leave hurriedly and secretly, typically to avoid detection of or arrest for an unlawful action such as theft.",
      "official_example": "She absconded with the remaining thousand dollars.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "abstemious",
      "meaning": "Not self-indulgent, especially when eating and drinking.",
      "official_example": "The monks practiced an abstemious lifestyle, eating only plain foods.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "accede",
      "meaning": "Assent or agree to a demand, request, or treaty.",
      "official_example": "The authorities did not accede to the strikers' demands.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "acerbic",
      "meaning": "(Especially of a comment or style of speaking) sharp and forthright.",
      "official_example": "His acerbic wit made him a formidable debater.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "acquiesce",
      "meaning": "Accept something reluctantly but without protest.",
      "official_example": "Sara acquiesced in his decision.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "acrimony",
      "meaning": "Bitterness or ill feeling, especially in speech or manner.",
      "official_example": "The divorce was filled with acrimony.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "acumen",
      "meaning": "The ability to make good judgments and quick decisions, typically in a particular domain.",
      "official_example": "Business acumen is essential for success.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "admonish",
      "meaning": "Warn or reprimand someone firmly.",
      "official_example": "She admonished him for appearing at breakfast unshaven.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "adroit",
      "meaning": "Clever or skillful in using the hands or mind.",
      "official_example": "He was adroit at tax avoidance.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "adulation",
      "meaning": "Obsequious flattery; excessive admiration or praise.",
      "official_example": "He found it difficult to cope with the adulation of the fans.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "adulterate",
      "meaning": "Render (something) poorer in quality by adding another substance, typically an inferior one.",
      "official_example": "The meat was ground fine and adulterated with potato flour.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "adumbrate",
      "meaning": "To outline or sketch; to foreshadow vaguely.",
      "official_example": "The proposal adumbrated a plan for reform.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "aesthetic",
      "meaning": "Concerned with beauty or the appreciation of beauty.",
      "official_example": "The gallery had a refined aesthetic sensibility.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "affable",
      "meaning": "Friendly, good-natured, or easy to talk to.",
      "official_example": "He was an affable and agreeable companion.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "aggrandize",
      "meaning": "Increase the power, status, or wealth of.",
      "official_example": "An action intended to aggrandize the Frankish dynasty.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "alacrity",
      "meaning": "Brisk and cheerful readiness.",
      "official_example": "She accepted the invitation with alacrity.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "alleviate",
      "meaning": "To make suffering, deficiency, or a problem less severe.",
      "official_example": "He couldn't prevent her pain, only alleviate it.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "amalgamate",
      "meaning": "Combine or unite to form one organization or structure.",
      "official_example": "He amalgamated his company with another.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "ambiguous",
      "meaning": "Open to more than one interpretation; unclear.",
      "official_example": "The instructions were ambiguous and confusing.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "ambivalent",
      "meaning": "Having mixed feelings or contradictory ideas about something or someone.",
      "official_example": "Some loved her, some hated her, few were ambivalent about her.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "ameliorate",
      "meaning": "Make (something bad or unsatisfactory) better.",
      "official_example": "The reform did much to ameliorate living standards.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "amenable",
      "meaning": "Open and responsive to suggestion; easily persuaded or controlled.",
      "official_example": "Parents who have had easy babies and amenable children often take credit.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "anachronism",
      "meaning": "A thing belonging or appropriate to a period other than that in which it exists, especially a thing that is conspicuously old-fashioned.",
      "official_example": "Everything was as it would have appeared in centuries past apart from one anachronism, a bright yellow excavator.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "analogous",
      "meaning": "Comparable in certain respects, typically in a way which makes clearer the nature of the things compared.",
      "official_example": "They saw the relationship between a ruler and his subjects as analogous to that of father and children.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "anarchy",
      "meaning": "A state of disorder due to absence or nonrecognition of authority.",
      "official_example": "He must ensure public order in a country threatened with anarchy.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "anathema",
      "meaning": "Something or someone that one vehemently dislikes.",
      "official_example": "Racial hatred was anathema to her.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "anodyne",
      "meaning": "Not likely to cause offence; mild and inoffensive.",
      "official_example": "He gave an anodyne answer to avoid controversy.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "anomalous",
      "meaning": "Deviating from what is standard, normal, or expected.",
      "official_example": "An anomalous situation.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "antagonism",
      "meaning": "Active hostility or opposition.",
      "official_example": "The antagonism between them was evident from their glaring stares.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "antipathy",
      "meaning": "A deep-seated feeling of dislike; aversion.",
      "official_example": "His fundamental antipathy to capitalism.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "apathy",
      "meaning": "Lack of interest, enthusiasm, or concern.",
      "official_example": "Widespread apathy among students.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "appease",
      "meaning": "Pacify or placate someone by acceding to their demands.",
      "official_example": "Amendments have been added to appease local pressure groups.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "apocryphal",
      "meaning": "(Of a story or statement) of doubtful authenticity, although widely circulated as being true.",
      "official_example": "An apocryphal story about a former president.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "apprise",
      "meaning": "Inform or tell (someone).",
      "official_example": "I thought it right to apprise Chris of what had happened.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "approbation",
      "meaning": "Approval or praise.",
      "official_example": "The opera met with high approbation.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "arbitrary",
      "meaning": "Based on random choice or personal whim, rather than any reason or system.",
      "official_example": "His mealtimes were entirely arbitrary.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "arcane",
      "meaning": "Understood by few; mysterious or secret.",
      "official_example": "Modern math and its arcane notation.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "archaic",
      "meaning": "Very old or old-fashioned.",
      "official_example": "Prisons are run on archaic methods.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "arduous",
      "meaning": "Involving or requiring strenuous effort; difficult and tiring.",
      "official_example": "An arduous journey.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "arrogate",
      "meaning": "To take or claim something without justification.",
      "official_example": "He arrogated authority that was never his.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "artful",
      "meaning": "Clever or skillful, typically in a crafty or cunning way.",
      "official_example": "Her artful wiles were used to extract information from him.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "articulate",
      "meaning": "(Of a person or a person's words) having or showing the ability to speak fluently and coherently.",
      "official_example": "An articulate account of their experiences.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "artless",
      "meaning": "Without guile or deception; natural and simple.",
      "official_example": "An artless, naive girl.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "ascetic",
      "meaning": "Characterized by or suggesting the practice of severe self-discipline and abstention from all forms of indulgence, typically for religious reasons.",
      "official_example": "An ascetic life of prayer, fasting, and manual labor.",
      "sentiment": "neutral",
      "intensity": 4
    },
    {
      "word": "asperity",
      "meaning": "Harshness of tone or manner.",
      "official_example": "He pointed this out with some asperity.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "aspersion",
      "meaning": "An attack on the reputation or integrity of someone or something.",
      "official_example": "I don't think anyone is casting aspersions on you.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "assiduous",
      "meaning": "Showing great care and perseverance.",
      "official_example": "She was assiduous in pointing out every feature.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "assuage",
      "meaning": "Make (an unpleasant feeling) less intense.",
      "official_example": "The letter assuaged the fears of most members.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "attenuate",
      "meaning": "To reduce the force, effect, or value of.",
      "official_example": "The drug attenuates the severity of the symptoms.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "audacious",
      "meaning": "Showing a willingness to take surprisingly bold risks.",
      "official_example": "A series of audacious takeovers.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "austere",
      "meaning": "Severe or strict in manner, attitude, or appearance.",
      "official_example": "An austere man, with a rigidly puritanical outlook.",
      "sentiment": "neutral",
      "intensity": 4
    },
    {
      "word": "avarice",
      "meaning": "Extreme greed for wealth or material gain.",
      "official_example": "He was rich beyond the dreams of avarice.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "aver",
      "meaning": "State or assert to be the case.",
      "official_example": "He averred that he was innocent of the allegations.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "avow",
      "meaning": "Assert or confess openly.",
      "official_example": "He avowed that he had voted Labour in every election.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "baleful",
      "meaning": "Threatening harm; menacing.",
      "official_example": "Bill shot a baleful glance in her direction.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "banal",
      "meaning": "So lacking in originality as to be obvious and boring.",
      "official_example": "Songs with banal, repeated words.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "beatify",
      "meaning": "Proclaim one of the deceased faithful a blessed soul (often literal Catholic meaning, but metaphorically to bless).",
      "official_example": "He was beatified by Pope John Paul II in 1987.",
      "sentiment": "positive",
      "intensity": 5
    },
    {
      "word": "belie",
      "meaning": "Fail to give a true notion or impression of something; disguise or contradict.",
      "official_example": "His lively, alert manner belied his years.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "bellicose",
      "meaning": "Demonstrating aggression and willingness to fight.",
      "official_example": "A group of bellicose patriots fueled the war effort.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "belligerent",
      "meaning": "Hostile and aggressive.",
      "official_example": "A bull-necked, belligerent old man.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "beneficent",
      "meaning": "Generous or doing good.",
      "official_example": "A beneficent landowner who cared for his workers.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "blithe",
      "meaning": "Showing a casual and cheerful indifference considered to be callous or improper.",
      "official_example": "A blithe disregard for the rules of the road.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "bolster",
      "meaning": "Support or strengthen; prop up.",
      "official_example": "The fall in interest rates is starting to bolster confidence.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "bombastic",
      "meaning": "High-sounding but with little meaning; inflated.",
      "official_example": "Bombastic rhetoric.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "boor",
      "meaning": "An unrefined, ill-mannered person.",
      "official_example": "At last the big obnoxious boor had been dealt a stunning blow.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "bucolic",
      "meaning": "Relating to the pleasant aspects of the countryside and country life.",
      "official_example": "The church is lovely for its bucolic setting.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "burgeon",
      "meaning": "Begin to grow or increase rapidly; flourish.",
      "official_example": "The city's suburbs have burgeoned, sprawling out from the center.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "burnish",
      "meaning": "Polish (something, especially metal) by rubbing.",
      "official_example": "Highly burnished armor hung on the walls.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "buttress",
      "meaning": "To provide a building or structure with projecting supports; to reinforce an argument.",
      "official_example": "He buttressed his argument with solid facts.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "cacophony",
      "meaning": "A harsh, discordant mixture of sounds.",
      "official_example": "A cacophony of deafening alarm bells.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "cadge",
      "meaning": "Ask for or obtain (something to which one is not strictly entitled).",
      "official_example": "He eats whenever he can cadge a meal.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "cajole",
      "meaning": "Persuade someone to do something by sustained coaxing or flattery.",
      "official_example": "He hoped to cajole her into selling the house.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "calumniate",
      "meaning": "Make false and defamatory statements about.",
      "official_example": "His political opponents heavily calumniated him during the campaign.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "calumny",
      "meaning": "The making of false and defamatory statements about someone in order to damage their reputation; slander.",
      "official_example": "A bitter struggle marked by calumny and litigation.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "canny",
      "meaning": "Having or showing shrewdness and good judgment, especially in money or business matters.",
      "official_example": "Canny shoppers came early for a bargain.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "capricious",
      "meaning": "Given to sudden and unaccountable changes of mood or behavior.",
      "official_example": "A capricious and often brutal administration.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "captious",
      "meaning": "Tending to find fault or raise petty objections.",
      "official_example": "A captious teacher will often ruin a student's confidence.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "castigate",
      "meaning": "Reprimand (someone) severely.",
      "official_example": "He was castigated for not setting a good example.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "catalyst",
      "meaning": "A substance that increases the rate of a chemical reaction without itself undergoing any permanent chemical change; a person or thing that precipitates an event.",
      "official_example": "The governor's speech acted as a catalyst for debate.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "caustic",
      "meaning": "Able to burn or corrode organic tissue by chemical action; sarcastic in a scathing and bitter way.",
      "official_example": "The players were making caustic comments about the refereeing.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "censure",
      "meaning": "Express severe disapproval of (someone or something), especially in a formal statement.",
      "official_example": "A judge was censured in 1983 for a variety of types of injudicious conduct.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "chary",
      "meaning": "Cautiously or suspiciously reluctant to do something.",
      "official_example": "Most people are chary of allowing themselves to be photographed.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "chauvinist",
      "meaning": "A person displaying aggressive or exaggerated patriotism; showing or relating to excessive or prejudiced loyalty or support for a particular group or cause.",
      "official_example": "A chauvinist disregard for the rights of minorities.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "chicanery",
      "meaning": "The use of trickery to achieve a political, financial, or legal purpose.",
      "official_example": "An underhanded person who schemes corruption and political chicanery behind closed doors.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "churlish",
      "meaning": "Rude in a mean-spirited and surly way.",
      "official_example": "It seems churlish to complain when everything is essentially free.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "circumlocution",
      "meaning": "The use of many words where fewer would do, especially in a deliberate attempt to be vague or evasive.",
      "official_example": "His admission came after years of circumlocution.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "circumspect",
      "meaning": "Wary and unwilling to take risks.",
      "official_example": "The officials were very circumspect in their statements.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "clamor",
      "meaning": "A loud and confused noise, especially that of people shouting vehemently.",
      "official_example": "The questions rose to a clamor.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "clemency",
      "meaning": "Mercy; lenience.",
      "official_example": "An appeal for clemency went unheeded by the harsh ruler.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "coagulate",
      "meaning": "Change to a solid or semisolid state.",
      "official_example": "Blood had coagulated around the edges of the wound.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "coalesce",
      "meaning": "Come together and form one mass or whole.",
      "official_example": "The puddles had coalesced into shallow streams.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "coda",
      "meaning": "The concluding passage of a piece or movement, typically forming an addition to the basic structure.",
      "official_example": "His new novel is a kind of coda to his previous books.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "cogent",
      "meaning": "(Of an argument or case) clear, logical, and convincing.",
      "official_example": "They put forward cogent arguments for British membership.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "commensurate",
      "meaning": "Corresponding in size or degree; in proportion.",
      "official_example": "Salary will be commensurate with experience.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "compendium",
      "meaning": "A collection of concise but detailed information about a particular subject, especially in a book.",
      "official_example": "The program is a compendium of outtakes from our archives.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "complaisant",
      "meaning": "Willing to please others; obliging; agreeable.",
      "official_example": "When unharnessed, Northern dogs are peaceful and complaisant.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "compliant",
      "meaning": "Inclined to agree with others or obey rules, especially to an excessive degree.",
      "official_example": "A compliant labor force is essential for that industry.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "conciliatory",
      "meaning": "Intended or likely to placate or pacify.",
      "official_example": "A conciliatory approach.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "condone",
      "meaning": "Accept and allow (behavior that is considered morally wrong or offensive) to continue.",
      "official_example": "The college cannot condone any behavior that involves illicit drugs.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "confound",
      "meaning": "Cause surprise or confusion in (someone), especially by acting against their expectations.",
      "official_example": "The inflation figure confounded economic analysts.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "connoisseur",
      "meaning": "An expert judge in matters of taste.",
      "official_example": "A connoisseur of music.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "contention",
      "meaning": "Heated disagreement.",
      "official_example": "The captured territory was one of the main areas of contention between the two countries.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "contentious",
      "meaning": "Causing or likely to cause an argument; controversial.",
      "official_example": "A contentious issue.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "contrite",
      "meaning": "Feeling or expressing remorse or penitence; affected by guilt.",
      "official_example": "A broken and a contrite heart.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "conundrum",
      "meaning": "A confusing and difficult problem or question.",
      "official_example": "One of the most difficult conundrums for the experts.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "converge",
      "meaning": "(Of lines) tend to meet at a point.",
      "official_example": "Half a million sports fans will converge on the capital.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "convoluted",
      "meaning": "(Especially of an argument, story, or sentence) extremely complex and difficult to follow.",
      "official_example": "Its convoluted narrative encompasses all manner of digressions.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "copious",
      "meaning": "Abundant in supply or quantity.",
      "official_example": "She took copious notes during the lecture.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "corroborate",
      "meaning": "To confirm or give support to a statement or theory.",
      "official_example": "The witness corroborated the defendant's alibi.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "craven",
      "meaning": "Contemptibly lacking in courage; cowardly.",
      "official_example": "A craven abdication of his moral duty.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "credulous",
      "meaning": "Having or showing too great a readiness to believe things.",
      "official_example": "A ceremony staged for credulous tourists.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "culpable",
      "meaning": "Deserving blame.",
      "official_example": "Sometimes you're just as culpable when you watch something as when you actually participate.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "cynic",
      "meaning": "A person who believes that people are motivated purely by self-interest.",
      "official_example": "Some cynics thought that the controversy was all a publicity stunt.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "cynical",
      "meaning": "Believing that people are motivated by self-interest; distrustful of human sincerity or integrity.",
      "official_example": "Her cynical attitude.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "daunt",
      "meaning": "Make (someone) feel intimidated or apprehensive.",
      "official_example": "Some people are daunted by technology.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "dearth",
      "meaning": "A scarcity or lack of something.",
      "official_example": "There is a dearth of evidence linking the suspect to the crime.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "debacle",
      "meaning": "A sudden and ignominious failure; a fiasco.",
      "official_example": "The economic debacle that became known as the Great Depression.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "decorum",
      "meaning": "Behavior in keeping with good taste and propriety.",
      "official_example": "You exhibit remarkable modesty and decorum.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "deference",
      "meaning": "Humble submission and respect.",
      "official_example": "He addressed her with the deference due to age.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "deleterious",
      "meaning": "Causing harm or damage.",
      "official_example": "Divorce is assumed to have deleterious effects on children.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "delineate",
      "meaning": "Describe or portray (something) precisely.",
      "official_example": "The law should delineate and prohibit behavior that is socially abhorrent.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "demur",
      "meaning": "Raise doubts or objections or show reluctance.",
      "official_example": "Normally she would have accepted the challenge, but she demurred.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "denigrate",
      "meaning": "Criticize unfairly; disparage.",
      "official_example": "There is a tendency to denigrate the poor.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "deride",
      "meaning": "Express contempt for; ridicule.",
      "official_example": "Critics derided the proposals as clumsy attempts to find a solution.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "derivative",
      "meaning": "(Typically of an artist or work of art) imitative of the work of another person, and usually disapproved of for that reason.",
      "official_example": "An artist who is not in the slightest bit derivative.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "desiccate",
      "meaning": "Remove the moisture from (something); cause to become completely dry.",
      "official_example": "Both the older shoots and the roots were desiccated.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "desultory",
      "meaning": "Lacking a plan, purpose, or enthusiasm.",
      "official_example": "A few people were left, dancing in a desultory fashion.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "deterrent",
      "meaning": "A thing that discourages or is intended to discourage someone from doing something.",
      "official_example": "Cameras are a major deterrent to crime.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "diaphanous",
      "meaning": "Light, delicate, and translucent (especially of fabric).",
      "official_example": "She wore a diaphanous dress of pale gold.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "diatribe",
      "meaning": "A forceful and bitter verbal attack against someone or something.",
      "official_example": "A diatribe against the Roman Catholic Church.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "dichotomy",
      "meaning": "A division or contrast between two things that are or are represented as being opposed or entirely different.",
      "official_example": "A rigid dichotomy between science and mysticism.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "didactic",
      "meaning": "Intended to teach, particularly in having moral instruction as an ulterior motive.",
      "official_example": "A didactic novel that set out to expose social injustice.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "diffidence",
      "meaning": "Modesty or shyness resulting from a lack of self-confidence.",
      "official_example": "I say this with some diffidence.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "diffident",
      "meaning": "Modest or shy due to a lack of self-confidence.",
      "official_example": "He was too diffident to voice his opinion.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "diffuse",
      "meaning": "Spread out over a large area; not concentrated.",
      "official_example": "The diffuse community centered on the church.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "digression",
      "meaning": "A temporary departure from the main subject in speech or writing.",
      "official_example": "Let's return to the main topic after that brief digression.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "dirge",
      "meaning": "A lament for the dead, especially one forming part of a funeral rite.",
      "official_example": "Singers chanted dirges for the fallen heroes.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "disabuse",
      "meaning": "Persuade (someone) that an idea or belief is mistaken.",
      "official_example": "He quickly disabused me of my fanciful notions.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "discerning",
      "meaning": "Having or showing good judgment.",
      "official_example": "The restaurant attracts discerning customers.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "discordant",
      "meaning": "Disagreeing or incongruous.",
      "official_example": "The principle of meritocracy is discordant with claims of inherited worth.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "discredit",
      "meaning": "Harm the good reputation of (someone or something).",
      "official_example": "His remarks were taken out of context in an attempt to discredit him.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "discrepancy",
      "meaning": "A lack of compatibility or similarity between two or more facts.",
      "official_example": "There's a discrepancy between your account and his.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "discrete",
      "meaning": "Individually separate and distinct.",
      "official_example": "Speech sounds are produced as a continuous sound signal rather than discrete units.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "disingenuous",
      "meaning": "Not candid or sincere, typically by pretending that one knows less about something than one really does.",
      "official_example": "It is disingenuous to claim you didn't know about the policy.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "disinterested",
      "meaning": "Not influenced by considerations of personal advantage; impartial.",
      "official_example": "A banker is under an obligation to give disinterested advice.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "disjointed",
      "meaning": "Lacking a coherent sequence or connection.",
      "official_example": "Piecing together disjointed fragments of information.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "dismiss",
      "meaning": "Treat as unworthy of serious consideration.",
      "official_example": "It would be easy to dismiss him as all brawn and no brain.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "disparage",
      "meaning": "Regard or represent as being of little worth.",
      "official_example": "He never missed an opportunity to disparage his competitors.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "disparate",
      "meaning": "Essentially different in kind; not allowing comparison.",
      "official_example": "They inhabit disparate worlds of thought.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "dissemble",
      "meaning": "Conceal one's true motives, feelings, or beliefs.",
      "official_example": "An honest, sincere person with no need to dissemble.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "disseminate",
      "meaning": "Spread (something, especially information) widely.",
      "official_example": "Health authorities should foster good practice by disseminating information.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "dissolution",
      "meaning": "The closing down or dismissal of an assembly, partnership, or official body.",
      "official_example": "The dissolution of their marriage.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "dissonance",
      "meaning": "Lack of harmony among musical notes; conflict.",
      "official_example": "There was a cognitive dissonance in his argument.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "distend",
      "meaning": "Swell or cause to swell by pressure from inside.",
      "official_example": "The abdomen distended rapidly.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "dogma",
      "meaning": "A principle or set of principles laid down by an authority as incontrovertibly true.",
      "official_example": "The rejection of political dogma.",
      "sentiment": "neutral",
      "intensity": 4
    },
    {
      "word": "dogmatic",
      "meaning": "Inclined to lay down principles as incontrovertibly true.",
      "official_example": "She was dogmatic in her belief that the theory was flawless.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "dormant",
      "meaning": "Having normal physical functions suspended or slowed down for a period of time; in or as if in a deep sleep.",
      "official_example": "Dormant butterflies.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "dupe",
      "meaning": "Deceive; trick.",
      "official_example": "The newspaper was duped into publishing an untrue story.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "ebullient",
      "meaning": "Cheerful and full of energy.",
      "official_example": "Her ebullient personality lit up the room.",
      "sentiment": "positive",
      "intensity": 5
    },
    {
      "word": "eccentric",
      "meaning": "Unconventional and slightly strange.",
      "official_example": "My favorite aunt is very eccentric.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "eclectic",
      "meaning": "Deriving ideas, style, or taste from a broad and diverse range of sources.",
      "official_example": "Her musical tastes are eclectic.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "efficacy",
      "meaning": "The ability to produce a desired or intended result.",
      "official_example": "There is little information on the efficacy of this treatment.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "elegy",
      "meaning": "A poem of serious reflection, typically a lament for the dead.",
      "official_example": "The poet wrote an elegy for his late friend.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "elicit",
      "meaning": "Evoke or draw out (a response, answer, or fact) from someone in reaction to one's own actions or questions.",
      "official_example": "They invariably elicit exclamations of approval from guests.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "embellish",
      "meaning": "Make (something) more attractive by the addition of decorative details or features.",
      "official_example": "Blue silk embellished with golden embroidery.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "empirical",
      "meaning": "Based on, concerned with, or verifiable by observation or experience rather than theory or pure logic.",
      "official_example": "They provided considerable empirical evidence to support their argument.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "emulate",
      "meaning": "Match or surpass (a person or achievement), typically by imitation.",
      "official_example": "Lesser men trying to emulate his greatness.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "endemic",
      "meaning": "Regularly found among particular people or in a certain area.",
      "official_example": "A disease endemic in the tropics.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "enervate",
      "meaning": "To make someone feel drained of energy or vitality.",
      "official_example": "The oppressive heat enervated the workers.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "engender",
      "meaning": "Cause or give rise to (a feeling, situation, or condition).",
      "official_example": "The issue engendered continuing controversy.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "enigma",
      "meaning": "A person or thing that is mysterious, puzzling, or difficult to understand.",
      "official_example": "Madeleine was still an enigma to him.",
      "sentiment": "neutral",
      "intensity": 4
    },
    {
      "word": "ephemeral",
      "meaning": "Lasting for a very short time.",
      "official_example": "Fashions are ephemeral.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "equable",
      "meaning": "Not easily disturbed or angered; calm and even-tempered.",
      "official_example": "She had an equable temper.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "equivocate",
      "meaning": "Use ambiguous language so as to conceal the truth or avoid committing oneself.",
      "official_example": "The government has equivocated too often in the past.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "erratic",
      "meaning": "Not even or regular in pattern or movement; unpredictable.",
      "official_example": "Her breathing was erratic.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "erudite",
      "meaning": "Having or showing great knowledge or learning.",
      "official_example": "The professor was an erudite scholar.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "esoteric",
      "meaning": "Intended for or understood by only a small group.",
      "official_example": "The lecture was too esoteric for a general audience.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "estimable",
      "meaning": "Worthy of great respect.",
      "official_example": "She was shown into that estimable woman's presence.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "eulogy",
      "meaning": "A speech or piece of writing that praises someone or something highly, typically someone who has just died.",
      "official_example": "His good friend delivered a brief eulogy.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "euphemism",
      "meaning": "A mild or indirect word or expression substituted for one considered to be too harsh or blunt when referring to something unpleasant or embarrassing.",
      "official_example": "‘Downsizing’ as a euphemism for cuts.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "exacerbate",
      "meaning": "Make (a problem, bad situation, or negative feeling) worse.",
      "official_example": "The exorbitant cost of land in urban areas only exacerbated the problem.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "exact",
      "meaning": "Demand and obtain (something, especially a payment) from someone.",
      "official_example": "Tributes exacted from the Slavic peoples.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "exculpate",
      "meaning": "Show or declare that someone is not guilty of wrongdoing.",
      "official_example": "The newly discovered evidence exculpated the suspect.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "exigent",
      "meaning": "Pressing; demanding.",
      "official_example": "The exigent demands of the music took a toll on her voice.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "exonerate",
      "meaning": "Absolve (someone) from blame for a fault or wrongdoing, especially after due consideration of the case.",
      "official_example": "They should exonerate these men from this crime.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "explicit",
      "meaning": "Stated clearly and in detail, leaving no room for confusion or doubt.",
      "official_example": "The speaker's intentions were not made explicit.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "extrapolate",
      "meaning": "Extend the application of (a method or conclusion, especially one based on statistics) to an unknown situation by assuming that existing trends will continue or similar methods will be applicable.",
      "official_example": "The results cannot be extrapolated to other patient groups.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "facetious",
      "meaning": "Treating serious issues with deliberately inappropriate humor; flippant.",
      "official_example": "A facetious remark.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "fallacious",
      "meaning": "Based on a mistaken belief.",
      "official_example": "Their argument was built entirely on fallacious assumptions.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "fallacy",
      "meaning": "A mistaken belief, especially one based on unsound argument.",
      "official_example": "The notion that the camera never lies is a fallacy.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "fallow",
      "meaning": "(Of farmland) plowed and harrowed but left unsown for a period in order to restore its fertility as part of a crop rotation or to avoid surplus production.",
      "official_example": "Incentives for farmers to let the land lie fallow.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "fastidious",
      "meaning": "Very attentive to detail; difficult to please.",
      "official_example": "She was fastidious about the cleanliness of her home.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "fatuous",
      "meaning": "Silly and pointless.",
      "official_example": "A fatuous comment.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "fawning",
      "meaning": "Displaying exaggerated flattery or affection; obsequious.",
      "official_example": "Fawning adoration.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "felicitous",
      "meaning": "Well chosen or suited to the circumstances.",
      "official_example": "A felicitous phrase.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "fervent",
      "meaning": "Having or displaying a passionate intensity.",
      "official_example": "A fervent disciple of tax reform.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "filibuster",
      "meaning": "An action such as a prolonged speech that obstructs progress in a legislative assembly while not technically contravening the required procedures.",
      "official_example": "It was defeated by a Senate filibuster in June.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "flag",
      "meaning": "Become tired, weaker, or less enthusiastic.",
      "official_example": "If you begin to flag, there is an excellent café to revive you.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "fledgling",
      "meaning": "A person or organization that is immature, inexperienced, or underdeveloped.",
      "official_example": "The fledgling democracies of eastern Europe.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "flout",
      "meaning": "Openly disregard (a rule, law or convention).",
      "official_example": "These same companies still flout basic ethical practices.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "foment",
      "meaning": "Instigate or stir up (an undesirable or violent sentiment or course of action).",
      "official_example": "They accused him of fomenting political unrest.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "forestall",
      "meaning": "Prevent or obstruct (an anticipated event or action) by taking action ahead of time.",
      "official_example": "Vitamins may forestall many diseases of aging.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "fortuitous",
      "meaning": "Happening by accident or chance rather than design.",
      "official_example": "The similarity between the paintings may not be simply fortuitous.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "fractious",
      "meaning": "Irritable and quarrelsome.",
      "official_example": "They fight and squabble like fractious children.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "frugal",
      "meaning": "Sparing or economical with regard to money or food.",
      "official_example": "He led a remarkably frugal existence.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "fulminate",
      "meaning": "Express vehement protest.",
      "official_example": "He fulminated against the evils of his time.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "furtive",
      "meaning": "Attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble; secretive.",
      "official_example": "They spent a furtive day together.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "futile",
      "meaning": "Incapable of producing any useful result; pointless.",
      "official_example": "A futile attempt to keep fans from mounting the stage.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "gainsay",
      "meaning": "Deny or contradict (a fact or statement).",
      "official_example": "The impact of the railroads cannot be gainsaid.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "garrulous",
      "meaning": "Excessively talkative, especially on trivial matters.",
      "official_example": "Polonius is portrayed as a foolish, garrulous old man.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "goad",
      "meaning": "Provoke or annoy (someone) so as to stimulate some action or reaction.",
      "official_example": "He goaded her on to more daring revelations.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "gouge",
      "meaning": "Overcharge; swindle.",
      "official_example": "The airline ended up gouging the very passengers it was supposed to assist.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "grandiloquent",
      "meaning": "Pompous or extravagant in language, style, or manner, especially in a way that is intended to impress.",
      "official_example": "A grandiloquent celebration of Spanish glory.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "gregarious",
      "meaning": "Fond of company; sociable.",
      "official_example": "He was a popular and gregarious man.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "guile",
      "meaning": "Sly or cunning intelligence.",
      "official_example": "He used all his guile and guts to free himself from the trap.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "guileless",
      "meaning": "Devoid of guile; innocent and without deception.",
      "official_example": "His face, once so open and guileless.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "gullible",
      "meaning": "Easily persuaded to believe something; credulous.",
      "official_example": "An attempt to persuade a gullible public to spend their money.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "hackneyed",
      "meaning": "Lacking significance through having been overused; unoriginal and trite.",
      "official_example": "Hackneyed old sayings.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "halcyon",
      "meaning": "Denoting a period of time in the past that was idyllically happy and peaceful.",
      "official_example": "The halcyon days of the mid-1980s, when profits were soaring.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "harangue",
      "meaning": "A lengthy and aggressive speech.",
      "official_example": "The coach harangued the team after the loss.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "iconoclast",
      "meaning": "A person who attacks cherished beliefs or institutions.",
      "official_example": "The artist was an iconoclast who defied convention.",
      "sentiment": "neutral",
      "intensity": 4
    },
    {
      "word": "impecunious",
      "meaning": "Having little or no money.",
      "official_example": "As an impecunious student he ate sparingly.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "impetuous",
      "meaning": "Acting without thought; impulsive.",
      "official_example": "His impetuous decision cost him dearly.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "implacable",
      "meaning": "Unable to be placated.",
      "official_example": "The enemy forces remained implacable despite attempts to negotiate.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "inchoate",
      "meaning": "Not fully formed or developed; undeveloped.",
      "official_example": "The plan was still inchoate when presented.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "indolent",
      "meaning": "Wanting to avoid activity or exertion; lazy.",
      "official_example": "The indolent student barely passed his exams.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "ineffable",
      "meaning": "Too great or extreme to be expressed in words.",
      "official_example": "The beauty of the sunset was ineffable.",
      "sentiment": "positive",
      "intensity": 5
    },
    {
      "word": "inimical",
      "meaning": "Tending to obstruct or harm; hostile.",
      "official_example": "The harsh climate was inimical to agriculture.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "insipid",
      "meaning": "Lacking vigor or interest; lacking flavor.",
      "official_example": "The food was insipid and overcooked.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "intransigent",
      "meaning": "Unwilling to change one's views or agree.",
      "official_example": "The intransigent negotiator blocked every deal.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "irascible",
      "meaning": "Having or showing a tendency to be easily angered.",
      "official_example": "The irascible old man yelled at the children playing outside.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "laconic",
      "meaning": "Using very few words; brief and concise.",
      "official_example": "His laconic reply told us all we needed to know.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "lassitude",
      "meaning": "Physical or mental weariness; lack of energy.",
      "official_example": "The tropical heat caused a general lassitude.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "laud",
      "meaning": "Praise (a person or their achievements) highly, especially in a public context.",
      "official_example": "The obituary lauded him as a great statesman and soldier.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "lethargic",
      "meaning": "Affected by lethargy; sluggish and apathetic.",
      "official_example": "The heat made everyone feel lethargic and unmotivated.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "loquacious",
      "meaning": "Tending to talk a great deal; talkative.",
      "official_example": "She was loquacious at parties but shy at work.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "lucid",
      "meaning": "Expressed clearly; easy to understand.",
      "official_example": "The professor gave a lucid explanation.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "malevolent",
      "meaning": "Having or showing a wish to do evil to others.",
      "official_example": "The villain gave a malevolent smile.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "mellifluous",
      "meaning": "Pleasingly smooth and musical to hear.",
      "official_example": "She had a mellifluous voice that soothed listeners.",
      "sentiment": "positive",
      "intensity": 5
    },
    {
      "word": "mendacious",
      "meaning": "Not telling the truth; lying.",
      "official_example": "The mendacious witness was caught in several lies.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "mercurial",
      "meaning": "Subject to sudden changes of mood; unpredictable.",
      "official_example": "His mercurial temperament made him hard to trust.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "misanthrope",
      "meaning": "A person who dislikes humankind.",
      "official_example": "The recluse was a confirmed misanthrope.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "mitigate",
      "meaning": "To make less severe, serious, or painful.",
      "official_example": "The law was designed to mitigate the harm.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "mollify",
      "meaning": "Appease the anger or anxiety of (someone).",
      "official_example": "He tried to mollify his critics with an apology.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "obdurate",
      "meaning": "Stubbornly refusing to change one's opinion.",
      "official_example": "He remained obdurate in his refusal to negotiate.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "obsequious",
      "meaning": "Obedient or attentive to an excessive or servile degree.",
      "official_example": "The obsequious assistant agreed with everything.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "obtuse",
      "meaning": "Annoyingly insensitive or slow to understand.",
      "official_example": "He was being deliberately obtuse.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "obviate",
      "meaning": "Remove (a need or difficulty).",
      "official_example": "The new medical treatment obviates the need for surgery.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "onerous",
      "meaning": "Involving an amount of effort and difficulty that is oppressively burdensome.",
      "official_example": "The onerous task took weeks to complete.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "opaque",
      "meaning": "Not able to be seen through; not transparent; difficult to understand.",
      "official_example": "His motives remained opaque even to close friends.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "ostentation",
      "meaning": "Pretentious and vulgar display of wealth or knowledge.",
      "official_example": "The mansion was decorated with pure ostentation.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "paucity",
      "meaning": "The presence of something only in small or insufficient quantities.",
      "official_example": "There was a paucity of evidence for the claim.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "pedantic",
      "meaning": "Excessively concerned with minor details or rules.",
      "official_example": "The pedantic editor corrected every comma.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "penury",
      "meaning": "Extreme poverty; destitution.",
      "official_example": "Many citizens were forced to live in penury after the market crashed.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "perfidious",
      "meaning": "Deceitful and untrustworthy.",
      "official_example": "The perfidious ally switched sides at the last moment.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "perspicacious",
      "meaning": "Having a ready insight; shrewd.",
      "official_example": "The perspicacious analyst predicted the crash.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "petulant",
      "meaning": "Childishly sulky or bad-tempered.",
      "official_example": "The petulant child threw a tantrum.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "philanthropy",
      "meaning": "The desire to promote the welfare of others.",
      "official_example": "Her philanthropy funded dozens of schools.",
      "sentiment": "positive",
      "intensity": 5
    },
    {
      "word": "phlegmatic",
      "meaning": "Having an unemotional and stolidly calm disposition.",
      "official_example": "He accepted the bad news with phlegmatic calm.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "placate",
      "meaning": "To make someone less angry or hostile.",
      "official_example": "He tried to placate the furious customer.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "platitude",
      "meaning": "A remark or statement that has been used so often it is no longer interesting.",
      "official_example": "The speech was full of empty platitudes.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "plausible",
      "meaning": "Seeming reasonable or probable.",
      "official_example": "The explanation was plausible but unverified.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "plethora",
      "meaning": "A large or excessive amount of (something).",
      "official_example": "The library offers a plethora of resources for researchers.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "precarious",
      "meaning": "Not securely held; dangerously likely to fall.",
      "official_example": "The ladder was in a precarious position.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "prevaricate",
      "meaning": "To speak or act in an evasive way.",
      "official_example": "He prevaricated when asked about the money.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "probity",
      "meaning": "The quality of having strong moral principles; honesty.",
      "official_example": "His reputation for probity was unimpeachable.",
      "sentiment": "positive",
      "intensity": 5
    },
    {
      "word": "prodigal",
      "meaning": "Spending money or resources freely and recklessly.",
      "official_example": "The prodigal heir squandered his inheritance.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "profligate",
      "meaning": "Recklessly extravagant or wasteful in the use of resources.",
      "official_example": "The profligate spending led to bankruptcy.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "propitious",
      "meaning": "Giving or indicating a good chance of success; favorable.",
      "official_example": "The stars seemed propitious for the venture.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "prosaic",
      "meaning": "Having the style or diction of prose; lacking imagination.",
      "official_example": "His explanation was accurate but thoroughly prosaic.",
      "sentiment": "negative",
      "intensity": 2
    },
    {
      "word": "prudent",
      "meaning": "Acting with or showing care and thought for the future.",
      "official_example": "It was prudent to save for emergencies.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "pugnacious",
      "meaning": "Eager or quick to argue, quarrel, or fight.",
      "official_example": "His pugnacious attitude made meetings tense.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "querulous",
      "meaning": "Complaining in a petulant or whining manner.",
      "official_example": "The querulous patient drove the nurses to distraction.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "quixotic",
      "meaning": "Exceedingly idealistic; unrealistic and impractical.",
      "official_example": "His quixotic plan to end poverty overnight failed.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "rancorous",
      "meaning": "Characterized by bitterness or resentment.",
      "official_example": "The rancorous dispute tore the family apart.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "recalcitrant",
      "meaning": "Having an obstinately uncooperative attitude.",
      "official_example": "The recalcitrant prisoner refused to follow orders.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "recondite",
      "meaning": "Not known by many people; abstruse.",
      "official_example": "The topic was recondite even for specialists.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "redolent",
      "meaning": "Strongly reminiscent or suggestive of; fragrant.",
      "official_example": "The air was redolent of pine and fresh earth.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "replete",
      "meaning": "Filled or well supplied with something.",
      "official_example": "The library was replete with rare manuscripts.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "repudiate",
      "meaning": "Refuse to accept or be associated with.",
      "official_example": "The minister was forced to repudiate the controversial remarks.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "reticent",
      "meaning": "Not revealing one's thoughts or feelings readily.",
      "official_example": "She was reticent about her past.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "sagacious",
      "meaning": "Having or showing keen mental discernment; wise.",
      "official_example": "The sagacious advisor steered the company well.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "sanguine",
      "meaning": "Optimistic, especially in a difficult situation.",
      "official_example": "He remained sanguine despite the setbacks.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "sardonic",
      "meaning": "Grimly mocking or cynical.",
      "official_example": "He gave a sardonic laugh at the suggestion.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "soporific",
      "meaning": "Tending to induce drowsiness or sleep.",
      "official_example": "The lecture was so soporific half the class fell asleep.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "specious",
      "meaning": "Superficially plausible but actually wrong.",
      "official_example": "He presented a specious argument that fooled no one.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "spurious",
      "meaning": "Not being what it purports to be; false or fake.",
      "official_example": "The document was later shown to be spurious.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "stymie",
      "meaning": "To prevent or hinder the progress of.",
      "official_example": "Lack of funding stymied the research.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "sycophant",
      "meaning": "A person who acts obsequiously to gain advantage.",
      "official_example": "The boss was surrounded by sycophants.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "taciturn",
      "meaning": "Reserved or uncommunicative in speech; saying little.",
      "official_example": "The taciturn soldier rarely spoke unless asked.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "tenacious",
      "meaning": "Tending to keep a firm hold; not readily relinquishing.",
      "official_example": "She was tenacious in pursuit of her goals.",
      "sentiment": "positive",
      "intensity": 5
    },
    {
      "word": "tirade",
      "meaning": "A long, angry speech of criticism or accusation.",
      "official_example": "He launched into a tirade against the decision.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "torpor",
      "meaning": "A state of physical or mental inactivity; lethargy.",
      "official_example": "Winter plunged the bear into a deep torpor.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "truculent",
      "meaning": "Eager or quick to argue or fight; aggressively defiant.",
      "official_example": "The truculent student challenged every rule.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "turbid",
      "meaning": "Cloudy, opaque, or thick with suspended matter.",
      "official_example": "The turbid water made it impossible to see below.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "ubiquitous",
      "meaning": "Present, appearing, or found everywhere.",
      "official_example": "Smartphones have become ubiquitous.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "unctuous",
      "meaning": "Excessively flattering; oily.",
      "official_example": "The unctuous salesman made her uncomfortable.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "vacillate",
      "meaning": "Alternate or waver between different opinions or actions; be indecisive.",
      "official_example": "I had for a time vacillated between teaching and journalism.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "vacuous",
      "meaning": "Having or showing a lack of thought or intelligence.",
      "official_example": "Her vacuous smile revealed no understanding.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "venerate",
      "meaning": "To regard with great respect; revere.",
      "official_example": "The community venerated the elder healer.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "veracious",
      "meaning": "Truthful; habitually speaking the truth.",
      "official_example": "The veracious journalist refused to distort facts.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "verbose",
      "meaning": "Using or expressed in more words than are needed.",
      "official_example": "The report was unnecessarily verbose.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "vicarious",
      "meaning": "Experienced in the imagination through another's actions.",
      "official_example": "She got vicarious pleasure from her son's success.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "vilify",
      "meaning": "To speak or write about in an abusively disparaging manner.",
      "official_example": "The tabloids vilified the celebrity without cause.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "vitriolic",
      "meaning": "Filled with bitter criticism or malice.",
      "official_example": "The vitriolic review destroyed the author's confidence.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "vituperative",
      "meaning": "Bitter and abusive.",
      "official_example": "The debate devolved into a vituperative shouting match.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "volatile",
      "meaning": "Liable to change rapidly and unpredictably; explosive.",
      "official_example": "The volatile situation required careful diplomacy.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "zealot",
      "meaning": "A person who is fanatical and uncompromising.",
      "official_example": "The zealot refused to hear any opposing view.",
      "sentiment": "negative",
      "intensity": 5
    }
  ],
  "related_pairs": [
    ["abrogate", "repudiate"],
    ["abscond", "flee"],
    ["accede", "acquiesce"],
    ["acerbic", "caustic"],
    ["acrimony", "rancorous"],
    ["acrimony", "vitriolic"],
    ["admonish", "castigate"],
    ["adroit", "dexterous"],
    ["adulation", "fawning"],
    ["adulation", "sycophant"],
    ["adulterate", "contaminate"],
    ["aggrandize", "elevate"],
    ["alacrity", "eagerness"],
    ["alacrity", "ebullient"],
    ["alleviate", "ameliorate"],
    ["alleviate", "assuage"],
    ["alleviate", "mitigate"],
    ["alleviate", "mollify"],
    ["amalgamate", "combine"],
    ["ambivalent", "uncertain"],
    ["ameliorate", "improve"],
    ["amenable", "complaisant"],
    ["anachronism", "misplacement"],
    ["analogous", "comparable"],
    ["anathema", "abomination"],
    ["anomalous", "aberrant"],
    ["antipathy", "hostility"],
    ["antipathy", "inimical"],
    ["antipathy", "malevolent"],
    ["apathy", "indifference"],
    ["appease", "assuage"],
    ["appease", "mollify"],
    ["appease", "placate"],
    ["apocryphal", "fictitious"],
    ["approbation", "approval"],
    ["arbitrary", "capricious"],
    ["arcane", "esoteric"],
    ["archaic", "obsolete"],
    ["arduous", "onerous"],
    ["artful", "cunning"],
    ["articulate", "eloquent"],
    ["artless", "guileless"],
    ["artless", "ingenuous"],
    ["ascetic", "austere"],
    ["assiduous", "fastidious"],
    ["assuage", "alleviate"],
    ["audacious", "bold"],
    ["austere", "strict"],
    ["avarice", "cupidity"],
    ["banal", "hackneyed"],
    ["bellicose", "belligerent"],
    ["bellicose", "pugnacious"],
    ["bellicose", "truculent"],
    ["belligerent", "pugnacious"],
    ["beneficent", "philanthropic"],
    ["bolster", "buttress"],
    ["bolster", "corroborate"],
    ["bolster", "support"],
    ["bombastic", "grandiloquent"],
    ["bombastic", "verbose"],
    ["boorish", "uncouth"],
    ["bucolic", "pastoral"],
    ["burgeon", "proliferate"],
    ["cacophony", "dissonance"],
    ["cajole", "fawning"],
    ["calumniate", "aspersion"],
    ["calumniate", "calumny"],
    ["calumniate", "vilify"],
    ["calumny", "slander"],
    ["calumny", "vilify"],
    ["capricious", "fickle"],
    ["capricious", "mercurial"],
    ["capricious", "volatile"],
    ["castigate", "reprimand"],
    ["catalyst", "stimulus"],
    ["caustic", "acrimony"],
    ["caustic", "mordant"],
    ["caustic", "vitriolic"],
    ["censure", "condemn"],
    ["chauvinist", "jingoist"],
    ["chicanery", "guile"],
    ["chicanery", "perfidious"],
    ["chicanery", "trickery"],
    ["cogent", "compelling"],
    ["cogent", "lucid"],
    ["cogent", "perspicacious"],
    ["commensurate", "proportionate"],
    ["complaisant", "obliging"],
    ["compliant", "obsequious"],
    ["conciliatory", "appeasing"],
    ["conciliatory", "placatory"],
    ["condone", "exculpate"],
    ["condone", "overlook"],
    ["confound", "baffle"],
    ["connoisseur", "expert"],
    ["contention", "dispute"],
    ["contentious", "belligerent"],
    ["contentious", "controversial"],
    ["contentious", "pugnacious"],
    ["contrite", "penitent"],
    ["contrite", "remorseful"],
    ["conundrum", "enigma"],
    ["convoluted", "intricate"],
    ["craven", "cowardly"],
    ["craven", "diffident"],
    ["credulous", "gullible"],
    ["credulous", "obtuse"],
    ["culpable", "guilty"],
    ["cynical", "skeptical"],
    ["daunt", "intimidate"],
    ["decorum", "propriety"],
    ["deference", "respect"],
    ["deference", "veneration"],
    ["deleterious", "harmful"],
    ["deleterious", "inimical"],
    ["delineate", "describe"],
    ["deride", "mock"],
    ["derivative", "unoriginal"],
    ["desiccate", "dehydrate"],
    ["desultory", "aimless"],
    ["deterrent", "discouragement"],
    ["diatribe", "harangue"],
    ["diatribe", "tirade"],
    ["dichotomy", "division"],
    ["didactic", "instructive"],
    ["diffidence", "shyness"],
    ["diffident", "reticent"],
    ["diffident", "taciturn"],
    ["diffuse", "scattered"],
    ["digression", "deviation"],
    ["discerning", "perspicacious"],
    ["discordant", "dissonant"],
    ["discredit", "denigrate"],
    ["disingenuous", "mendacious"],
    ["disinterested", "impartial"],
    ["disinterested", "unbiased"],
    ["disparage", "denigrate"],
    ["disparage", "deride"],
    ["disparate", "heterogeneous"],
    ["dissonance", "cacophony"],
    ["dissonance", "discordant"],
    ["dogmatic", "intransigent"],
    ["dogmatic", "obdurate"],
    ["dupe", "chicanery"],
    ["dupe", "guile"],
    ["eclectic", "heterogeneous"],
    ["efficacy", "efficacious"],
    ["elegy", "dirge"],
    ["embellish", "aggrandize"],
    ["emulate", "derivative"],
    ["endemic", "ubiquitous"],
    ["enigma", "arcane"],
    ["enigma", "esoteric"],
    ["ephemeral", "transient"],
    ["equable", "phlegmatic"],
    ["equivocate", "prevaricate"],
    ["erratic", "capricious"],
    ["erratic", "mercurial"],
    ["erudite", "sagacious"],
    ["esoteric", "arcane"],
    ["esoteric", "recondite"],
    ["eulogy", "approbation"],
    ["eulogy", "laud"],
    ["euphemism", "circumlocution"],
    ["exacerbate", "aggravate"],
    ["exculpate", "exonerate"],
    ["exculpate", "vindicate"],
    ["exonerate", "vindicate"],
    ["fallacious", "specious"],
    ["fallacious", "spurious"],
    ["fastidious", "pedantic"],
    ["fatuous", "vacuous"],
    ["fawning", "obsequious"],
    ["fawning", "sycophant"],
    ["felicitous", "propitious"],
    ["foment", "instigate"],
    ["forestall", "obviate"],
    ["fractious", "irascible"],
    ["fractious", "petulant"],
    ["frugal", "parsimonious"],
    ["fulminate", "diatribe"],
    ["fulminate", "tirade"],
    ["furtive", "surreptitious"],
    ["gainsay", "repudiate"],
    ["garrulous", "loquacious"],
    ["garrulous", "verbose"],
    ["grandiloquent", "bombastic"],
    ["gullible", "credulous"],
    ["hackneyed", "banal"],
    ["hackneyed", "platitude"],
    ["hackneyed", "trite"],
    ["iconoclast", "zealot"],
    ["impetuous", "capricious"],
    ["indolent", "torpor"],
    ["insipid", "banal"],
    ["intransigent", "obdurate"],
    ["intransigent", "recalcitrant"],
    ["irascible", "petulant"],
    ["irascible", "pugnacious"],
    ["irascible", "truculent"],
    ["laconic", "reticent"],
    ["laconic", "taciturn"],
    ["laud", "approbation"],
    ["laud", "venerate"],
    ["lethargic", "indolent"],
    ["lethargic", "lassitude"],
    ["lethargic", "phlegmatic"],
    ["lethargic", "torpor"],
    ["malevolent", "perfidious"],
    ["mellifluous", "redolent"],
    ["mendacious", "perfidious"],
    ["mendacious", "spurious"],
    ["mitigate", "assuage"],
    ["mollify", "placate"],
    ["obsequious", "sycophant"],
    ["obsequious", "unctuous"],
    ["onerous", "arduous"],
    ["pedantic", "fastidious"],
    ["penury", "impecunious"],
    ["plethora", "copious"],
    ["probity", "veracious"],
    ["prodigal", "profligate"],
    ["pugnacious", "belligerent"],
    ["pugnacious", "truculent"],
    ["querulous", "petulant"],
    ["rancorous", "vitriolic"],
    ["repudiate", "gainsay"],
    ["sagacious", "perspicacious"],
    ["sanguine", "ebullient"],
    ["sardonic", "caustic"],
    ["soporific", "torpor"],
    ["specious", "spurious"],
    ["sycophant", "obsequious"],
    ["tenacious", "intransigent"],
    ["tirade", "harangue"],
    ["truculent", "belligerent"],
    ["vacillate", "capricious"],
    ["vacillate", "equivocate"],
    ["verbose", "grandiloquent"],
    ["volatile", "mercurial"],
    ["vituperative", "calumny"],
    ["vituperative", "vitriolic"],
    ["zealot", "iconoclast"]
  ]
};