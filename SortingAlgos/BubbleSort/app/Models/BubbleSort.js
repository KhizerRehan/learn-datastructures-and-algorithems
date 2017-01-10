// =======================================
// BubbleSort Class
// =======================================
function BubbleSort(arrParam) {
	console.log("BubbleSortClass:" + arrParam);
	var _arrLen = arrParam.length;
	console.log("Array-Length:" + _arrLen);

	//Outer Loop
	for (var i = 0; i < _arrLen; i++) {
		//Inner Loop
		for (var j = 0; j < _arrLen; j++) {
			if (arrParam[j] > arrParam[j + 1]) {
				BubbleSort.prototype.SwapValues(arrParam, j, j + 1);
			}
		}
	}

	console.log("Sorted Array:" + arrParam);
	//Sortd Array Returned.
	return arrParam;
}


// =======================================
// SwapValues Method
// =======================================
BubbleSort.prototype.SwapValues = function(arrParam, firstIndexParam, secondIndexParam) {
	// body...
	var temp = arrParam[firstIndexParam];
	arrParam[firstIndexParam] = arrParam[secondIndexParam];
	arrParam[secondIndexParam] = temp;

}

// =======================================
// =======================================