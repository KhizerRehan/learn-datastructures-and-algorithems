// ---------------------------------------------------
// Solution: KhizerRehan
// ---------------------------------------------------
var isValid = function(s) {

  var stack = [];

  const pairMatch = {
    ")": "(",
    "}": "{",
    "]": "["
  }

  debugger;
  if (s.length === 0) {
    return true
    // incase string is "" 
  }
  if (s.length % 2 !== 0) {
    return false;
    // unequal string length
  }

  for (let i = 0; i < s.length; i++) {
    debugger;
    if (['[', '(', '{'].includes(s[i])) {
      stack.push(s[i])
    } else if (stack.length == 0) {
      return false
    } else if (pairMatch[s[i]] == stack[stack.length - 1]) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length === 0 ? true : false;

}
// ---------------------------------------------------
// Solution: 
https://leetcode.com/problems/valid-parentheses/discuss/1454543/Simple-JS-Solution
// ---------------------------------------------------

var isValid = function (s) {
    let stack = [];
    let map = {
      "(": ")",
      "[": "]",
      "{": "}",
    };
    let i = 0;
    while (i < s.length) {
      if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
        stack.push(s[i]);
      } else {
        // console.log(map[stack.pop()], s[i]);
        if (map[stack.pop()] !== s[i]) return false;
      }
      i++;
    }
    return stack.length === 0;
  };

  // ---------------------------------------------------
// Solution: 
https://leetcode.com/problems/valid-parentheses/discuss/1441314/Javascript-60ms-faster-than-99.56-simple-solution-(stack)
// ---------------------------------------------------

var isValid = function(s) {
	// To be valid, the string needs to contain PAIRS of values. Therefore, if the string is not divisible by two, it can't be valid.
    if(s.length % 2 !== 0) return false;
    
    let map = new Map();
    map.set('(', ')')
       .set('[', ']')
       .set('{', '}');
    
    let stack = [];

    for(let i = 0; i < s.length; i++){
	// If the map has '(' , '[' , or '{'
        if(map.has(s[i])){
            stack.push(s[i]);
    // If s[i] is ')' , ']' , or '}' get the value from the top of the stack. If the value on the top of the stack corresponds to s[i] , pop the top value from the stack.
        } else if(map.get(stack[stack.length - 1]) === s[i]){
            stack.pop();    
	// If s[i] is neither an opening value, nor a closing value that corresponds to the top of the stack, the string is not valid.
        } else return false;
    }
    
	// If the stack is empty after all values have been iterated through, the string is valid.
    return stack.length === 0;
};

  // ---------------------------------------------------
// Solution: 
https://leetcode.com/problems/valid-parentheses/discuss/1434974/simple-stack-based-solution-using-javascript
// ---------------------------------------------------

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = []
    const map = new Map()
    map.set("(", ")")
    map.set("{", "}")
    map.set("[", "]")
    
    for (element of s) {
        if (map.has(element)) { // open
            stack.push(element)
        } else {                            // close
            const lastOpen = stack.pop()
            if (element !== map.get(lastOpen)) {
                return false
            }
        }
    }
    
    return stack.length ? false : true
};


  // ---------------------------------------------------
// Solution: 
https://leetcode.com/problems/valid-parentheses/discuss/1416885/Very-Easy-JS-solution-and-easy-to-understand
// ---------------------------------------------------
var isValid = function(s) {
    const arr = [];
    const obj = {
    "{" : "}",
    "[": "]",
    "(": ")"
    }
  for(let i = 0; i < s.length; i++){
    if(obj.hasOwnProperty(s[i])){
      arr.push(s[i])
    }else {
      if(obj[arr[arr.length - 1]] == s[i]) {
        arr.pop()
      }else {
        return false;
      }
    }   
  }
    
    return arr.length == 0 ? true : false
};

