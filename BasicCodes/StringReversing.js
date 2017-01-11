// =======================================
// ReverseArray Using .split function
// =======================================

;
(function() {
	// body...
	// alert("IIFE Working")


	var _arr = "My Name is Khizer Rehan";
	console.log("Actual Array:" + _arr)

	var _splittedArray = _arr.split('');
	console.log("Splitted Array:" + _splittedArray);

	var _arrLen = _splittedArray.length;
	console.log("Arr Length:" + _arrLen);

	var _reversedArray1 = [""];
	var _reversedArray1 = [""];

	console.log("Reversed-1 Array Before:" + _reversedArray);
	console.log("Reversed-2 Array Before:" + _reversedArray);

	for (var i = _arrLen - 1; i >= 0; i--) {
		// Debugging Purpose
		// console.log(_arr[i] + "-" + _splittedArray.pop());
		_reversedArray1.push(_arr[i]);
		//OR 
		_reversedArray2.push(_splittedArray.pop());
	}


	//Display String in Reversed Order
	console.log("Reversed String-1:" + _reversedArray1);
	console.log("Reversed String-2:" + _reversedArray2);

}());