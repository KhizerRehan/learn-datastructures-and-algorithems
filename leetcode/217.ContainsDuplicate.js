   /**
 * @param {number[]} nums
 * @return {boolean}
 */
// Khizer Attempted Solution:
// Test Case passed
// Submission: Failed: Time Limit Exceeded
// https://leetcode.com/problems/contains-duplicate/

   var containsDuplicate = function(nums) {

    // [1,2,3,1]
    if (nums.length) {
        let duplicateExists = false;
        let counter = 0;
        nums.forEach(outer=>{
            nums.forEach(inner=>{
                if (outer === inner) {
                    counter++;
                }
            })
            if (counter > 1) {
                duplicateExists = true;
            } else {
                counter = 0;
            }
        })
        return duplicateExists;
    }

    return false;
};
// ******************************

// Khizer Accepted Solution

  /**
 * @param {number[]} nums
 * @return {boolean}
 */
  var containsDuplicate = function(nums) {
    const duplicateHashMap = {}

    nums.forEach(el => {
        if(!duplicateHashMap[el]) {
            duplicateHashMap[el] = 1
        }
        else {
            duplicateHashMap[el] += 1
        }
    })

    return Object.keys(duplicateHashMap).some(key => duplicateHashMap[key] > 1)
};

