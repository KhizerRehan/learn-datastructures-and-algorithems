/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Khizer Attempted Solution:
var sortedSquares = function(nums) {
  if(!nums.length) {
      return [];
  }
 return nums.map(num => Math.pow(num, 2)).sort((a, b) => a-b);
};



// Leetcode Solution
// JS | Two-Pointers | 85% | With explanation => https://leetcode.com/problems/squares-of-a-sorted-array/solutions/2672974/js-two-pointers-85-with-explanation/
var sortedSquares = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  let idx = end;
  let sortPowArr = [];

  while (idx > -1) {
      if (Math.abs(nums[start]) > Math.abs(nums[end])) {
          sortPowArr[idx--] = nums[start] * nums[start];
          start++;
      } else {
          sortPowArr[idx--] = nums[end] * nums[end];
          end--;
      }
  }
  return sortPowArr;
};
