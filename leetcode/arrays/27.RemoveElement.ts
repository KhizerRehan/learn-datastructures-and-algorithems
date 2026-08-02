// ---------------------------------------------------
// Solution: KhizerRehan
// ---------------------------------------------------

function removeElement(nums: number[], val: number): number {
  if (!nums.length) {
    return 0;
  }

  let elemPositionIdx = 0; // Moved outside the loop to track valid elements globally
  for (let idx = 0; idx < nums.length; idx++) {
    if (nums[idx] !== val) {
      nums[elemPositionIdx] = nums[idx]; // Overwrite valid position
      elemPositionIdx++; // Move to the next position
    }
  }
  return elemPositionIdx; // Return the count of valid elements
}

// ---------------------------------------------------