
// ################################################
// Link: https://leetcode.com/problems/remove-outermost-parentheses/
// Helpful Link: https://www.youtube.com/watch?v=ekdNNn3vOqQ
// SOLVED BY ME:
 function decompositonOfString(str) {
    var arr = str.split("");
    if (arr.length > 0) {
      return arr.map((value)=>{
        return value === "(" ? 1 : -1
      }
      );
    } else {
      return -1;
    }
  }

/**
* @param {string} S
* @return {string}
*/
var removeOuterParentheses = function(S) {
  let originalInput = S;
  let tokens = originalInput.split("");
  let decomposedArray = decompositonOfString(originalInput);
  let sum = 0;
  let previousSplittedIndex =-1;
  let splittedArray = [];
  decomposedArray.forEach(function(value, index) {
    sum += value;
    if (sum === 0) {
      let token = tokens.slice(previousSplittedIndex+1, index+1).join("");
      splittedArray.push(token.substring(1, token.length-1));
      previousSplittedIndex = index;
    }
  });

  const result = splittedArray.join("");
  return result;
};


// E.g Input => "(()())(())"


// ################################################
// DISCUSSION TAB SOLUTIONS:
// ################################################
// Solution-1: https://leetcode.com/problems/remove-outermost-parentheses/discuss/360062/Javascript

/*
	go in and count how many times '(' and ') occurs in the string
	if they equal each other than re set the count
	and remove the first and last letter of that substring
	add that new substring to your final string
	then set the start of the next upcoming substring to the next character
	in the string
*/  

var removeOuterParentheses = function(S) {
    
    let leftCount = 0 
    let rightCount = 0 
    let start = 0
    let final = ''
    
    for (let i = 0; i < S.length; i++){
        S[i] === '(' && (leftCount++)
        S[i] === ')' && (rightCount++)
        
        if (leftCount === rightCount){
            leftCount = 0
            rightCount = 0
            final += S.substring(start + 1, i)
            start = i + 1
        }
    }
    
    return final
};
// ################################################
// Solution-2: https://leetcode.com/problems/remove-outermost-parentheses/discuss/271439/Simple-javascript-solution

var removeOuterParentheses = function(S) {
    let resultArray = [],
            count = 0;
    for (let i = 0; i < S.length; i++) {
        S[i] === '(' ? count ++ : count --;
        if ((S[i] === '(' && count != 1) || (S[i] === ')' && count != 0)) {
            resultArray.push(S[i]);
        }
    }    
    return resultArray.join('');
};

// ################################################
// Solution-3: https://leetcode.com/problems/remove-outermost-parentheses/discuss/923426/Javascript-Solution

/**
 * @param {string} S
 * @return {string}
 */
 var removeOuterParentheses = function(S) {
    let count = 0, result = ''
    for (let i = 0; i < S.length; i++) {
        const char = S.charAt(i)
        if (char === '(' && count++ > 0) result += char
        if (char === ')' && count-- > 1) result += char
    }
    return result
};

// ################################################
// Solution-4: https://leetcode.com/problems/remove-outermost-parentheses/discuss/570698/JavaScript-Stack-Solution

var removeOuterParentheses = function(S) {
    let output = '';
    let primitive = '';
    const stack = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
        }

        primitive += S[i];
        if (!stack.length) { // stack.length === 0 -> !0 -> true
            output += primitive.slice(1, primitive.length - 1);
            primitive = '';
        }
    }
    return output;
};

removeOuterParentheses("(()())(())");
// ################################################
// Solution-5: https://leetcode.com/problems/remove-outermost-parentheses/discuss/379872/Javascript-solution-98-faster

var removeOuterParentheses = function(S) {
    let parenthesCount = 0;
    let result = "";
    
    for (const letter of S) {
        if (letter === "(") {
            // Note: Imp !!0 -> false which Skipping first index value (Intentionally)
            if (parenthesCount) {
                result += letter;
            }
            parenthesCount++;
        } else {
            parenthesCount--;
            if (parenthesCount) {
                result += letter;
            }
        }
    }
    
    return result;
}
// ################################################