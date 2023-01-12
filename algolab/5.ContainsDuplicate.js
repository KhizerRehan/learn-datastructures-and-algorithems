
// ******************************
// Khizer Accepted Solution
// ******************************

var containsDuplicate = function(nums) {
    const hashMap = {}

    for (let idx = 0; idx < nums.length; idx++) {
        if (!hashMap[nums[idx]]) {
            hashMap[nums[idx]] = 1;
        } else {
            return true;
        }
    }

    return false;
};

// ******************************
// AlgoLab Solution:
// ******************************

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueNums = [];

    for (const element of nums) {
        if (uniqueNums.includes(element)){
            return true;
        };

        if (!uniqueNums.includes(element)) {
            uniqueNums.push(element);
        }
    }

    return uniqueNums.length !== nums.length;
};