// ---------------------------------------------------
// Solution: 
https://leetcode.com/problems/valid-parentheses/discuss/1293933/Simplest-JS-solution-O(n)time-and-space-Beats-99.95
// ---------------------------------------------------

var isValid = function(s) {
    let stack = []
    
    let map = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]]) {
            stack.push(map[s[i]])
        } else {
            if(s[i] !== stack.pop()) return false
        }
    }
    
    return stack.length === 0
};


// ---------------------------------------------------
// Solution: 
https://leetcode.com/problems/valid-parentheses/discuss/1234547/Javascript-Stack
// ---------------------------------------------------

function isClosingChar(char) {
    return char === '}' || char === ')' || char === ']';
}

function matchingClosingChar(startingChar) {
    let char;
    
    switch(startingChar) {
        case '(' : char = ')'; break;
        case '[' : char = ']'; break;
        case '{' : char = '}'; break;
    }
    
    return char;
}

var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (isClosingChar(s[i])) {
            if (!stack.length) return false;
            if (stack[stack.length - 1] !== s[i]) return false;
            stack.pop();
        } else {
            stack.push(matchingClosingChar(s[i]));   
        } 
    }
    
    return stack.length === 0;
};


// ---------------------------------------------------
// Solution: 
https://leetcode.com/problems/valid-parentheses/discuss/1190887/Another-Map-Solution.-Stack
// ---------------------------------------------------
function ValidateParenthesis(string) {
	const brackets = {
		"]": "[",
		")": "(",
		"}": "{",
	}

	const stack = []

	for (char of string.split("")) {
		if (char == "[" || char == "(" || char == "{") stack.unshift(char)
		if (char == "]" || char == ")" || char == "}") {
			if (brackets[char] !== stack[0]) return false
			else stack.shift()
		}
	}
	if (stack.length > 0) return false
	return true
}



// ---------------------------------------------------
// Solution: 
https://leetcode.com/problems/valid-parentheses/discuss/1175778/Clear-JS-solution-with-a-mapping-object
// ---------------------------------------------------


/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const maps = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    const opners = Object.values(maps);
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if (opners.includes(c)) {
            stack.push(c);
            continue;
        }
        
        const last = stack.pop();
        
        if (maps[c] && last !== maps[c]) return false;        
    }

    return stack.length === 0;
};

// ---------------------------------------------------
// Solution: 
https://leetcode.com/problems/valid-parentheses/discuss/1108171/JavaScript-Solution
// ---------------------------------------------------

var isValid = function (s) {
    const stack = [];
    const complement = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
  
    for (let char of s) {
      if (!complement[char]) stack.push(char);
      else if (stack.pop() !== complement[char]) return false;
    }
    return stack.length === 0;
  };


// ---------------------------------------------------
// Solution: 
https://leetcode.com/problems/valid-parentheses/discuss/1026906/JavaScript-TypeScript-Solution
// ---------------------------------------------------
var isValid = function (s) {
    const hash = {
      '(': ')',
      '{': '}',
      '[': ']',
    };
  
    const stack = [];
  
    for (const char of s) {
      if (char in hash) stack.push(char);
      else {
        const top = stack.pop();
        if (top === undefined || hash[top] !== char) {
          return false;
        }
      }
    }
  
    return !stack.length;
  };

// ---------------------------------------------------
// Solution: 
https://leetcode.com/problems/valid-parentheses/discuss/1025805/JavaScript-Elegant-Stack-Solution
// ---------------------------------------------------
  
var isValid = function(s) {
    const stack = [];
    const map = {
        ')': '(', 
        '}': '{', 
        ']': '['
    }
    
    for(let p of s) {
        if(['(', '{', '['].includes(p)) stack.push(p);
        else if(map[p] !== stack.pop()) return false;
    }
    return stack.length === 0;
};


// Continuation:
// https://leetcode.com/problems/valid-parentheses/discuss/?currentPage=5&orderBy=hot&query=&tag=javascript

