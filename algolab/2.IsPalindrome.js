// Khizer Solution-1

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const str = String(x);
    const strLen = str.length;

    if (strLen === 0 || strLen === 1) {
        return true
    } else {
        for (let idx = 1; idx <= strLen; idx++) {
            if (str[idx - 1] === str[strLen - idx]) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
};

// AlgoLab Solution:

var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    let reverseNumber = 0;
    let number = x;

    while (number > 0) {
        reverseNumber = reverseNumber * 10 + number % 10;
        number = Math.floor(number / 10);
    }

    return x === reverseNumber;
};


// ChatGPT Solution-2:
function isPalindrome(str) {
    // Next, we use the toLowerCase method to convert the string to all lowercase letters.
    str = str.toLowerCase();
    // Then, we use the split, reverse, and join methods to reverse the string.
    let reversedStr = str.split("").reverse().join("");
    // Finally, we compare the reversed string to the original string and return true if they are equal, and false otherwise.
    return str === reversedStr;
}

// ChatGPT Solution-3:
function isPalindrome(str) {
    // Step 1. Turn everything lower case
    let cleaned = str.toLowerCase();

    // Step 2. Use the Array.prototype.every() method to check if every character in the string is the same as its counterpart on the other side
    return cleaned.split('').every((char, i) => char === cleaned[cleaned.length - i - 1]);
}