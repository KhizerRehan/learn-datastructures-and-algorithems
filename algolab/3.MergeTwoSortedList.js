

// I misinterpreted as inputs were given array instead it was basically EACH NODE which will be next 
// solution but if list is provided as "INTEGER" list than below solution works as expected as it is 
// something integer itema and using logic to merge two sorted list.


// Sample Input

/*
Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

*/
    /**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
    var mergeTwoLists = function(list1, list2) {

        if (list1.length === 0 && list2.length === 0) {
            return [];
        } else if (list1.length > list2.length || list2.length || list1.length) {

            //  Issue comes when list have different length 
            //  Custom logic can be placed here for variable 
            //  Size Array length
            const merged = [...list1, ...list2]
            return merged.sort()
        } else if (list1.length === list2.length) {

            const mergedArray = [];
            for (let idx = 0; idx < list1.length; idx++) {

                if (list1[idx] <= list2[idx]) {
                    mergedArray.push(list1[idx])
                    mergedArray.push(list2[idx])
                } else {
                    mergedArray.push(list2[idx])
                    mergedArray.push(list1[idx])
                }

            }
        }
    }
 

// Khizer Naive Solution-2:

var mergeTwoLists = function(list1, list2) {
    if (list1.length === 0 && list2.length === 0) {
        return [];
    }
    
    const merged = [...list1, ...list2]
    return merged.sort()
}


// AlgoLab Solution:
var mergeTwoLists = function(list1, list2) {
	let newHead = new ListNode(0);
	let newList = newHead;

	while (list1 != null && list2 != null) {
		if (list1.val < list2.val) {
			newList.next = new ListNode(list1.val);
			list1 = list1.next;
		} else {
			newList.next = new ListNode(list2.val);
			list2 = list2.next;
		}

		newList = newList.next;
	}

	while (list1 != null) {
		newList.next = new ListNode(list1.val);
		list1 = list1.next;
		newList = newList.next;
	}

	while (list2 != null) {
		newList.next = new ListNode(list2.val);
		list2 = list2.next;
		newList = newList.next;
	}

	return newHead.next;
};