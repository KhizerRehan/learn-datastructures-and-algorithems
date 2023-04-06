// ******************************
// 28. Find the Index of the First Occurrence in a String
// Khizer Accepted Solution:
// Description:
// Link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

// ******************************
// Concatanation Solution
// ******************************

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    

    for(let i=0;i<=haystack.length-needle.length;i++){
        let str=""
       for(let j=i;j<i+needle.length;j++){
            str+=haystack[j]
        }
        if(str==needle){
            return i
        }

    }
    return -1
  
};

// ******************************
//  Loop through haystack and compare substrings
// ******************************
/**
 * Solution #4 - Loop through haystack and compare substrings - Time: O(N), Space: O(1)
 * Loop through the haystack. For each character, loop through the needle and compare.
 * If they are all equal, return the index of the haystack
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let haystackLength = haystack.length;
    let needleLength = needle.length;
    if (haystackLength < needleLength) return -1;

    for (let i = 0; i <= haystackLength - needleLength; i++) {
        if (haystack.substr(i, needleLength) === needle) return i;
    }
    return -1;
};


// ******************************
// Brute Force Time: O(N*M)
// ******************************
/**
 * Solution #3 - Brute Force - Time: O(N*M), Space: O(1)
 * Loop through the haystack. For each character, loop through the needle and compare.
 * If they are all equal, return the index of the haystack
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!needle) return 0;
    for (let i = 0; i < haystack.length; i++) {
        let isMatch = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) return i;
    }
    return -1;
};



// ******************************
// Solution using `includes'
// ******************************
var strStr = function(haystack, needle) {
    if (needle === '') return 0
    let i = haystack.indexOf(needle)
    if (haystack.includes(needle)) {
        return i
    } else {
        return -1
    }
};

// ******************************
// Solution: JS Solution, Two Pointers
// ******************************
var strStr = function(haystack, needle) {
    if(needle === "" || needle === haystack) return 0;
    
    let left = 0;
    let right = needle.length;
    
    while(left < haystack.length){
        let strToBeSearched = haystack.slice(left,right);
        if(strToBeSearched === needle){
            return left;
        } else {
            left++;
            right++;
        }
    }
    return -1;
};


// ******************************
// Solution: Using Split
// Excellent Solution
// ******************************


var strStr = function(haystack, needle) {
    if(haystack === needle || !needle) return 0;
    
    const left = haystack.split(needle)[0];
    if(haystack === left) return -1;
    return left.length
};


// ******************************