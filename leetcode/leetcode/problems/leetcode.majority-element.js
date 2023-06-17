// Best Solution:

// ################################################
// Link: https://leetcode.com/problems/majority-element/
// SOLVED BY ME:


(function() {
    /**
   * @param {number[]} nums
   * @return {number}
   */
    var majorityElement = function(nums) {
  
      if (!Array.isArray(nums)) {
        return -1
      } else {
        const elementsOccurrences = {}
  
        for (element of nums) {
          if (!elementsOccurrences[element]) {
            elementsOccurrences[element] = 1;
          } else {
            elementsOccurrences[element] += 1;
          }
          elementsOccurrences[element] = Math.round(elementsOccurrences[element]);
        }
  
        for (key of Object.keys(elementsOccurrences)) {
          if (elementsOccurrences[key] >= Math.round(nums.length / 2)) {
            return key
          }
        }
  
        return -1;
      }
    }
  
    console.log(majorityElement([3, 2, 3]));
  }())
  
// ################################################
// Leet Code Discussion Solutions:
// https://leetcode.com/problems/majority-element/discuss/2304798/Javascript-Hashmap
// ################################################
// Solution-1: 

(function() {
  /**
 * @param {number[]} nums
 * @return {number}
 */
  const majorityElement = function(nums) {
    let table = new Map()
    let times = Math.floor(nums.length / 2)

    for (let i = 0; i < nums.length; i++) {
      if (table.has(nums[i])) {
        debugger;
        table.set(nums[i], table.get(nums[i]) + 1)

        if (table.get(nums[i]) > times) {
          return nums[i]
        }

        continue
      }

      table.set(nums[i], 1)
    }

    return nums
  };

  console.log(majorityElement([3, 2, 3]));
}())


// ################################################
// Solution-2: 

// ################################################
// Solution-3: 

// ################################################
// Solution-4: 

// ################################################
// Solution-5: 

// ################################################