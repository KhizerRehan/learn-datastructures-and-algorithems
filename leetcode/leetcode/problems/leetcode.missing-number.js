// Best Solution:

// Constraints:
// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n (Both [0,n] are included)
// All the numbers of nums are unique.

// ################################################
// Link: https://leetcode.com/problems/missing-number/
// SOLVED BY ME:

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {

    if (!Array.isArray(nums)) {
      return -1;
    } else {
      let sumOfNums = 0;
      for (let idx = 0; idx < nums.length; idx++) {
        sumOfNums += nums[idx]; // Actual Sum of Array Provided.
      }

      let lengthInActualShouldBe = nums.length + 1;
      const missingValueIs = (lengthInActualShouldBe * (lengthInActualShouldBe - 1)) / 2 - sumOfNums;
      return missingValueIs;
    }
  };


// ################################################
// Leet Code Discussion Solutions:
// ################################################
// Solution-1: https://leetcode.com/problems/missing-number/discuss/1119290/O(N)-time-O(1)-space-easy

var missingNumber = function(nums) {
    /*
        calculate the sum of all nums, 
        iterate through sum and decrement each val,
        we will have the missing num
    */
    let max = nums.length;
    let sum = 0;
    for (let i = 1; i <= max; i ++) {
        sum += i;
    }
    for (let num of nums) {
        sum -= num;
    }
    return sum;
}
missingNumber([0,1,2,3,4,6])
// ################################################
// Solution-2: https://leetcode.com/problems/missing-number/discuss/1077582/very-easy-to-understand-Javascript-solution 
// Best Solution:

const missingNumber = nums => {
    if(!nums) return;
    let tempArray = new Array(nums.length+1).fill(-1);
    for (let num of nums) {
      tempArray[num] = num;
    }
    return tempArray.indexOf(-1);
  }
// ################################################
// Solution-3: https://leetcode.com/problems/missing-number/discuss/1043007/Javascript-O(n)-time-and-O(1)-space

var missingNumber = function(nums) {
    let expectedSum = 0;
    let actualSum = 0;
    for (let i = 0; i <= nums.length; i++) {
        expectedSum += i;
    }
    for (let num of nums) {
        actualSum += num;
    }
    return expectedSum - actualSum;
};
// ################################################
// Solution-4: https://leetcode.com/problems/missing-number/discuss/1018645/JS-Simple-one-pass-without-Gauss's
/**
 * @param {number[]} nums
 * @return {number}
 */
// Best Solution:


 let missingNumber = (nums) => {
    let numsLen = nums.length;
    let expectedSum = 0;
    let actualSum = 0;
    for (let i = 0; i < numsLen; i++) {
      expectedSum += i + 1;
      actualSum += nums[i];
    }
    return expectedSum - actualSum;
  };
// ################################################
// Solution-5: https://leetcode.com/problems/missing-number/discuss/812930/JavaScript-Set-Solution-O(n)-time-O(n)-space-and-Gauss'-Formula-Solution-O(n)-time-O(1)-space

//Set Solution
var missingNumber = function(nums) {
    let numSet = new Set(nums)
    for(let i=0; i<=nums.length; i++){
        if(! numSet.has(i)){
            return i
        }
    }
};


// ################################################
// Solution-6: https://leetcode.com/problems/missing-number/discuss/388832/Javascript-easy-one/866186
// Best Solution:
var missingNumber = function(nums) {
    let sum = nums.length;
    for (let i = 0; i < nums.length; i++) {
      sum += i - nums[i];
    }
  
    return sum;
  };

  // ################################################