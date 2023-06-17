
// ################################################
https://leetcode.com/problems/number-of-good-pairs

// SOLVED BY ME:
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    
    if(!Array.isArray(nums) || nums.length>100) {
        return 0;
    }
    else {
        let pairsCount = 0;
        for(let outer=0; outer<nums.length; outer++){
             for(let inner=outer+1; inner<nums.length; inner++){
                 if(nums[outer]<=100){
                     if(nums[outer] === nums[inner]){
                         pairsCount++;
                     }
                 }

            }   
        }
        return pairsCount;
    }
    
};


// Other Solution:

var numIdenticalPairs = function(nums) {
    const map = {}
    let count = 0
    
    for (const number of nums) {
        if (map[number]) {
            count += map[number];
            map[number] += 1;
        } else {
            map[number] = 1;
        }
    }
    return count
};
