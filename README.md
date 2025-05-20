# live-word-count

A lightweight utility for real-time text statistics — count words, characters, lines, paragraphs, estimate reading time, and more.

---

## Installation

```bash
npm install live-word-count
```

---

## Usage

```js
import text from 'live-word-count';

const input = `Hello world! Welcome to live-word-count.

This tool provides live analytics on any given text.`;

console.log("Words:", text.wordcount(input));               // 15
console.log("Characters:", text.charcount(input));         // 114
console.log("Lines:", text.linecount(input));              // 3
console.log("Paragraphs:", text.paragraphcount(input));    // 2
console.log("Reading Time (min):", text.readingTime(input)); // 1
console.log("Avg Word Length:", text.averageWordLength(input)); // ~5.2
console.log("Sentences:", text.sentenceCount(input));      // 2
```

---

## API Reference

* **`wordcount(text)`** – Total number of words
  → `wordcount("Hello world!")` → `2`

* **`charcount(text)`** – Total characters (including spaces/punctuation)
  → `charcount("Hello world!")` → `12`

* **`linecount(text)`** – Non-empty lines
  → `linecount("Line one\n\nLine two")` → `2`

* **`paragraphcount(text)`** – Paragraphs (blocks separated by empty lines)
  → `paragraphcount("Para 1\n\nPara 2")` → `2`

* **`readingTime(text, wordsPerMinute = 200)`** – Estimated reading time in minutes
  → `readingTime("This is a 10-word test.")` → `1`

* **`averageWordLength(text)`** – Average word length
  → `averageWordLength("Short sentence.")` → `~6`

* **`sentenceCount(text)`** – Sentence count based on `.`, `!`, and `?`
  → `sentenceCount("Hi! How are you? Fine.")` → `3`

---

## License

[MIT](LICENSE)

---
