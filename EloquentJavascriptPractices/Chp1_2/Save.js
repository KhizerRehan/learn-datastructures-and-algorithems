//====================================
//====================================
(function() {
	//IIFE Invoked
	'use strict'

	// Note*:
	// When a variable points at a value, that does not mean it is tied to
	// that value forever. The = operator can be used at any time on existing
	// variables to disconnect them from their current value and have them
	// point to a new one.

	var mood = " light ";
	console.log(mood);
	// ! light
	mood = " dark ";
	console.log(mood);
	// ! dark

	var luigisDebt = 140;
	luigisDebt = luigisDebt - 35;
	console.log(luigisDebt);
	// ! 105



	// // Note*:
	// When you define a variable without giving it a value, the tentacle has
	// nothing to grasp, so it ends in thin air. If you ask for the value of an
	// empty variable, you’ll get the value undefined.
	// A single var statement may define multiple variables. The definitions
	// must be separated by commas.
	var one = 1,
		two = 2;
	console.log(one + two);
	// ! 3
}());


//====================================
//====================================