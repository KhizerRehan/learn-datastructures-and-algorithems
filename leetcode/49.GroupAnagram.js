
// ******************************
// Khizer Accepted Solution:
// Description:
// ******************************

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    if (strs.length === 1) {
        const value = strs.pop();
        return [[value]]
    }
    else {
        const result = Object.create(Object.prototype);
        for (let index = 0; index < strs.length; index++) {
            const sortedWord = strs[index].split('').sort().join('');

            if (!result[sortedWord]) {
                result[sortedWord] = [strs[index]];
            } else {
                result[sortedWord].push(strs[index])
            }
        }

        return Object.values(result);

    }
};


// Failure: 

/*
 Note: I thought below ASCII sum solution will work as i expected to sum
 each word character into ascii code and then use hashMap with
 sum of ascii as key and value as [values to be pushed] but there
 was an edge case.

 With this Input
 ["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]

 My Code output:
 [["cab"],["tin"],["pew"],["duh","ill"],["may"],["buy"],["bar"],["max"],["doc"]]
 
 Expected:
 [["max"],["buy"],["doc"],["may"],["ill"],["duh"],["tin"],["bar"],["pew"],["cab"]]

 Hint:
 Check Ascii sum
 ["duh","ill"],
*/

var groupAnagrams = function (strs) {

    if (strs.length === 1) {
        const value = strs.pop();
        return [[value]]
    } else {

        function calculateAsciiCharsSum(word) {
            let sum = 0;

            for (let idx = 0; idx < word.length; idx++) {
                sum += word[idx].charCodeAt();
            }
            return sum;
        }

        const groupBySum = new Map()

        strs.forEach(word => {

            const asciiSum = calculateAsciiCharsSum(word);

            if (!groupBySum.has(asciiSum)) {
                groupBySum.set(asciiSum, [word])
            } else {
                groupBySum.get(asciiSum).push(word);
            }

        }
        );

        return [...groupBySum.values(groupBySum)];
        // OR Array.from(groupBySum)

    }


    // ******************************
    // Leetcode Solution
    // Link: https://leetcode.com/problems/group-anagrams/solutions/718955/three-js-solutions/
    // Description:
};
// Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
// Space Complexity: O(n)

// Notes:
// I have removed "#" sign not needed and it works as expected
// ******************************

var groupAnagrams = function (strs) {
    let res = {};
    for (let str of strs) {
        let count = new Array(26).fill(0);
        for (let char of str) count[char.charCodeAt() - 97]++;
        let key = count.join("");
        res[key] ? res[key].push(str) : res[key] = [str];
    }

    return Object.values(res)

}

// ******************************
// Leetcode Solution
// Link:
// Description:
// ******************************


function groupAnagrams(strs) {
    let map = new Map();
    for (let s of strs) {

        // Array of 26 alpha characters with initialze value 0 from callback method
        let charFreq = Array.from({ length: 26 }, () => 0);

        // Fine charCode for each character
        // Subtract ASCII value from 97 ('a') to get index of character
        // increment that index by 1
        // once all characters from string are done it will create a unique ID or key for hash function
        // that key can be used for Map and value can be stored against that key.

        for (let i = 0; i < s.length; i++) {
            charFreq[s.charCodeAt(i) - 97]++;
        }

        let keyStr = charFreq.toString(); // will convert array to string with comma separated value as key

        //  If you don't want to have "," value you can remove "," delimeter
        // OR
        // let keyStr = charFreq.toString().replaceAll(',', ""); // will convert array to string with comma separated value as key

        if (!map.has(keyStr)) {
            map.set(keyStr, [])
        }
        else {
            map.get(keyStr).push(s);
        }
    }

    // console.log(map);
    return Array.from(map.values());
};

// ******************************
Explanation:
https://leetcode.com/problems/group-anagrams/solutions/3105817/group-anagrams-hash-map-solution/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let result = []
    let hashmap = {}
    for (let i = 0; i < strs.length; ++i) {
        const key = strs[i].split('').sort()
        if (hashmap[key] === undefined) {
            hashmap[key] = [strs[i]]
        } else {
            hashmap[key].push(strs[i])
        }
    }
    for (let key in hashmap) {
        result.push(hashmap[key])
    }
    return result
};
// ******************************