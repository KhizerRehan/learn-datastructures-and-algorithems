
// ******************************
// Khizer Accepted Solution:
// Description:
// ******************************

// Solution-1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (!nums.length) {
        return []
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

};

// Solution-2


var twoSum = function(nums, target) {
    if (!nums.length) {
        return []
    }


    /* 
    - Basically Solution Target - Index position number
    - Check if diff is not exist in hashMap add the number at 
      index to hashMap as key and value as the index position
    - Repeat the process for non-matching results 
    - Once you found the number whose "DIFF" does exist in HashMap
      then it means that you have already number with index number
      already in HashMap so Matching Result means you FOUND another
      index number that does meet criteria and you found the indecies
      that matches TARGET value just return the both Indeices

      - [HashMap Inddex, Current Index]

    */


    let prevHashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (!prevHashMap.hasOwnProperty(diff)) {
            prevHashMap[nums[i]] = i
        } else {
            const existingIndex = prevHashMap[diff];
            return [existingIndex, i]
        }

    }

};


// ******************************
// Leetcode Solution
// Link:
// Description:
// ******************************
