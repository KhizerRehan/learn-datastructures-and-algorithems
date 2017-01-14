(function() {
	//Annonymous Function
	'use strict'
	// =======================================
	// =======================================

	function Person() {
		this._firstName = "Khizer";
		this._lastName = "Rehan";
		this._age = 22;
		this._eyeColor = "Black";
	}


	//Access Object Using Dot Notation (objectName.propertyName)
	console.log("=======================================");
	console.log(". Access Operator Notation");
	var perObj = new Person();
	console.log(perObj._firstName);
	console.log(perObj._lastName)
	console.log(perObj._age)
	console.log(perObj._eyeColor);


}());

// =======================================
// Comparison With var keyword and function
// (VC):Var Case
// (FC):Function Case
// =======================================
// 1:Use =(FC) instead of :(VC) in Name:Value Pairs
// 2:Use ;(FC) instead of ,(VC) for multiple Name:Value Pairs
// 3:Create New function Object using new keyword and 
// access it using .Notation(FC) && Using Object Literal Name
// + (.) Notation to Access Name:Value Pair

// =======================================
// =======================================