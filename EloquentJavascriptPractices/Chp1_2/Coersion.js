(function() {
	'use strict'

	console.log(8 * null)
		// ! 0
	console.log("5" - 1)
		// ! 4
	console.log("5" + 1)
		// ! 51
	console.log(" five " * 2)
		// ! NaN
	console.log(false == 0)
		// ! true

	//it produces true only if both sides are one of null or undefined.
	console.log(null == u n d e f i n e d);
	// ! true
	console.log(null == 0);
	// ! false
	console.log("" == false)
		// true

	console.log(0 == false);
	// true

	console.log(null == false);
	// false
}());

// Note*:
// I recommend using the three-character comparison operators defensively
// to prevent unexpected type conversions from tripping you up.
// But when you’re certain the types on both sides will be the same, there
// is no problem with using the shorter operators.