// ******************************
// Khizer Accepted Solution
// ******************************
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return 1
    }
    else {
        return fib(n-1) + fib(n-2)
    }
    
};

// ******************************
// AlgoLab Solution:
// ******************************

var fib = function(n) {
	if (n <= 1) {
		return n;
	}
	let lastValue = 0;
	let scndLastValue = 1;
	for (let i = 2; i <= n; i++) {

        // f(0) = f(0) => 0
        // f(1) = f(1) => 1
        // f(2) = f(1) + f(0) => 1 + 0
        // f(3) = f(2) + f(1) => 1 + 1
        // f(4) = f(3) + f(2) => 2 + 1
        // f(5) = f(4) + f(3) => 3 + 2
        // f(6) = f(5) + f(4) => 5 + 3
		const temp = scndLastValue + lastValue;
		lastValue = scndLastValue;
		scndLastValue = temp;
	}
	return scndLastValue;
};