// ******************************
// Khizer Accepted Solution:
// Description:
// ******************************


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 var topKFrequent = function(nums, k) {

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
            return [...Object.keys(result)].sort((a, b) => result[b] - result[a]).slice(0, k)
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
var topKFrequent = function(nums, k) {
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
    let sortArr = [...map.keys()].sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
    
    return sortArr;
};

// ******************************
// Leetcode Solution
// Description: Solution using HashMap but pushing element to array to kth element:
// Time: O(nlogn)
// space: O(n)
// ******************************

var topKFrequent = function(nums, k) {
    let hash = {}
    for (let i = 0 ; i < nums.length; i ++) {
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

var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];
    
    for(let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    for(let [num, freq] of freqMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    
    for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }
    return result;
};

// ******************************
// Leetcode Solution
// ******************************

var topKFrequent = function(nums, k) {
    let m = new Map(), set = new Set();
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], m.get(nums[i]) + 1 || 1);
    }
    for (let i = 0; i < k; i ++) {
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