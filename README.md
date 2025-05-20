# live-word-count

A real-time word and text statistics utility. Provides functions to count words, characters, lines, paragraphs, estimate reading time, average word length, and sentence count.

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

console.log("Word Count:", text.wordcount(input));               // 15
console.log("Character Count:", text.charcount(input));         // 114
console.log("Line Count:", text.linecount(input));              // 3
console.log("Paragraph Count:", text.paragraphcount(input));    // 2
console.log("Reading Time (minutes):", text.readingTime(input)); // 1
console.log("Average Word Length:", text.averageWordLength(input)); // ~5.2
console.log("Sentence Count:", text.sentenceCount(input));      // 2
```

---

## API Reference

### `text.wordcount(text)`

Returns the number of words.

```js
text.wordcount("Hello world!"); // 2
```

---

### `text.charcount(text)`

Returns the number of characters (including spaces and punctuation).

```js
text.charcount("Hello world!"); // 12
```

---

### `text.linecount(text)`

Returns the number of non-empty lines.

```js
text.linecount("Line one\n\nLine two"); // 2
```

---

### `text.paragraphcount(text)`

Returns the number of paragraphs (blocks separated by blank lines).

```js
text.paragraphcount("Para 1\n\nPara 2"); // 2
```

---

### `text.readingTime(text, wordsPerMinute = 200)`

Estimates reading time in minutes, using the specified words per minute (default: 200).

```js
text.readingTime("This is a 10-word test."); // 1
```

---

### `text.averageWordLength(text)`

Returns the average length of words in the text.

```js
text.averageWordLength("Bengaluru is the capital of Karnataka"); // ~4
```

---

### `text.sentenceCount(text)`

Counts the number of sentences based on `.`, `!`, and `?`.

```js
text.sentenceCount("Hi! How are you? Fine."); // 3
```

---

## License

MIT

