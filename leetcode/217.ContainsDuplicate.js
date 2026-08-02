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

// OR

(function() {

    function containsDuplicate(nums) {

        if (nums.length == 0 || nums.length == 1) {
            return false
        }
        if (nums.length == 2) {
            return nums[0] !== nums[1];
        }

        const hasDup = {};

        for (let i = 0; i < nums.length; i++) {
            if (!hasDup[nums[i]]) {
                hasDup[nums[i]] = 1;
            } else {
                hasDup[nums[i]] += 1;
            }
        }

        let hasDuplicate = false;

        Object.keys(hasDup).forEach( (key) => {
            if (hasDup[key] > 1) {
                hasDuplicate = true;
                return true;
            }
        })

        return hasDuplicate;
    }
    console.log(containsDuplicate([1, 2, 3, 1]))

}())

----

(function() {

    // Solution=1

    // function containsDuplicate(nums) {

    //     if (nums.length == 0 || nums.length == 1) {
    //         return false
    //     }
    //     if (nums.length == 2) {
    //         return nums[0] !== nums[1];
    //     }

    //     const hasDup = {};

    //     for (let i = 0; i < nums.length; i++) {
    //         if (!hasDup[nums[i]]) {
    //             hasDup[nums[i]] = 1;
    //         } else {
    //             hasDup[nums[i]] += 1;
    //         }
    //     }

    //     let hasDuplicate = false;

    //     Object.keys(hasDup).forEach( (key) => {
    //         if (hasDup[key] > 1) {
    //             hasDuplicate = true;
    //             return true;
    //         }
    //     }
    //     )

    //     return hasDuplicate;
    // }

    function containsDuplicate(nums) {

        const seenMap = new Map();

        for (const n of nums) {
            if (seenMap.has(n)) {
                return true
            } else {
                seenMap.set(n, 1)
            }
        }
        return false
    }

    console.log("Duplicate", containsDuplicate([1]))
    console.log("Duplicate", containsDuplicate([1, 2, 3, 1]))
    console.log("Duplicate", containsDuplicate([1, 2, 3, 4]))

}())

// ----



// ******************************
// Khizer Accepted Solution

var containsDuplicate = function(nums) {
    const duplicates = [];

    for (let idx = 0; idx < nums.length; idx++) {
        const value = nums[idx];
        if(!duplicates.includes(value)) {
          duplicates.push(value);
        }
        else {
          return true
        }
    }
    return false;
};
// ******************************
- https://leetcode.com/problems/contains-duplicate/submissions/973269856/


var containsDuplicate = function(nums) {
    const duplicates = new Set(nums);
    console.log("Nums", nums);
    console.log("Set", duplicates);

    return nums.length != duplicates.size;
};

// [1,2,3,1]
console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
