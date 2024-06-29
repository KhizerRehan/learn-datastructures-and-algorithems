// Name of a file based on URL 
/*
URL: https://leetcode.com/problems/running-sum-of-1d-array/

// ---------------------------------------------------
// Solution: KhizerRehan
// ---------------------------------------------------
// Modify the given array in-place

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

    if(!Array.isArray(nums) || nums.length === 0) return []

    for(let i=0; i<nums.length; i++) {
        if(i === 0){
            nums[i] = nums[i]; // Keep first element same
        }
        else {
            nums[i] = nums[i-1]+nums[i]; // Sum of Prev + Current = Store in current index
        }
    }
    return nums;
};

// ---------------------------------------------------
// Solution-1:
// https://leetcode.com/problems/running-sum-of-1d-array/solutions/2468388/very-easy-0-ms-100-fully-explained-java-c-python-js-python3/
// ---------------------------------------------------
// Time Complexity : O(n)
// Space Complexity : O(n)
var runningSum = function(nums) {
    // Create an output array of size equal to given nums size...
    let output = new Array(nums.length)
    // Set output[0] = nums[0]...
    output[0] = nums[0];
    // Traverse all elements through the for loop...
    for(let idx = 1; idx < nums.length; idx++) {
        // Storing the running sum...
        output[idx] = output[idx-1] + nums[idx];
    }
    return output;      // Return the running sum of nums...
};
// ---------------------------------------------------
// Solution-2:
https://leetcode.com/problems/running-sum-of-1d-array/solutions/3261883/array-in-place-solution-o-1-extra-space/
// ---------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Skipping First Index as It will be already same as nums[0]
var runningSum = function(nums) {
    for(let i=1; i<nums.length; i++){
        nums[i] = nums[i-1] + nums[i];
    }
    return nums;
};

// ---------------------------------------------------
// Solution-3:
// https://leetcode.com/problems/running-sum-of-1d-array/solutions/2517069/javascript-solution-using-map-2-lines/
// ---------------------------------------------------
var runningSum = function(nums) {
    if(!Array.isArray(nums) || nums.length === 0) return []

    let currentSum = 0;
    return nums.map((num) =>  currentSum+=num);
};


// ---------------------------------------------------
// Solution-4:
// https://leetcode.com/problems/running-sum-of-1d-array/solutions/2341686/javascript-solution-1480/
// ---------------------------------------------------
var runningSum = function(nums) {
    let sums = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        sums.push(nums[i] + sums[i - 1]);
    }
    return sums;
};

// ---------------------------------------------------
// Solution-5:
// https://leetcode.com/problems/running-sum-of-1d-array/solutions/2619002/easy-js-solution-92-faster/
// ---------------------------------------------------
// Inspired by the above solution

var runningSum = function(nums) {

    if(!Array.isArray(nums) || nums.length === 0) return []
    const resultSet = [];
    let sum = 0;

    for(let i=0; i<nums.length; i++) {
        sum+=nums[i];
        resultSet.push(sum);
    }
    return resultSet;
};

// ---------------------------------------------------