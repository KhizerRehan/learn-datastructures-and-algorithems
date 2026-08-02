// Implementing Using Pointer Position

/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {


    // Sample: [0,1,0,3,12]
    // Output: [1,3,12,0,0]
    
    // iteration-0 -> [0,1,0,3,12]  -> nonZeroIdx=0
    // iteration-1 -> [1,1,0,3,12]  -> nonZeroIdx= 0 -> 1
    // iteration-2 -> [1,1,0,3,12]  -> nonZeroIdx= 0 -> 1
    // iteration-3 -> [1,3,0,3,12]  -> nonZeroIdx= 1 -> 2
    // iteration-4 -> [1,3,12,3,12]  -> nonZeroIdx= 2 -> 3
    
      let nonZeroIdx = 0;
      for(let idx = 0; idx<nums.length; idx++) {
         if(nums[idx] !=0 ) {
            nums[nonZeroIdx]=nums[idx]
            nonZeroIdx++;
         }
      }
    
    
      for(let j=nonZeroIdx; j<nums.length; j++) {
        nums[j] = 0;
      }
    };


// Implementing Using Indiced Queue:

/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    
    let indicedQueue: number[] = [];

    for(let idx=0; idx<nums.length;idx++) {
        if(nums[idx] === 0) {
            indicedQueue.push(idx);
        }
        else if(indicedQueue.length>0) {
           let popIdx = indicedQueue.shift(); // Get's next index of zeroth element
           nums[popIdx] = nums[idx];
           nums[idx] = 0; // set idx value to 0;
           indicedQueue.push(idx);
        }
    }
};