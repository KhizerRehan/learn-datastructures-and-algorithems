// -------------------------------------
// To LowerCase Example:
// -------------------------------------
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    return str.toLowerCase()
};


var toLowerCase = function(str) {
    let res = "";
    
    for (let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i);
		
		// The ascii value from 65 to 90 represent the uppercase alphabet A to Z.
		// While, the ascii value from 97 to 122 represent the lowercase alphabet a to z.
		// By adding 32 to the ascii value, we are converting it to lowercase.
        if (ascii >= 65 && ascii <= 90) res += String.fromCharCode(ascii + 32);
        else res += str.charAt(i);
    }
    
    return res;
};

// Using Map:
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    const map = new Map([
        ['A', 'a'],
        ['B', 'b'],
        ['C', 'c'],
        ['D', 'd'],
        ['E', 'e'],
        ['F', 'f'],
        ['G', 'g'],
        ['H', 'h'],
        ['I', 'i'],
        ['J', 'j'],
        ['K', 'k'],
        ['L', 'l'],
        ['M', 'm'],
        ['N', 'n'],
        ['O', 'o'],
        ['P', 'p'],
        ['Q', 'q'],
        ['R', 'r'],
        ['S', 's'],
        ['T', 't'],
        ['U', 'u'],
        ['V', 'v'],
        ['W', 'w'],
        ['X', 'x'],
        ['Y', 'y'],
        ['Z', 'z'],
    ])
    let finalStr = '';
    for (let i = 0; i < str.length; i++) {
        finalStr += map.get(str[i]) || str[i]
    }
    return finalStr;
};


// 2. Char-Code table

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let finalStr = '';
    for (let i = 0; i < str.length; i++) {
        finalStr += (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91)
                        ? String.fromCharCode(str.charCodeAt(i) + 32)
                        : str[i];
    }
    return finalStr;
};

var toLowerCase = function(str) {
    if(!str) {return;}
    var charArray = str.split('');
    
    var lowerCaseCharArray = charArray.map(char => {
        var asciiChar = char.charCodeAt(0);
        if (asciiChar > 64 && asciiChar < 91) {
           asciiChar += 32;
        }
        return String.fromCharCode(asciiChar);
    });
    
    return lowerCaseCharArray.join('', ',').toString();
};

// -------------------------------------