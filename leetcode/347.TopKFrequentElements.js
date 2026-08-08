// ******************************
// Khizer Accepted Solution:
// Description:
// ******************************


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {

    if (!nums.length || k === 0) {
        return []
    } else {
        let result = {};

        for (let idx = 0; idx < nums.length; idx++) {
            if (!result[nums[idx]]) {
                result[nums[idx]] = 1;
            } else {
                result[nums[idx]] += 1;
            }

        }

        // sort by decending with respect to the frequency of the number
        // slice the list with respect to length of k
        return Object.keys(result).sort((a, b) => result[b] - result[a]).slice(0, k)
    }

};

// ******************************
// Leetcode Solution
// Description: Solution using Map
// ******************************

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // Create a map, set the elements to be the keys and the freq to be the values
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    // iterate the entries map, get all the keys sorted by the highest to lowest of the values 
    let sortArr = [...map.keys()].sort((a, b) => map.get(b) - map.get(a)).slice(0, k);

    // While learning Array.from method you can use
    // let sortArr = Array.from(map.keys()).sort((a, b) => map.get(b) - map.get(a)).slice(0, k)

    return sortArr;
};

// ******************************
// Leetcode Solution
// Description: Solution using HashMap but pushing element to array to kth element:
// Time: O(nlogn)
// space: O(n)
// ******************************

var topKFrequent = function (nums, k) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = hash[nums[i]] + 1 || 1
    }
    let result = [];
    let keys = Object.keys(hash);
    keys.sort((a, b) => {
        return hash[a] - hash[b]
    })
    while (result.length < k) {
        result.push(keys.pop())
    }
    return result
};

// ******************************
// Leetcode Solution
// Link:See comments:  https://leetcode.com/problems/top-k-frequent-elements/solutions/669782/javascript-no-sorting-o-n-time/ 
// ******************************

var topKFrequent = function (nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    for (let [num, freq] of freqMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) result.push(...bucket[i]);
        if (result.length === k) break;
    }
    return result;
};

// ******************************
// Leetcode Solution
// ******************************

var topKFrequent = function (nums, k) {
    let m = new Map(), set = new Set();
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], m.get(nums[i]) + 1 || 1);
    }
    for (let i = 0; i < k; i++) {
        let max = 0, maxNum = null;
        for (let [num, freq] of m) {
            if (!set.has(num) &&
                freq > max) {
                max = freq;
                maxNum = num;
            }
        }
        if (maxNum !== null) set.add(maxNum);
    }
    return Array.from(set);
    // T.C: O(k*N)
    // S.C: O(N)
}

// ******************************
// ChatGPT Solution

// Explanation:

/*
- Use a frequencyMap to count the frequency of each element in the input array.
- Create empty buckets for each element with empty array
- Iterate through frequencyMap and set value of frequency to index number
- At the end of the iteration highest frequence will be set at index number
  and highest frequency will be set at in increasing order
- find topKElements from buckets
- start iteration from last index of buckets
- check value of bucket > 0 push in `topKElements` till `k` elements in array
- lastly you got top k elements in array.
*/

// ******************************

function topKFrequent(nums, k) {
    const frequencyMap = new Map();

    // Count the frequency of each element
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Create buckets to store elements by frequency
    const buckets = new Array(nums.length + 1).fill(null).map(() => []);

    // Place elements into appropriate buckets based on frequency
    frequencyMap.forEach((freq, num) => {
        buckets[freq].push(num);
    });

    // Collect the top k frequent elements from the buckets
    const topKElements = [];
    for (let i = buckets.length - 1; i >= 0 && topKElements.length < k; i--) {
        if (buckets[i].length > 0) {
            topKElements.push(...buckets[i]);
        }
    }

    return topKElements;
}

// ******************************
// Neetcode Solution
// ******************************
/**
 * Set - Frequency Counter | Using sort
 * Time O(NlogN) | Space O(N)
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
    let frequency = {}
    for (let i = 0; i < nums.length; i++) {
        if (frequency.hasOwnProperty(nums[i])) frequency[nums[i]] += 1;
        else frequency[nums[i]] = 1;
    }
    let result = Object.keys(frequency).map((key) => [Number(key), frequency[key]]);
    let sortedResult = result.sort((a, b) => {
        return b[1] - a[1]
    })
    let output = []
    for (let i = 0; i < k; i++) {
        output.push(sortedResult[i][0])
    }
    return output;
};

// ******************************
// Excellent Soltuion:
// Neetcode Solution
// ******************************
/**
 * Without Sort
 * Time O(N) | Space O(k)
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
    const mp = new Map();
    const arr = new Array(nums.length + 1).fill(0);
    const ans = [];

    nums.forEach(el => {
        const val = mp.get(el) || 0;
        mp.set(el, val + 1);
    });

    for (let [key, value] of mp) {
        const prev = arr[value] || [];
        prev.push(key);
        arr[value] = prev;
    }


    arr.reverse();
    for (let el of arr) {
        if (k < 1) break;
        if (el) {
            for (let el2 of el) {
                ans.push(el2);
                k--;
            }
        }
    }

    return ans;
};

// Slight Changes Done by Me:

var topKFrequent = function (nums, k) {


    // Note!!
    // <SAME AS PREVIOUS CODE>

    // CHANGES
    // Filter out "0" values get only arrays
    arr = arr.filter(value => !!value).reverse()

    for (let subarray of arr) {
        if (k < 1)
            break;
        for (let index = 0; index < subarray.length; index++, k--) {
            ans.push(subarray[index]);
        }
    }
    return ans;
};



// ******************************