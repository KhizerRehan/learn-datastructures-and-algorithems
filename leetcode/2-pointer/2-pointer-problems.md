Find Duplicates:

```js
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // mismatch found
    }
    left++;
    right--;
  }
  return true; // all matched
}
```

Dry Run:


### 🧮 **Dry Run Example**

Let’s test with `"racecar"`:

| Step | left | right | str[left] | str[right] | Match? | Action          |
| ---- | ---- | ----- | --------- | ---------- | ------ | --------------- |
| 1    | 0    | 6     | r         | r          | ✅      | left=1, right=5 |
| 2    | 1    | 5     | a         | a          | ✅      | left=2, right=4 |
| 3    | 2    | 4     | c         | c          | ✅      | left=3, right=3 |
| 4    | 3    | 3     | e         | e          | ✅      | stop            |

✅ `"racecar"` → palindrome

---



**Two-pointer approach for reversing a string/array**,

```
arr = ['h', 'e', 'l', 'l', 'o']
```


### Reverse String

```js
function reverseArray(arr) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}
```

---

### 🧮 Step-by-Step Dry Run

| Step  | left | right | arr[left] | arr[right] | Action (swap)          | Resulting Array           |
| ----- | ---- | ----- | --------- | ---------- | ---------------------- | ------------------------- |
| **1** | 0    | 4     | 'h'       | 'o'        | swap → positions 0 & 4 | ['o', 'e', 'l', 'l', 'h'] |
| **2** | 1    | 3     | 'e'       | 'l'        | swap → positions 1 & 3 | ['o', 'l', 'l', 'e', 'h'] |
| **3** | 2    | 2     | 'l'       | 'l'        | stop → pointers meet   | ['o', 'l', 'l', 'e', 'h'] |

---

### ✅ Final Output

```
['o', 'l', 'l', 'e', 'h']
```

---

Perfect 👍 — let’s **deep dive + dry run** the **Remove Duplicates from Sorted Array** problem step by step.

---

## 🧩 Problem Statement

Given a **sorted array**, remove duplicates **in place**, so that each element appears only once.
Return the **new length** (number of unique elements).

You **must not** use extra space — modify the array itself.

---

### 🧮 Example

**Input:**
`nums = [1, 1, 2, 3, 3, 4]`
**Output:**
Length = `4`, and first 4 elements of `nums` = `[1, 2, 3, 4]`

---

## 💻 Code

```js
function removeDuplicates(nums) {
  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
}

const nums = [1, 1, 2, 3, 3, 4];
console.log(removeDuplicates(nums)); // 4
console.log(nums); // [1, 2, 3, 4, 3, 4]
```

---

## 🧠 Intuition

* The array is **sorted**, so duplicates will always be **next to each other**.
* We use:

  * `slow` pointer → marks the position of the **last unique element**.
  * `fast` pointer → scans ahead to find **new unique elements**.

Whenever we find a new unique element (`nums[fast] !== nums[slow]`),
we increment `slow` and copy that new element into `nums[slow]`.

---

## 🔍 **Dry Run**

**Input:**
`nums = [1, 1, 2, 3, 3, 4]`

| Step | fast | slow | nums[fast] | nums[slow] | Comparison | Action                | nums (after step)  |
| ---- | ---- | ---- | ---------- | ---------- | ---------- | --------------------- | ------------------ |
| 1    | 1    | 0    | 1          | 1          | equal      | do nothing            | [1, 1, 2, 3, 3, 4] |
| 2    | 2    | 0    | 2          | 1          | not equal  | slow++ → 1, nums[1]=2 | [1, 2, 2, 3, 3, 4] |
| 3    | 3    | 1    | 3          | 2          | not equal  | slow++ → 2, nums[2]=3 | [1, 2, 3, 3, 3, 4] |
| 4    | 4    | 2    | 3          | 3          | equal      | do nothing            | [1, 2, 3, 3, 3, 4] |
| 5    | 5    | 2    | 4          | 3          | not equal  | slow++ → 3, nums[3]=4 | [1, 2, 3, 4, 3, 4] |

✅ **Loop ends**

* Final `slow = 3`
* New length = `slow + 1 = 4`
* Unique elements = first 4 values `[1, 2, 3, 4]`

---

## 🧩 Output

```js
console.log(removeDuplicates(nums)); // 4
console.log(nums.slice(0, 4));       // [1, 2, 3, 4]
```

---

## ⚡ Complexity

* **Time:** O(n) – one pass through the array
* **Space:** O(1) – in-place modification

---

```js
// Assuming the function is to remove duplicates from a sorted array in-place
function removeDuplicates(nums) {

    if (nums.length === 0) return [];

    let slowPtr = 0;
    let fastPtr = 1;

    while(slowPtr < fastPtr && fastPtr < nums.length) {

        if(nums[slowPtr] === nums[fastPtr]) {
            fastPtr++;
        } else {
            slowPtr++;
            nums[slowPtr] = nums[fastPtr];
            fastPtr++;
        }
    }


    // Returns
    // SlowPtr: Index of last unique element
    // FastPtr: Length of modified array
    // nums.slice(0, slowPtr + 1): The modified array with duplicates removed
    return [slowPtr, fastPtr, nums.slice(0, slowPtr + 1)];
}

// Example usage:
console.log(removeDuplicates([1, 1, 2])); // Output: [1, 2]
console.log(removeDuplicates([0,0,1,1,2,2,3,3,4])); // Output: [0, 1, 2, 3, 4]
```
