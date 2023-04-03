// ******************************
// Khizer Accepted Solution:
// Description:
/*
- Get HashMap of array
- Compare Length of HashMap values before and after
- If same length than it means all elements are unique
- If "new" length is less than before than it means duplcicate (same occurrences) 
  has been removed so there is no `unique` Occurrences.
*/
// ******************************

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    if (!arr?.length) {
        return true
    }

    const arrHashMap = {};
    for (let num of arr) {
        if (!arrHashMap[num]) {
            arrHashMap[num] = 1
        } else {
            arrHashMap[num] += 1
        }
    }

    const values = Object.values(arrHashMap);
    const lengthBefore = values?.length;
    const lengthAfter = [...new Set(values)]?.length;
    return lengthAfter < lengthBefore ? false : true;
};

// ******************************
// Leetcode Solution
// Link:
// Description:
// ******************************
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let counts = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!counts.has(arr[i])) {
            counts.set(arr[i], 1);
        } else {
            const count = counts.get(arr[i]);
            counts.set(arr[i], count + 1);
        }
    }

    const values = Array.from(counts.values());
    const set = new Set(values);
    return set.size === values.length;
};


// ******************************
// Leetcode Solution
// Link:
// Description:
// ******************************

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }
    return map.size === new Set(map.values()).size;
};

console.log(uniqueOccurrences([3, 5, -2, -3, -6, -6]))

// ******************************
// Leetcode Solution
// Link:
// Description:
// ******************************

var uniqueOccurrences = function (arr) {
    const obj = {};
    //     Creating hashmap to store count of each number
    arr.forEach(val => obj[val] = (obj[val] || 0) + 1);
    //     Creating an array of the count times and sort them
    const val = Object.values(obj).sort((a, b) => a - b);
    //     Now, just finding the duplicates
    for (let i = 0; i < val.length - 1; i++) {
        if (val[i] === val[i + 1]) {
            return false
        };
    }
    return true;
};


// ******************************
// Leetcode Solution
// Link:
// Description:
// ******************************
var uniqueOccurrences = function (arr) {
    let hash = {};
    let occurrences = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]] != undefined) {
            hash[arr[i]] += 1;
        } else {
            hash[arr[i]] = 1;
        }
    }

    // find occurances if it exists it means 
    // occurences are not unique value.

    for (let count in hash) {
        if (occurrences.has(hash[count])) {
            return false;
        }
        occurrences.add(hash[count])
    }
    return true;
};


// ******************************
// Leetcode Solution
// Link:
// Description:
// ******************************

var uniqueOccurrences = function (arr) {
    const occurrences = Object.values(arr.reduce((acc, num) => {
        acc[num] = (acc[num] ?? 0) + 1;
        return acc;
    }
        , {}),);

    const set = new Set();
    for (const occ of occurrences) {
        if (set.has(occ)) {
            return false;
        }
        set.add(occ);
    }
}

// ******************************
// Leetcode Solution
// ******************************

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const counts = {};
    //create object from: item as key, count as value 
    for (const num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    let checkArr = [];
    for (var key in counts) {
        if (counts.hasOwnProperty(key)) {
            if (!checkArr.includes(counts[key])) {
                checkArr.push(counts[key]);
            } else {
                console.log('false' + checkArr + '-' + counts[key]);
                return false;
            }
        }
    }
    return true;
};

// ******************************
// Leetcode Solution
// ******************************


var uniqueOccurrences = function(arr) {
    let map=new Map();
    let map2=new Map();

    for(let key of arr){
        if(map.has(key)) map.set(key,map.get(key)+1);
        else map.set(key,1);
    }
    
    for(let val of map.values()){
        if(map2.has(val))return false;
        map2.set(val,1);
    }
    return true;
};

// ******************************
// Leetcode Solution
// ******************************



/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const freq = Object.values(arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {}));
    return freq.length === new Set(freq).size;
};