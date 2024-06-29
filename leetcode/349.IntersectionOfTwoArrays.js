
// ******************************
// Khizer Accepted Solution:
// Description: https://leetcode.com/problems/intersection-of-two-arrays/
// ******************************

// ---------------------------------------------------
// Solution: KhizerRehan
// ---------------------------------------------------


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    const uniqueResultNum1 = [...new Set(nums1)];
    const uniqueResultNum2 = [...new Set(nums2)];
    const result = [];

    if (uniqueResultNum1.length < uniqueResultNum2.length) {
        for (let i = 0; i < uniqueResultNum1.length; i++) {
            if (uniqueResultNum2.includes(uniqueResultNum1[i])) {
                result.push(uniqueResultNum1[i])
            }
        }
    } else {
        for (let i = 0; i < uniqueResultNum2.length; i++) {
            if (uniqueResultNum1.includes(uniqueResultNum2[i])) {
                result.push(uniqueResultNum2[i])
            }
        }
    }

 return [...new Set(result)];
};

// ---------------------------------------------------
// Solution-1:
// ---------------------------------------------------

var intersection = function(nums1, nums2) {

    // Handling edge cases
    if (nums1.length === 0 && nums2.length === 0) {
        return []
    } 
    else {
        if (nums1.length === 0 && !nums2.length) {
            return nums2;
        } 
        else if (nums2.length === 0 && !nums1.length) {
            return nums1;
        }
    }

    const result = [];
    for (let num of nums1) {
        if (nums2.includes(num) && !result.includes(num)) {
            result.push(num)
        }
    }

    return result;
};

// ---------------------------------------------------
// Solution-2: Using Set
// https://leetcode.com/problems/intersection-of-two-arrays/solutions/4850966/beat-95-78-solution/
// ---------------------------------------------------

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = new Set()
    for(let i =0 ; i < nums2.length; i++){
        if(nums1.includes(nums2[i])){
            result.add(nums2[i])
        }
    }
    return [...result]
};

// ---------------------------------------------------
// Solution-3:
// Great Explantion + Dry Run
// https://leetcode.com/problems/intersection-of-two-arrays/solutions/4850780/99-beats-hashmap-easy-explanation-dry-run-c-c-java-kotlin-python3/

// ---------------------------------------------------
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const mp = {};
    for (const num of nums1) {
        mp[num] = (mp[num] || 0) + 1;
    }
    
    const result = [];
    for (const num of nums2) {
        if (mp[num]) {
            result.push(num);
            delete mp[num];
        }
    }
    
    return result;
};
// ---------------------------------------------------
// Solution-4: Using TypeScript (I have striped types to convert it into JS)
// https://leetcode.com/problems/intersection-of-two-arrays/solutions/4850962/normal-sets-solution-nothing-special-here-idk-just-meh/
// https://leetcode.com/problems/intersection-of-two-arrays/solutions/4850737/typescript-javascript-solution/
// ---------------------------------------------------

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let intersectionSet = new Set()
    
    for(let i=0;i<nums2.length;i++){
        if(set1.has(nums2[i])){
            intersectionSet.add(nums2[i]) // Don't confuse in case of repeated elements it will update value of set counter if has already added in set
        }
    }
    
    return Array.from(intersectionSet)
};

// BOTH ARE SAME

function intersection(nums1, nums2){
    const s1 = new Set(nums1);
    const s2 = new Set();


    for (const n2 of nums2) {
        if (s1.has(n2)) {
            s2.add(n2); 
        };
    }
    return Array.from(s2); // Converts into Array
};

// ---------------------------------------------------
// Solution-5:
https://leetcode.com/problems/intersection-of-two-arrays/solutions/5228892/intersection-of-two-arrays-solution-with-sets-beats-97-21/
// ---------------------------------------------------

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1), set2 = new Set(nums2)
    const res = []
    
    set1.forEach(a => {
    	if(set2.has(a)) res.push(a)
    })
    return res
};

// ---------------------------------------------------
// Solution-6:
// https://leetcode.com/problems/intersection-of-two-arrays/solutions/5177700/easy-js-solution-using-set/
// ---------------------------------------------------

// Filtering the Set before to get unique values on both set

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const newSet1 = new Set(nums1)
    const newSet2 = new Set(nums2)
    const intersection = new Set([...newSet1].filter(num => newSet2.has(num)))
    return [...intersection]  
};

// OR
// Filtering the Set Later once iterated on Original Set

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    return [...new Set(nums1.filter(el=>nums2.includes(el)))]
};

// TestCase: [1,2,2,1], [2,2]
// ---------------------------------------------------