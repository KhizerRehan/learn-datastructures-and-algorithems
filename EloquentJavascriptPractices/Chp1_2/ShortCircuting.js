(function() {
	'use strict'

	console.log(null || " user ")
		// ! user
	console.log(" Karl " || " user ")
		// ! Karl

}());

// Note*:
// 1:This functionality allows the || operator to be used as a way to fall
// back on a default value. If you give it an expression that might produce
// an empty value on the left, the value on the right will be used as a
// replacement in that case.

// 2:The && operator works similarly, but the other way around. When the
// value to its left is something that converts to false, it returns that value,
// and otherwise it returns the value on its right.

// 3:Another important property of these two operators is that the expression
// to their right is evaluated only when necessary. In the case of true
// || X, no matter what X is—even if it’s an expression that does something
// terrible—the result will be true, and X is never evaluated. The same goes
// for false && X, which is false and will ignore X. This is called short-circuit
// evaluation.

// 4:The conditional operator works in a similar way. The first expression
// is always evaluated, but the second or third value, the one that is not
// picked, is not.