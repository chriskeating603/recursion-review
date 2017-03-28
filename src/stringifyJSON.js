// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //string - return the object
  if (typeof obj === "string") {
    return '"' + obj + '"';
  }
  //number/bool/null/undefined - return the object + quotations
  else if (typeof obj === "number" || typeof obj === "boolean" || obj === null) {
    return ''+obj;
  } 
  //array - loop through, each value call on the stringifyJSON recursion
  else if (Array.isArray(obj)) {
    if (obj.length === 0) {
  	  return "[]";
  	} else {
  		var stringArray = [];
  		for (var i =0; i < obj.length; i++) {
  			stringArray.push(stringifyJSON(obj[i]));
  		}
  		return '[' + stringArray.join(',') + ']';
  	}
  }
  //obj - for in loop, call stringifyJSON on each key-value pair
  else if (obj instanceof Object) {
  	if (obj === {}) {
  		return '{}';
    } else {
    	var objProperties = [];
    	for (var key in obj) {
    	  if (typeof obj[key] === "function" || obj[key] === undefined) {
    		continue; 
    	  } else {
    	  	objProperties.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
    	  }
    	}
    	return '{' + objProperties.join(',') + '}';
    }
  }
};
