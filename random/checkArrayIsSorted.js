
// ===============================
// Find Dataset is sorted on Integers Array:

(function() {
    function checkIfArrayIsSorted(array) {
      if (!Array.isArray(array)) {
        return false;
      }
      const arrLength = array.length;
      if (arrLength == 0 || arrLength.length == 1) {
        return true
      }
      for (let position = 0; position < array.length; position++) {
        if (array[position] > array[position + 1]) {
          return false
        }
      }
      return true
    }
  
    var dataSet1 = {};
    var dataSet2 = [];
    var dataSet3 = [10];
    var dataSet4 = [0, 0, 0, 0, 0, 0];
    var dataSet5 = [5, 4, 3, 2, 1];
    var dataSet6 = [1, 2, 3, 4, 5];
    var dataSet7 = [20, 23, 23, 45, 78, 88]
  
    console.log('DataSet-1 Result:', checkIfArrayIsSorted(dataSet1));
    console.log('DataSet-2 Result:', checkIfArrayIsSorted(dataSet2));
    console.log('DataSet-3 Result:', checkIfArrayIsSorted(dataSet3));
    console.log('DataSet-4 Result:', checkIfArrayIsSorted(dataSet4));
    console.log('DataSet-5 Result:', checkIfArrayIsSorted(dataSet5));
    console.log('DataSet-6 Result:', checkIfArrayIsSorted(dataSet6));
    console.log('DataSet-7 Result:', checkIfArrayIsSorted(dataSet7));
  }());
  // ===============================


(function() {
    function checkIfArrayIsSorted(array) {
      if (!Array.isArray(array)) {
        return false;
      }
      else if(array.length===0){
          return true;
      }
      else {
        for(let idx=0; idx<array.length;idx++){
            if(array[idx]<array[idx+1]){
                return true;
            }
            else {
                return false;
            }
        }
      }
    }
  
    var dataSet1 = {};
    var dataSet2 = [];
    var dataSet3 = [10];
    var dataSet4 = [0, 0, 0, 0, 0, 0];
    var dataSet5 = [5, 4, 3, 2, 1];
    var dataSet6 = [1, 2, 3, 4, 5];
    var dataSet7 = [20, 23, 23, 45, 78, 88]
  
    console.log('DataSet-1 Result:', checkIfArrayIsSorted(dataSet1));
    console.log('DataSet-2 Result:', checkIfArrayIsSorted(dataSet2));
    console.log('DataSet-3 Result:', checkIfArrayIsSorted(dataSet3));
    console.log('DataSet-4 Result:', checkIfArrayIsSorted(dataSet4));
    console.log('DataSet-5 Result:', checkIfArrayIsSorted(dataSet5));
    console.log('DataSet-6 Result:', checkIfArrayIsSorted(dataSet6));
    console.log('DataSet-7 Result:', checkIfArrayIsSorted(dataSet7));
  }());