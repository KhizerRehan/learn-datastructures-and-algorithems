// Name of a file based on URL 
/*
URL: https://leetcode.com/problems/<problem-solving>
Filename: <problem-solving>.js
ProblemNo: <No>. <Name>
/

Test Data:
console.log(detectCapitalUse("LEETCODE"));
console.log(detectCapitalUse("leetcode"));
console.log(detectCapitalUse("Leetcode"));
console.log(detectCapitalUse("leetcodE"));
console.log(detectCapitalUse("LeetCOde"));

// ---------------------------------------------------
// Solution: KhizerRehan
https://leetcode.com/submissions/detail/564654921/
// ---------------------------------------------------
/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {

	const wordLength = word.length;
	let counter = 0;
	if (wordLength === 0 || wordLength === 1 && word.charCodeAt() >= 65 && word.charCodeAt() <= 90) {
		return true;
	} else {
		// USA
		// leetcode
		// Google
		// FlaG
		for (char of word) {
			if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
				counter++;
			}
		}
	}

	if (counter > 1 && counter < wordLength)
		return false
	// "LeetCode"
	if (counter === 1 && !(word.charCodeAt(0) >= 65 && word.charCodeAt() <= 90))
		return false;
	// "leetCode"
	if (counter === wordLength || counter === 0)
		return true
		// "LEETCODE", "leetcode"
	else if (counter === 1 && word.charCodeAt(0) >= 65 && word.charCodeAt() <= 90)
		return true

};
// ---------------------------------------------------
// Solution: KhizerRehan
// https://leetcode.com/submissions/detail/564667048/
// ---------------------------------------------------
(function() {

	/**
   * @param {string} word
   * @return {boolean}
   */
	var detectCapitalUse = function(word) {

		if (word.length === 0) {
			return true;
		}
		if (word.toUpperCase() === word || word.toLowerCase() === word) {
			return true
		}

		if (word.charAt(0).toUpperCase()) {

			const wordWithoutFirstLetter = word.substring(1)
			for (char of wordWithoutFirstLetter) {
				if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
					return false
				}
			}

			return true
		}

		return false;

	};
	console.log(detectCapitalUse("LEETCODE"));
	console.log(detectCapitalUse("leetcode"));
	console.log(detectCapitalUse("Leetcode"));
	console.log(detectCapitalUse("leetcodE"));
	console.log(detectCapitalUse("LeetCOde"));

}())


// ---------------------------------------------------
// Solution-3:
// https://leetcode.com/problems/detect-capital/discuss/1112028/JavaScript-solution-or-easy-to-understand-or-faster-than-91
// ---------------------------------------------------
(function() {
	/**
 * @param {string} word
 * @return {boolean}
 */
	/**
 * @param {string} word
 * @return {boolean}
 */
	var detectCapitalUse = function(word) {
		let capWord = word.toUpperCase();
		let nonCapWord = word.toLowerCase();

		if (capWord == word || nonCapWord == word)
			return true;

		let capCount = 0;

		for (let i = 0; i < word.length; i++) {
			if (word[i] == word[i].toUpperCase())
				capCount++;

			if (capCount > 1)
				return false;
		}

        // Slight modifcation
		if (capCount === 1 && word[0] !== word[0].toUpperCase()) {
			return false
		}

		return true;
	};
	console.log(detectCapitalUse("LEETCODE"));
	console.log(detectCapitalUse("leetcode"));
	console.log(detectCapitalUse("Leetcode"));
	console.log(detectCapitalUse("leetcodE"));
	console.log(detectCapitalUse("LeetCOde"));

}())

// ---------------------------------------------------
// Solution-4:
// https://leetcode.com/problems/detect-capital/discuss/1030643/Easy-JavaScript
// ---------------------------------------------------

(function() {

	/**
   * @param {string} word
   * @return {boolean}
   */
	const detectCapitalUse = word=>{

		const isCapital = char=>char >= 'A' && char <= 'Z';

		const isLower = char=>char >= 'a' && char <= 'z';

		return [...word].every(char=>isCapital(char)) || [...word.substring(1)].every(char=>isLower(char))

	}
	;
	console.log(detectCapitalUse("LEETCODE"));
	console.log(detectCapitalUse("leetcode"));
	console.log(detectCapitalUse("Leetcode"));
	console.log(detectCapitalUse("leetcodE"));
	console.log(detectCapitalUse("LeetCOde"));

}())

// ---------------------------------------------------
// Solution-5:
// https://leetcode.com/problems/detect-capital/discuss/934627/Clean-JavaScript-Solution
// ---------------------------------------------------
(function() {

	/**
   * @param {string} word
   * @return {boolean}
   */
	// time O(1) space O(n)
    var detectCapitalUse = function(word) {
        if(word === word.toLowerCase()) {
            return true
        } 
        if(word === word.toUpperCase()) {
            return true
        }
        if(word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()) {
            return true
        }
        
        return false
    };

	console.log(detectCapitalUse("LEETCODE"));
	console.log(detectCapitalUse("leetcode"));
	console.log(detectCapitalUse("Leetcode"));
	console.log(detectCapitalUse("leetcodE"));
	console.log(detectCapitalUse("LeetCOde"));

}())

