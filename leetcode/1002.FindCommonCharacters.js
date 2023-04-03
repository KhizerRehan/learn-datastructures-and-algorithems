
// ******************************
// Khizer Accepted Solution:
// Description:
// ******************************

/**
 * @param {string[]} words
 * @return {string[]}
 */

var commonChars = function (words) {

    if (!words?.length) {
        return []
    }

    const result = [];
    for (let idx = 0; idx < words.length; idx++) {
        const chars = words[idx].split("");
        for (const element of chars) {
            if (words.every(word => word.includes(element))) {
                result.push(element);
                words = words.map(word => word.replace(element, ''))
            }
        }
    }
    return result
};

// Slight Modification:

var commonChars = function (words) {

    if (!words?.length) {
        return []
    }

    const result = [];
    for (let idx = 0; idx < words.length; idx++) {
        const chars = words[idx].split("");
        for (const element of chars) {
            if (words.every(word => word.includes(element) && element !== '-')) {
                result.push(element);
                words = words.map(word => word.replace(element, '-'))
            }
        }
    }
    return result
};




// ******************************
// Leetcode Solution
// Link: https://leetcode.com/problems/find-common-characters/solutions/2944932/easy-solution-by-javascript/
// ******************************

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let w1 = [...words[0]]
    let tmp = []
    for (let i = 1; i < words.length; i++) {
        let word = [...words[i]]
        for (l of w1) {
            if (word.includes(l)) {
                tmp.push(l)
                let index = word.indexOf(l)
                word.splice(index, 1)
            }
        }
        w1 = tmp
        tmp = []
    }
    return w1
};


// ******************************
// Leetcode Solution
// Link: https://leetcode.com/problems/find-common-characters/solutions/2851028/javascript-using-object-as-hashmap/
// ******************************
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'w', 'z'];
    const map = {};
    alphabet.forEach(letter => {
        let frequency = Infinity;
        for (let i = 0; i < words.length; i++) {
            let counter = 0;
            if (!words[i].includes(letter)) {
                return;
            }
            for (let j = 0; j < words[i].length; j++) {
                if (words[i][j] == letter) {
                    counter++;
                }
            }
            frequency = Math.min(frequency, counter);
        }
        map[letter] = frequency;
    })
    return Object.entries(map).map(([letter, frequency]) => {
        let temp = [];
        while (frequency > 0) {
            temp.push(letter);
            frequency--;
        }
        return temp;
    }).flat();
};


// ******************************
// Leetcode Solution
// Link: https://leetcode.com/problems/find-common-characters/solutions/2728550/javascript-o-n-o-1-using-two-arrays/
// Description: O(n) | O(1), Using two arrays
// ******************************

var commonChars = function (words) {
    const count = Array(26).fill(Number.MAX_VALUE);
    const result = [];
    for (let word of words) {
        const count1 = Array(26).fill(0);
        for (let char of word)
            ++count1[char.charCodeAt() - 97];
        for (let i = 0; i < 26; ++i)
            count[i] = Math.min(count[i], count1[i]);
    }

    for (let i = 0; i < 26; ++i) {
        for (let j = 0; j < count[i]; ++j) {
            result.push(String.fromCharCode(i + 97));
        }
    }
    return result;
};

// ******************************
// Leetcode Solution
// Link: https://leetcode.com/problems/find-common-characters/submissions/882045050/
// ******************************

/**
 * @param {string[]} words
 * @return {string[]}
 */

var commonChars = function (words) {
    const sortedWords = words.sort((a, b) => a.length - b.length);
    const firstWordSplitted = sortedWords[0].split("");
    let remainingWords = sortedWords.slice(1);

    return firstWordSplitted.filter(char => {
        let showedUp = remainingWords.every(word => word.indexOf(char) !== -1);
        if (showedUp) {
            return remainingWords = remainingWords.map(word => word.replace(char, "-"));
        }
        return showedUp;
    });
};