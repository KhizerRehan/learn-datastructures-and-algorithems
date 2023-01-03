// Khizer Solution-1
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {

    const result = []
    if (!n) {
        return result;
    }

    /*
 Input: n = 5
 Output: ["1","2","Fizz","4","Buzz"]
*/

    for (let idx = 1; idx <= n; idx++) {

        if (idx % 3 === 0 && idx % 5 === 0) {
            result.push("FizzBuzz")
        } else if (idx % 3 === 0) {
            result.push("Fizz")
        } else if (idx % 5 === 0) {
            result.push("Buzz")
        } else {
            result.push(idx)
        }
    }

    return result;
};

// AlgoLab: Solution-2
// Use string variable to get final value

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = []
    let str = '';
    for (let idx = 1; idx <= n; idx++) {
        if (idx % 3 === 0 && idx % 5 === 0) {
            str += "FizzBuzz"
        } else if (idx % 3 === 0) {
            str += "Fizz"
        } else if (idx % 5 === 0) {
            str += "Buzz"
        } else {
            str += String(idx)
        }
        result.push(str)
        str = ''
    }
    return result;
};