// ******************************
// Khizer Accepted Solution:
// Description: Tricky part was 
// ******************************

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if (s.length === 0 && t.length === 0) {
        return false
    }
    if (s.length !== t.length) {
        return false;
    } else {
        let mapS = new Map();
        let mapT = new Map();
        const splittedS = s.split("");
        const splittedT = t.split("");

        splittedS.forEach(el=>{
            if (!mapS.has(el)) {
                mapS.set(el, 1);
            } else {
                mapS.set(el, mapS.get(el) + 1);
            }

        }
        )

        splittedT.forEach(el=>{
            if (!mapT.has(el)) {
                mapT.set(el, 1);
            } else {
                mapT.set(el, mapT.get(el) + 1);
            }

        }
        )

        return splittedT.every(el=>{
            return mapS.has(el) && (mapS.get(el) === mapT.get(el));
        }
        )
    }
};

// ******************************
// Leetcode Solution
// Description: string will always match if it is valid anagram
// ******************************

(function() {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    var isAnagram = function(s, t) {
        return s.split('').sort().join('') === t.split('').sort().join('');
    };
}())
// ******************************
// Leetcode Solution
// Description: string will always match if it is valid anagram
// [Excellent Solution]
// ******************************

(function() {
    var isAnagram = function(s, t) {
        // To count freq we make an array of size 26...
        const counter = new Array(26).fill(0);
        // Traverse all elements through a loop...
        for (let idx = 0; idx < s.length; idx++) {
            counter[s.charCodeAt(idx) - 97]++;
        }
        for (let idx = 0; idx < t.length; idx++) {
            counter[t.charCodeAt(idx) - 97]--;
        }
        // Above iteration provides us with count array having all values to zero then we can say we found an anagram.
        // Every element of count has to be equal to 0.
        // If it is greater than 0 it means s has a character whose occurrence is greater than its occurrence in t.
        // And if its less than 0 then, s has a character whose occurrence is smaller than its occurrence in t.
        for (let idx = 0; idx < 26; idx++) {
            if (counter[idx] != 0)
                return false;
        }
        return true;
    };
}())
// BOTH are the same solution instead of subtracting 97 we get ASCII characters code of 'a' 
// which is also 97 it's just the representation and for the readability purposes.

(function() {
    /**
     * Time complexity = O(n), where n is the length of both s and t
     * Space complexity = O(26) = O(1)
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    var isAnagram = function(s, t) {
        if (s.length != t.length) {
            return false;
        }

        let freq = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            freq[s.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]++;
            freq[t.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }

        return freq.every(index=>index === 0);
    };
}())
// ******************************
// Leetcode Solution
// *****************************

(function() {

    var isAnagram = function(s, t) {
        let map = new Map()

        // - Length for both string should be same 
        // - ele of s incremeans Map (key, value) count
        // - ele of t decrements Map (key, value) count
        // - ele of t being removed from map 
        // - size of map should be Zero

        for (let ele of s) {
            map.set(ele, map.get(ele) + 1 || 1)
        }

        for (let ele of t) {
            if (map.has(ele)) {
                map.set(ele, map.get(ele) - 1)
                if (map.get(ele) === 0) {
                    map.delete(ele)
                }
            } else {
                return false
            }
        }

        return map.size === 0
    };
}())
// ******************************
// Leetcode Solution
// *****************************

(function() {
    var isAnagram = function(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const map = new Map();

        // - Length for both string should be same 
        // - s[i] incremeants Map (key, value) count
        // - t[i] decrements Map (key, value) count
        // - Final if it is anagram than Map length should be Zero(0)

        for (let i = 0; i < s.length; i += 1) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);
            map.set(t[i], (map.get(t[i]) || 0) - 1);
        }

        return [...map].every(([,count])=>count === 0);
    };
}())

// ******************************
// Leetcode Solution
// *****************************

var isAnagram = function(s, t) {

    if (s.length !== t.length)
        return false;

    var map = {};

    for (let i = 0; i < s.length; i++) {
        if (s[i]in map) {
            map[s[i]] += 1;
        } else {
            map[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i]in map) {
            map[t[i]] -= 1;
        }
    }

    for (let i of Object.values(map)) {
        if (i > 0) {
            return false;
        }
    }

    return true;
};

// ******************************
// Leetcode Solution
// *****************************

var isAnagram = function(s, t) {
    if (s.length !== t.length)
        return false;
    const sArray = s.split('').sort();
    const tArray = t.split('').sort();

    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] !== tArray[i])
            return false;
    }

    return true;
};

// OR

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sortedS = [...s].sort().join("");
    const sortedT = [...t].sort().join("");

    if (sortedS === sortedT) {
        return true;
    } else {
        return false;
    }
};

// ******************************
// Leetcode Solution
// *****************************

var isAnagram = (s,t)=>{
    if (s.length !== t.length)
        return false;
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
;

// ******************************
// Neetcode Solution
// *****************************

var isAnagram = (s,t)=>{
    if (s.length !== t.length) {
        return false;
    }

    let charCountS = {};
    let charCountT = {};

    for (let idx = 0; idx < s.length; idx++) {
        charCountS[s[idx]] = (charCountS[s[idx]] || 0) + 1;
        charCountT[t[idx]] = (charCountT[t[idx]] || 0) + 1;
    }

    // Neetcode provides almots same solution as above so
    // I have changed based on runtime thought process which
    // is also a valid solution and it works.

    // Solution-1
    // for (const key in charCountS) {
    //     if (charCountS[key] !== charCountT[key]) {
    //         return false;
    //     }
    // }
    // return true;

    return Object.keys(charCountS).sort().join("") === Object.keys(charCountT).sort().join("")
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("cat", "act"));
console.log(isAnagram("aaa", "ccc"));
