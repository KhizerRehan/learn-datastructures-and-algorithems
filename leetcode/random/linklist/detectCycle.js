

function detectCycle(head) {
    if (!head || !head.next) return null;

    let slow = head;
    let fast = head;


    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
          return true
        }
    }

    return null;
}


// ===============================
// (function() {
//     function checkIfArrayIsSorted(array) {
//       if (!Array.isArray(array)) {
//         return false;
//       }


