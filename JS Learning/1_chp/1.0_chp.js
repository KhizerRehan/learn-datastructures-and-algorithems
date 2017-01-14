(function() {
	//Annonymous Function
	'use strict'
	// =======================================
	// =======================================
	var Person = {
			_firstName: "Khizer",
			_lastName: "Rehan",
			_age: 22,
			_eyeColor: "Black"
		}
		//You define (and Create) a JavaScript object with an object literal { }:
		//Access Object Using Dot Notation (objectName.propertyName)
	console.log("=======================================");
	console.log(". Access Operator Notation");
	console.log(Person._firstName)
	console.log(Person._lastName)
	console.log(Person._age)
	console.log(Person._eyeColor);

	//Access Object Using Hasing (objectName["propertyName"])
	console.log("=======================================");
	console.log("Hashing[key] Notation");
	console.log(Person._firstName)
	console.log(Person._lastName)
	console.log(Person._age)
	console.log(Person._eyeColor);
	console.log("=======================================");

	// =======================================
	// =======================================

}());