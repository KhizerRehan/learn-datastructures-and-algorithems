// ******************************
// Khizer Accepted Solution
// ******************************

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if(nums.length === 0) {
        return 0;
    }
    else {
        for(let idx = 1; idx<=nums.length; idx++) {
            if(idx===1) {
                nums[0] = 0 + nums[idx-1] // 0 + 0
            }
            else {
                nums[idx-1] = nums[idx-2] + nums[idx-1];
            }
        }
        
        return nums;
    }
};

// ******************************
// Khizer Accepted Solution
// ******************************


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if (nums.length === 0) {
        return 0;
    } else {

        nums.reduce((prev,curr,idx)=>{
            return nums[idx] = prev + curr;
        }
        , 0)

        return nums;
    }
};


// ******************************
// AlgoLab Solution:
// ******************************

var runningSum = function(nums) {
	for (let i = 1; i < nums.length; i++) {
		nums[i] += nums[i - 1];
	}
	return nums;
};