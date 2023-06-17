// ################################################
// Link:https://leetcode.com/problems/sum-of-unique-elements/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    const hashmap = {}
    for (const number of nums) {
      if (hashmap[number]) {
        hashmap[number] = hashmap[number] + 1;
      } else {
        hashmap[number] = 1;
      }
    };
    let sum = 0;
    Object.keys(hashmap).map(element => {
      if (hashmap[element] === 1) {
        // add number for counts === 1
        sum += +element;
      }
    });
    return sum;
  };
  // ################################################
  // Leet Code Discussion Solutions:
  // ################################################
  // Solution-1: https://leetcode.com/problems/sum-of-unique-elements/discuss/1052897/javascript-96ms
  // Note: Take helped but did some minor modifications:
  (function() {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    var sumOfUnique = function(nums) {
      const map = new Map()
      for (const element of nums) {
        map.set(element, (map.get(element) + 1) || 1);
      }
      let sum = 0;
      for (const [key, value] of map) {
        if (value === 1) {
          sum += key;
        }
      }
      return sum;
    };
    console.log(sumOfUnique([1, 2, 3, 2]));
  }());
  // ################################################
  // Solution-2:  https://leetcode.com/problems/sum-of-unique-elements/discuss/1107428/javascript-code
  /**
   * @param {number[]} nums
   * @return {number}
   */
  var sumOfUnique = function(nums) {
    let numMap = {};
    let arr = [];
    let sum = 0;
    for (let n of nums) {
      numMap[n] = numMap[n] + 1 || 1;
    }
    for (let m in numMap) {
      if (numMap[m] === 1) {
        sum += parseInt(m);
      }
    }
    return sum;
  };
  // ################################################
  // Solution-3: https://leetcode.com/problems/sum-of-unique-elements/discuss/1059567/Fast-Javascript-Solution
  var sumOfUnique = function(nums) {
    let count = {};
    for (let num of nums) {
      count[num] ? count[num] += 1 : count[num] = 1;
    }
    return Object.entries(count).reduce((acc, el) => {
      if (el[1] === 1) {
        return acc + Number(el[0]);
      }
      return acc;
    }, 0);
  };
  // ################################################
  // Solution-4: https://leetcode.com/problems/sum-of-unique-elements/discuss/1052572/Javascript-map-solution-76-ms
  var sumOfUnique = function(nums) {
    let sum = 0;
    const map = new Map();
    for (const num of nums) {
      map.set(num, (map.get(num) || 0) + 1);
    }
    for (const [key, val] of map.entries()) {
      if (val === 1) sum += key;
    }
    return sum;
  };
  // ################################################
  // Solution-5: https://leetcode.com/problems/sum-of-unique-elements/discuss/1060973/Javascript-easy-solution
  // Best Solution 1:
  var sumOfUnique = function(nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
      if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) {
        arr.push(nums[i])
      }
    }
    return arr.reduce((a, b) => a + b, 0)
  };
  

  // Slight Modifcation by me:
  var sumOfUnique = function(nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
      if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) {
        arr.push(nums[i])
      }
    }
    let sum = 0;
    arr.forEach(number => {
      sum += number;
    });
    return sum;
  };
  // ################################################
  // Solution-6: https://leetcode.com/problems/sum-of-unique-elements/discuss/1124542/JavaScript-simple-one-pass-O(n)-with-comments
  // Best Solution 2:
  let sumOfUnique = (nums) => {
    let isUnique = {};
    let sum = 0;
    for(let n of nums) {
      if(isUnique[n] === undefined) { //Encountering first time, add to sum
        sum += n;
        isUnique[n] = true;
      } else if(isUnique[n]) { //Encountering second time, subtract from sum
        sum -= n;
        isUnique[n] = false; //Set to false so third or more occurrences will not get added to sum
      }
    }
    return sum;
  }
  // ################################################