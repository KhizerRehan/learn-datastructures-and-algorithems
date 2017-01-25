// =======================================
// ReverseArray Using .split function
// =======================================

;
(function() {
	// body...
	// alert("IIFE Working")


	var _arr = "My Name is Khizer Rehan";
	console.log("Actual Array:" + _arr)

	//Split Array on character by comma seperation
	var _splittedArray = _arr.split('');

	//Split Array by Word by Space seperation

	var _splittedArray1 = _arr.split(' ');

	console.log("Splitted Array By comma:" + _splittedArray);
	console.log("Splitted Array By Word:" + _splittedArray1);

	var _arrLen = _splittedArray.length;
	console.log("Arr Length:" + _arrLen);

	// Array Created that wil store Reversed Array
	var _reversedArray1 = [""];
	var _reversedArray2 = [""];

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