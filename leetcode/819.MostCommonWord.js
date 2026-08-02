// Name of a file based on URL

// URL: https://leetcode.com/problems/<problem-solving>

// ---------------------------------------------------
// Solution: KhizerRehan
// ---------------------------------------------------

// ---------------------------------------------------
// Solution-1:
// Regex Explanation:
/*

The regular expression `[^\w\s]` used in the `replace` method in your JavaScript code matches any character that is not a word character or a whitespace character. Here's a detailed breakdown of what each part does:

### Breakdown of the Code

```javascript
let vocab = paragraph.toLowerCase().replace(/[^\w\s]/g, ' ').split(' ');
```

1. `paragraph.toLowerCase()`: Converts the entire paragraph to lowercase. This ensures that the case of the letters doesn't matter when processing the text.

2. `.replace(/[^\w\s]/g, ' ')`:
   - `[^\w\s]`: This is a character set negation. It matches any character that is not (`^`) a word character (`\w`) or a whitespace character (`\s`).
     - `\w`: Matches any word character, which includes letters (a-z, A-Z), digits (0-9), and underscores (_).
     - `\s`: Matches any whitespace character, including spaces, tabs, and newlines.
   - `g`: The global flag ensures that all occurrences of the pattern are replaced, not just the first one.
   - `' '`: The replacement string. Any character that matches the pattern `[^\w\s]` is replaced with a space.

3. `.split(' ')`: Splits the resulting string into an array of substrings using spaces as the delimiter.

*/
// ---------------------------------------------------

(function () {
  var mostCommonWord = function (paragraph, banned) {
    let vocab = paragraph
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(" ");
    let frequency = {};
    for (const word of vocab) {
      if (!banned.includes(word) && word !== "") {
        frequency[word] = (frequency[word] || 0) + 1;
      }
    }

    // Find the most common word
    let max = -Infinity;
    let result = "";
    for (const word in frequency) {
      if (frequency[word] > max) {
        result = word;
        max = frequency[word];
      }
    }
    return result;
  };

  var paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.",
    banned = ["hit"];
  console.log(mostCommonWord(paragraph, banned));
})();

// ---------------------------------------------------
// Solution-2:
// ---------------------------------------------------

// ---------------------------------------------------
// Solution-3:
// ---------------------------------------------------

// ---------------------------------------------------
// Solution-4:
// ---------------------------------------------------

// ---------------------------------------------------
// Solution-5:
// ---------------------------------------------------
