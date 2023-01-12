
// ******************************
// Khizer Accepted Solution
// ******************************

var defangIPaddr = function(address) {
    let result = '';
    let splitted = address.split("")

    for (let idx = 0; idx <= splitted.length; idx++) {

        if (    splitted[idx] === "." 
             || splitted[idx] === ":"
             || (address.charCodeAt(idx) >=97  &&  address.charCodeAt(idx) <=122)
             || (address.charCodeAt(idx) >=65  &&  address.charCodeAt(idx) <=90)
           ) {
            splitted[idx] = "[.]"
        }
    }

    return splitted.join("")
};


// ******************************
// AlgoLab Solution:
// ******************************
var defangIPaddr = function(address) {
	let ans = '';
	for (let ch of address) {
		if (Number.isInteger(parseInt(ch))) {
			ans += ch;
		} else {
			ans += '[.]';
		}
	}
	return ans;
};