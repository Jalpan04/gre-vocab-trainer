# GRE Vocab Trainer

![GitHub top language](https://img.shields.io/github/languages/top/Jalpan04/gre-vocab-trainer) ![GitHub repo size](https://img.shields.io/github/repo-size/Jalpan04/gre-vocab-trainer) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, interactive frontend web application designed to help students master GRE vocabulary. It features a smart quiz engine, emotional/sentiment tagging, mnemonics, and performance statistics.

## Features

- **Dynamic Word Dashboard**: Search and filter your vocabulary list. Group words by sentiment (Positive, Negative, Neutral) and sort them alphabetically or by your weakest/strongest mastery levels.
- **Detailed Word Cards**: View official dictionary meanings, example sentences, sentiment intensity (1-5 scale), and related/synonymous words.
- **Interactive Quiz Engine**: Test your skills using two different quiz modes:
  1. **Definition Match**: Identify the correct definition for a given GRE word.
  2. **Sentence Completion**: Select the correct GRE word that fits into a contextual sentence.
  - Filter quizzes by sentiment tag (e.g. quiz only positive or negative words) to focus your practice.
- **Stats Dashboard**: Track your overall vocabulary progress, average mastery levels, and detailed breakdowns of your strength areas.
- **Add Custom Words**: Expand the built-in dictionary by adding your own vocabulary, meanings, examples, and sentiment metrics through an intuitive form.

## Technology Stack

- **Core**: Vanilla HTML5, CSS3, and JavaScript (ES6+)
- **Typography**: Google Fonts (Inter)
- **Icons**: SVG vectors for pixel-perfect icons and animations

## File Structure

```
├── index.html       # Application structure and markup
├── style.css        # Premium dark-themed UI styling
├── app.js           # Smart quiz engine, routing, and application logic
├── seed_data.js     # Built-in database of GRE words and metadata
└── LICENSE          # MIT License
```

## Setup & Usage

Since this is a lightweight, frontend-only application, there are no dependencies to install. 

1. Clone the repository:
   ```bash
   git clone https://github.com/Jalpan04/gre-vocab-trainer.git
   ```
2. Open `index.html` directly in any web browser, or serve it locally:
   ```bash
   # Using Python
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
