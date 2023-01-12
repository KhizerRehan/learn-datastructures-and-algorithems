

// ******************************
// Khizer Accepted Solution
// ******************************

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length === 0 && t.length === 0) {
        return false
    }
    if(s.length !== t.length) {
        return false;
    }
    else{
        
        let isAnagram = true;
        const splitted = s.split("");
    
        for(let idx=0; idx<s.length; idx++) {
            if(!t.includes(splitted[idx])) {
                isAnagram = false;
              break;
            }
        }
        
        return isAnagram;
    }
    
    
};


// ******************************
// AlgoLab Solution:
// ******************************

var isAnagram = function(s, t) {
	if (s.length != t.length) {
		return false;
	}

	let counts = Array(26).fill(0);
	for (let i = 0; i < s.length; i++) {
		counts[s.charCodeAt(i) - 97]++;
		counts[t.charCodeAt(i) - 97]--;
	}

	for (let count of counts) {
		if (count != 0) {
			return false;
		}
	}

	return true;
};