// # 500. Keyboard Row

// ---------------------------------------------------
// Solution: KhizerRehan
https://leetcode.com/problems/keyboard-row/
https://leetcode.com/problems/keyboard-row/submissions/
// ---------------------------------------------------
/**
 * @param {string[]} words
 * @return {string[]}
 */
 const ROWS = ['qwertyuiop'.split(''), 'asdfghjkl'.split(''), 'zxcvbnm'.split('')]
 var findWords = function(words) {
   if (words.length === 0) {
     return []
   }
 
   const matchedWords = [];
   ROWS.forEach(row => {
     words.forEach(word => {
       const wordChars = word.split('');
       let matched = true;
 
       wordChars.forEach(char => {
         if (!row.includes(char.toLowerCase())) {
           matched = false;
           return
         }
       })
 
       if (matched) {
         matchedWords.push(word);
       }
     })
   })
 
   return matchedWords;
 };
// ---------------------------------------------------
// Solution-2:
https://leetcode.com/problems/keyboard-row/discuss/1478404/JavaScript-JS-simple-easy-solution
// ---------------------------------------------------

var findWords = function(words) {
  return words.filter(word => only1Row(word.toLowerCase()))
};

const only1Row = (word) => {
  let first = true, second = true, third = true
  for (const char of word) {
      // Once first/second/third becomes false, it will be false forever
      first = first && "qwertyuiop".includes(char)
      second = second && "asdfghjkl".includes(char)
      third = third && "zxcvbnm".includes(char)
      if (first || second || third) {
          continue
      } else {
          break
      }
  }
  return (first || second || third)
}
// ---------------------------------------------------
// Solution-3:
https://leetcode.com/problems/keyboard-row/discuss/1028081/Simple-JS-solution-with-array-methods
// ---------------------------------------------------

var findWords = function(words) {
  return words.filter(word =>{
      let presentInTopRow = word.split('').every(c=>"qwertyuiop".indexOf(c.toLowerCase())>-1);
      let presentInTMidRow = word.split('').every(c=>"asdfghjkl".indexOf(c.toLowerCase())>-1);
      let presentInTBottomRow = word.split('').every(c=>"zxcvbnm".indexOf(c.toLowerCase())>-1);
      return presentInTopRow||presentInTMidRow||presentInTBottomRow;
  });
};

// Slightly Manipulated by KhizerRehan

var findWords = function(words) {
  return words.filter(word =>{
      let presentInTopRow = word.split('').every(c=>"qwertyuiop".includes(c.toLowerCase()));
      let presentInTMidRow = word.split('').every(c=>"asdfghjkl".includes(c.toLowerCase()));
      let presentInTBottomRow = word.split('').every(c=>"zxcvbnm".includes(c.toLowerCase()));
      return presentInTopRow||presentInTMidRow||presentInTBottomRow;
  });
};
// ---------------------------------------------------
// Solution-3:
// ---------------------------------------------------

// See Further 
// Clear understandable JavaScript Algo. runs in O(nl) time and O(n) space
https://leetcode.com/problems/keyboard-row/discuss/?currentPage=1&orderBy=hot&query=&tag=javascript
// ---------------------------------------------------
// Solution-3:
// ---------------------------------------------------