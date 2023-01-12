

// ******************************
// Khizer Accepted Solution:
// Description:
// ******************************

// **
// * @param {string} address
// * @return {string}
// */

var defangIPaddr = function(address) {
   let ans = '';
   for (let ch of address) {
       if (Number.isNaN(parseInt(ch))) {
           ans += '[.]';			
       } else {
           ans += ch;
       }
   }
   return ans;
};

// ******************************
// Khizer Accepted Solution:
// Description:
// ******************************


var defangIPaddr = function(address) {
	if(!address) {
        return '';
    }
    return address.replaceAll('.', '[.]'); // OR using regex address.replace(/\./g, '[.]')
};

// ******************************