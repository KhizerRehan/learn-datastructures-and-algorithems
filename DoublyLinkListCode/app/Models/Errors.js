// =======================================
// Reveal Module Patter
// =======================================
var Node = (function() {

	console.log("Node Object Instantiated");
	var _data = 0;
	var _nextPtr = null;
	var _prevPtr = null;

	function getData() {
		return _data;
	}

	return {
		g: getData
	}

}());

//Wrong Way:
var obj = Node();
//Node.js:22 Uncaught TypeError: Node is not a function

// Correct Way:
var obj = Node;
console.log(obj);

// =======================================
// =======================================