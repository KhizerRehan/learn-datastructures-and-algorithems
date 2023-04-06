// ******************************
// Example:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4


// ******************************
// Khizer Accepted Solution:
// Description:
// Link: https://leetcode.com/problems/binary-search/
// ******************************

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (!Array.isArray(nums)) {
        return -1;
    }
    else {
        return nums.indexOf(target)
    }
};
// ******************************
// Leetcode Solution
// Link:
// Description:
// ******************************

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
};
// ******************************
