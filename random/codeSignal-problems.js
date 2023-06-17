// ===============================
(function() {
  function adjacentElementsProduct(inputArray) {
    if (Array.isArray(inputArray) && inputArray.length > 0) {
      if (inputArray.length === 1) {
        return inputArray[0];
      }
      let largestProduct = 0;
      let indexPositions = 0;
      for (let index = 0; index < inputArray.length; index++) {
        let product;
        product = inputArray[index] * inputArray[index + 1];
        if (index === 0) {
          largestProduct = product;
        } else if (product > largestProduct) {
          largestProduct = product;
          indexPositions = index;
        }
      }

      return inputArray[indexPositions] * inputArray[indexPositions + 1];
    }
  }

  console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]));
}())

// ===============================

(function() {
// Find Unique and Duplicate Rows from Dataset:

  var data0 = {};
  var data1 = [];
  var data2 = [[0, 1, 0, 0, 1]];
  var data3 = [[0, 1, 0, 0, 1], [1, 0, 1, 1, 0], [0, 1, 0, 0, 1], [1, 0, 1, 0, 0]];

  function findUniqueRows(array) {

    const hashMap = {};
    let distinctRows = [];
    let duplicateRows = [];

    if (!Array.isArray(array)) {
      return {
        distinctRows,
        duplicateRows
      }
    } else if (Array.isArray(array) && array.length === 1) {
      return {
        distinctRows: [array[0]],
        duplicateRows
      }
    } else {
      for (let indexPos = 0; indexPos < array.length; indexPos++) {
        let str = array[indexPos].join(',');
        if (hashMap[str] === undefined) {
          hashMap[str] = 0;
          distinctRows.push(array[indexPos]);
        } else {
          duplicateRows.push(array[indexPos]);
          break;
        }
      }

      return {
        distinctRows,
        duplicateRows
      }
    }

    return []
  }

  console.log("Data-0 Response:", findUniqueRows(data0));
  console.log("Data-1 Response:", findUniqueRows(data1));
  console.log("Data-2 Response:", findUniqueRows(data2));
  console.log("Data-3 Response:", findUniqueRows(data3));

}())