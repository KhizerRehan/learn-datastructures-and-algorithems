// ******************************
// XOR Solution

/*
        (Binary Representation)
х = 4 -> 100 
у = 2 -> 010
x ^ y -> 110 = 6
x ^ z -> 110 = 6

So if we do any number e.g 

e.g x = 100, 0 = 000
x ^ 0 -> 100 ^ 000 => 100 -> always "x" number


[Example-2: XOR Explanation]
https://leetcode.com/problems/single-number/solutions/2441785/solved-using-bitwise-xor-with-full-explanation/

*/

// Leetcode Solution-1
// JS | XOR bit solution | 85% | With explanation => https://leetcode.com/problems/single-number/solutions/2438883/very-easy-0-ms-100-fully-explained-java-c-python-js-c-python3/

var singleNumber = function(nums) {
    // Initialize the unique number...
    let xor = 0;

    // Traverse all elements through the loop...
    for (let idx = 0; idx < nums.length; idx++) {
        // Concept of XOR...
        xor = xor ^ nums[idx];
    } 
    // [ 4, 1, 2, 1, 2 ]
    /*
    
    iteration-1 => xor = 0 ^ 4 => 4 ->
    iteration-2 => xor = 4 ^ 1 => 5 
    iteration-3 => xor = 5 ^ 2 => 7 
    iteration-4 => xor = 7 ^ 1 => 6
    iteration-5 => xor = 6 ^ 2 => 4
    
    return 4
    */
    
    return xor;       // Return the unique number...
};

// ---

// Leetcode Solution-2

/*
Description: Ulitmately deleting all key maps if count > 1
*/

const singleNumber = function(nums) {
    const hash = {};
  
    for (const el of nums) {
      if (!hash[el]) {
        hash[el] = 1;
      } else {
        delete hash[el]
      }
    }
    return Object.keys(hash)[0];
  };

// ---

// ******************************
// Link:https://leetcode.com/problems/single-number/
// SOLVED BY ME:

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var hashMap = {};
    if (!Array.isArray(nums)) {
      return -1;
    } else {
      nums.forEach((value, index) => {
        if (!hashMap[value]) {
          hashMap[value] = 1
        } else {
          hashMap[value] = hashMap[value] + 1
        }
      });
  
  
      const keys = Object.keys(hashMap)
      for (let idx = 0; idx < keys.length; idx++) {
        if (hashMap[keys[idx]] === 1) {
          return keys[idx];
        }
      }
    }
  };
  
  // ******************************
  // Leet Code Discussion Solutions:
  // ******************************
  // Solution-1: https://leetcode.com/problems/single-number/discuss/540152/Javascript 
  
  
  var singleNumber = function(nums) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] in obj) {
        delete obj[nums[i]];
      } else {
        obj[nums[i]] = 1;
      }
    }
    return Object.keys(obj)[0];
  };
  singleNumber([2, 2, 1])
  
  // ******************************
  // Solution-2: https://leetcode.com/problems/single-number/discuss/863519/JavaScript
  
  const singleNumber = (nums) => {
    let seen = new Set();
    for (const i of nums) {
      seen.has(i) ? seen.delete(i) : seen.add(i);
    }
    return Array.from(seen.values())[0];
  };
  
  singleNumber([2, 2, 1])
  
  // ******************************
  // Solution-3: https://leetcode.com/problems/single-number/discuss/764924/Javascript-Solution
  
  (function() {
    const singleNumber = function(nums) {
      let map = new Map();
      let val = 0;
      for (let x of nums) {
        if (map.has(x)) {
          map.set(x, map.get(x) + 1);
        } else {
          map.set(x, 1);
        }
      }
      console.log(map, 'map');
      for (let [k, v] of map) {
        if (map.get(k) === 1) {
          val = k;
          break;
        }
      }
      return val;
    };
  
    singleNumber([2, 2, 1])
  }())
  
  
  // ******************************
  // Solution-4: https://leetcode.com/problems/single-number/discuss/343570/javascript-solutions
  
  (function() {
    var singleNumber = function(nums) {
  
      let lookup = {}
      nums.forEach(num => {
        lookup[num] ? lookup[num]++ : lookup[num] = 1
      })
  
      for (let i = 0; i < nums.length; i++) {
        if (lookup[nums[i]] === 1)
          return nums[i]
      }
    };
    singleNumber([2, 2, 1])
  }())

   // ******************************
  // Solution-5: https://leetcode.com/problems/single-number/discuss/412135/Javascript
  

  (function() {
    var singleNumber = function(nums) {
      const obj = nums.reduce((acc,num)=>{
        if (acc[num]) {
          acc[num] = acc[num] + 1
        } else {
          acc[num] = 1;
        }
        return acc;
      }
      , {});
      for (let[k,v] of Object.entries(obj)) {
        if (v === 1) {
          return k;
        }
      }
    }
  }())

   // ******************************
  // Solution-6: https://leetcode.com/problems/single-number/discuss/280193/Javascript-solution
  // Best Solution:

  (function() {
    var singleNumber = function(nums) {
      for (let i = 0; i < nums.length; i++) {
        let tmp = nums.pop();
        if (nums.includes(tmp)) {
          nums.unshift(tmp);
          continue;
        }
        return tmp;
      }
    };
    singleNumber([2, 2, 3, 4, 4, 5, 3])
  }())
  
  // ******************************

  (function() {
    const singleNumber = function(nums) {
        let map = new Map();
        let val = 0;
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        console.log(map, 'map');
        
        map.forEach((value,key)=>{
            if (value === 1) {
                val = key
            }
        })
        return val;
    };

    console.log(singleNumber([2, 2, 5]))
}())
