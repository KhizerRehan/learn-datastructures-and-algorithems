// Name of a file based on URL
/*
URL: https://leetcode.com/problems/length-of-last-word/description/
// ---------------------------------------------------
// Solution: KhizerRehan
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s.length === "" || s.length === 0) {
    return 0;
  }

  const removeWhiteSpaces = s.split(" ").filter(Boolean).join(" ");
  const splittedString = removeWhiteSpaces.split(" ");

  return splittedString[splittedString.length - 1].length;
};
// ---------------------------------------------------

// ---------------------------------------------------
// Solution-1:
// ---------------------------------------------------

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
