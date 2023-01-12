/**
 * @param {number[]} nums
 * @return {number}
 */

// ******************************
// Khizer Accepted Solution-1
// ******************************
var singleNumber = function(nums) {

    const hashMap = {};
    nums.forEach(num=>{
        if (!hashMap[num]) {
            hashMap[num] = 1
        } else {
            hashMap[num] += 1
        }
    })

    return Object.keys(hashMap).find(key=>hashMap[key] === 1)
};


// Khizer Accepted Solution-2
var singleNumber = function(nums) {

  const hashMap = {};
  nums.forEach(num=>{
      if (!hashMap[num]) {
          hashMap[num] = 1
      } else {
          delete hashMap[num];
      }
  })

  return  Number(Object.keys(hashMap)[0])
};

// ******************************
// AlgoLab Solution:
// ******************************

var singleNumber = function(nums) {
	let counter = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (!counter.has(nums[i])) {
			counter.set(nums[i], 1);
		} else {
			counter.delete(nums[i]);
		}
	}
	return [...counter.keys()][0];
};

// ******************************
// ChatGPT Solution-1:
// ******************************
function singleNumber(nums) {
    const map = {};
    for (const num of nums) {
      if (map[num]) {
        map[num] += 1;
      } else {
        map[num] = 1;
      }
    }
    for (const [key, value] of Object.entries(map)) {
      if (value === 1) {
        return key;
      }
    }
  }
  
console.log(singleNumber([1, 2, 3, 2, 3, 1, 4])); // Output: 4

// ******************************
// ChatGPT Solution-2:
// ******************************

function singleNumber(nums) {
    // Create a map to store the number of occurrences of each number
    const occurrences = new Map();
  
    // Iterate through the array, adding each number to the map or updating its count
    for (const num of nums) {
      if (occurrences.has(num)) {
        occurrences.set(num, occurrences.get(num) + 1);
      } else {
        occurrences.set(num, 1);
      }
    }
  
    // Iterate through the map, returning the first number with a count of 1
    for (const [num, count] of occurrences) {
      if (count === 1) {
        return num;
      }
    }
  }

/*
Description:
This solution has a time complexity of O(n), since it iterates through the array once to build the map, and again to find the single number. It also has a space complexity of O(n), since the map uses O(n) space to store the counts of each number.
*/
// ******************************
  
  
  
  
  