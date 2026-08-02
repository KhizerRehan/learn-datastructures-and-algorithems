function stableMountains(height: number[], threshold: number): number[] {
  if (height.length == 0 || threshold === 0) {
    return [];
  }

  let indices = [];
  for (let idx = 1; idx < height.length; idx++) {
    if (height[idx - 1] > threshold) {
      indices.push(idx);
    }
  }
  return indices;
}

// ChatGPT Solution

function stableMountains(height: number[], threshold: number): number[] {
  return height
      .map((_, idx) => idx) // Map indices to an array: [0, 1, 2, ..., n-1]
      .filter((idx) => idx > 0 && height[idx - 1] > threshold); // Apply the stable condition
}
/*

Here's an alternative solution using Array.prototype.filter to make the implementation concise:

Alternative Solution
typescript
Copy code
function stableMountains(height: number[], threshold: number): number[] {
    return height
        .map((_, idx) => idx) // Map indices to an array: [0, 1, 2, ..., n-1]
        .filter((idx) => idx > 0 && height[idx - 1] > threshold); // Apply the stable condition
}
Explanation
Step 1: Map Indices

height.map((_, idx) => idx) generates an array of all indices [0, 1, 2, ..., height.length - 1].
Step 2: Filter Indices

.filter(...) filters out:
Indices where idx = 0 (as mountain 0 is never stable).
Indices where the previous mountain's height height[idx - 1] is not strictly greater than threshold.
Output:

The filtered array contains only the indices of stable mountains.
Complexity Analysis
Time Complexity:
map: Traverses the array of size 
𝑛
n to create an array of indices.
Cost: 
𝑂
(
𝑛
)
O(n).
filter: Traverses the indices array of size 
𝑛
n and evaluates the stable condition.
Cost: 
𝑂
(
𝑛
)
O(n).
Overall Time Complexity:
𝑂
(
𝑛
)
O(n) in best, average, and worst cases since the operations (map and filter) each take linear time.

Space Complexity:
Space for Output Array: The size of the output array depends on the number of stable mountains, which is at most 
𝑂
(
𝑛
)
O(n).
Intermediate Storage: The map operation creates an array of indices of size 
𝑂
(
𝑛
)
O(n).
Overall Space Complexity:
𝑂
(
𝑛
)
O(n) in all cases (dominated by the intermediate indices array).

Best, Worst, and Average Case Analysis
Best Case:

Input: [10, 10, 10], threshold = 20
No stable mountains → Filter evaluates all elements but returns an empty array.
Cost: 
𝑂
(
𝑛
)
O(n).
Worst Case:

Input: [20, 20, 20], threshold = 10
All mountains are stable → Filter returns an array of size 
𝑛
−
1
n−1.
Cost: 
𝑂
(
𝑛
)
O(n).
Average Case:

For random inputs, the filter condition evaluates half the mountains as stable.
Cost: 
𝑂
(
𝑛
)
O(n).
Comparison with Original For-Loop Solution
Code Conciseness: The map and filter solution is more compact and leverages functional programming concepts.
Performance: Both the for-loop and filter solutions have the same time and space complexity (
𝑂
(
𝑛
)
O(n)) in all cases.
Example Execution
Input:
height = [1, 2, 3, 4, 5], threshold = 2

Map Step:
Create indices array: [0, 1, 2, 3, 4].

Filter Step:
Check each index:

idx = 0: Skip (idx > 0 fails).
idx = 1: height[0] = 1 → Not stable.
idx = 2: height[1] = 2 → Not stable.
idx = 3: height[2] = 3 → Stable → Keep.
idx = 4: height[3] = 4 → Stable → Keep.
Output: [3, 4]

*/