// ---------------------------------------------------
// Solution-6:
// https://leetcode.com/problems/detect-capital/discuss/751954/My-JavaScript-Solution-Built-In-JS-methods-Beats-67.56-runtime
// ---------------------------------------------------
(function() {

	/**
   * @param {string} word
   * @return {boolean}
   */

     var detectCapitalUse = function(word) {

        let str = word.split('')
    
        // if every value is uppercase - track the total number of uppercases, compare to str.length
        if (str.every((element) => element === element.toUpperCase())) {
            return true
        }
    
        // if every value is lowercase - true
        if (str.every((element) => element === element.toLowerCase())) {
            return true
        }
    
        // if first letter is uppercase and the rest are lowercase - true
        if (str[0].toUpperCase() && str.slice(1).every((element) => element === element.toLowerCase())) {
          return true
        }
        
        // otherwise return false
        return false
    };


	console.log(detectCapitalUse("LEETCODE"));
	console.log(detectCapitalUse("leetcode"));
	console.log(detectCapitalUse("Leetcode"));
	console.log(detectCapitalUse("leetcodE"));
	console.log(detectCapitalUse("LeetCOde"));

}())




// ---------------------------------------------------
// Solution-7:
// https://leetcode.com/problems/detect-capital/discuss/613692/Easy-understanding-pythonJavaScript-solution-with-comments
// ---------------------------------------------------
(function() {

	/**
   * @param {string} word
   * @return {boolean}
   */

     var detectCapitalUse = function(word) {
        let upper = word.toUpperCase();
        let lower = word.toLowerCase();
        // all capitals  || no capitals || only first letter is capital
        return (upper === word || lower === word || (upper[0] === word[0] && lower.slice(1) === word.slice(1))); 
    };


	console.log(detectCapitalUse("LEETCODE"));
	console.log(detectCapitalUse("leetcode"));
	console.log(detectCapitalUse("Leetcode"));
	console.log(detectCapitalUse("leetcodE"));
	console.log(detectCapitalUse("LeetCOde"));

}())


// ---------------------------------------------------
// Solution-8:
// https://leetcode.com/problems/detect-capital/discuss/500139/Javascript-solution-using-set-of-rules
// ---------------------------------------------------
(function() {

	/**
   * @param {string} word
   * @return {boolean}
   */

	var detectCapitalUse = function(word) {
		let rules = {
			upperCase: s=>s.every(char=>char === char.toUpperCase()),
			lowerCase: s=>s.every(char=>char === char.toLowerCase()),
			titleCase: s=>s[0] === s[0].toUpperCase() && rules.lowerCase(s.slice(1))
		}

		return Object.values(rules).some(rule=>rule(word.split('')));
	};
	console.log(detectCapitalUse("LEETCODE"));
	console.log(detectCapitalUse("leetcode"));
	console.log(detectCapitalUse("Leetcode"));
	console.log(detectCapitalUse("leetcodE"));
	console.log(detectCapitalUse("LeetCOde"));

}())



// ---------------------------------------------------
// Solution-9:
// https://leetcode.com/problems/detect-capital/discuss/246373/Javascript-linear-complexity-O(n)-without-regex
// ---------------------------------------------------
(function() {

	/**
   * @param {string} word
   * @return {boolean}
   */

     var detectCapitalUse = function(word) {
        if (word.length <= 1) return true;
        
        let areAllCaps = true;
        let areAllLow = true;
        let isFirstCup = 65 <= word.charCodeAt(0) && word.charCodeAt(0) <= 90;
        
        for (let i = 0; i < word.length; i++) {
          areAllCaps = areAllCaps && 65 <= word.charCodeAt(i) && word.charCodeAt(i) <= 90 
            ? true
            : false
          ;
          areAllLow = areAllLow && 97 <= word.charCodeAt(i) && word.charCodeAt(i) <= 122
            ? true
            : false
          ;
          
          if (i === 0) continue; // skip first character just like `slice(1)
          
          isFirstCup = isFirstCup && 97 <= word.charCodeAt(i) && word.charCodeAt(i) <= 122
            ? true
            : false
          ;
        }
        return areAllCaps || areAllLow || isFirstCup;
      };
	console.log(detectCapitalUse("LEETCODE"));
	console.log(detectCapitalUse("leetcode"));
	console.log(detectCapitalUse("Leetcode"));
	console.log(detectCapitalUse("leetcodE"));
	console.log(detectCapitalUse("LeetCOde"));

}())

// ---------------------------------------------------
