
// ===============================
// [Using Hashmap:]
// ===============================
(function() {
    function containsDuplicateElements(array) {
        if (!Array.isArray(array))
            return false

        if (Array.isArray(array) && array.length === 1)
            return false;

        let counter = 0;
        let isDuplicateExists = false;
        let hashCounter = {};
        const arrSize = array.length;
        while (counter !== arrSize) {

            /*
           WHY I HAVE ADDED EXPLICIT "undefined" instead if "!hashCounter[array[counter]]" 
           SINCE MY GOAL WAS TO ADD VALUE WHEN IT DOESN'T EXIST !undefined -> TRUE THAN 
           WHY ABOVE CHECK WILL NOT WORK TAKE 3RD EXAMPLE:
  
           HINT: !0 -> TRUE
          */
            if (hashCounter[array[counter]] === undefined) {
                hashCounter[array[counter]] = 0;
            } else {
                hashCounter[array[counter]]++;
                console.log(`"${array[counter]}" is a Duplicate Element`);
                isDuplicateExists = true;
            }
            counter++;
        }

        return isDuplicateExists
    }

    console.log(containsDuplicateElements({}));
    console.log(containsDuplicateElements([]));
    console.log(containsDuplicateElements([1, 2, 4]));
    console.log(containsDuplicateElements([1, 2, 4, 5, 5]));
    console.log(containsDuplicateElements([1, 2, 3, 5, 6, 2]));
}())

// ===============================
// [Using Array and Sorting:]
// ===============================
(function() {
    function containsDuplicateElements(array) {
        if (!Array.isArray(array))
            return false

        if (Array.isArray(array) && array.length === 1)
            return false;

        debugger ;
        array = array.sort(function(a, b) {
            return a - b
        });
        // sort element to compare prev/next element/

        for (let index = 0; index < array.length; index++) {
            if (array[index] === array[index + 1])
                return true;
        }

        return false;
    }

    console.log(containsDuplicateElements({}));
    console.log(containsDuplicateElements([]));
    console.log(containsDuplicateElements([1, 2, 4]));
    console.log(containsDuplicateElements([1, 5, 2, 4, 5]));
    console.log(containsDuplicateElements([1, 22, 213, 2, 6, 3]));
}())

// ===============================
// Check Duplicates:
const hasDuplicates = arr = >
new Set ( arr ) .size < arr.length
hasDuplicates ( [ 1 , 2 , 3 ] ) // false
hasDuplicates ( [ 4 , 5 , 4 ] ) // true
hasDuplicates ( [ ' str ' , ' obj ' , ' str ' ] ) // true

// ===============================