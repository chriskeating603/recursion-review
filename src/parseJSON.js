// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  //number
  if (json === '') {
    return '';
  }
  else if (isNaN(json) === false) {
    return parseInt(json);
  }
  //boolean
  else if (json === "true") {
    return true;
  } else if (json === "false") {
    return false;
  }
  //undefined
  else if (json === "undefined") {
    return undefined;
  }
  //null
  else if (json === "null") {
    return null;
  }
  //array
  else if (json[0] === "[" && json[json.length - 1] === "]") {
    return [];
  } else if (json[0] === "{" && json[json.length - 1] === "}") {
  	//delimit string by comma - to determine key-value pairs
  	var objProperties = json.slice(1, json.length -1).split(',');
  	//iterate through key-value pairs to set object keys and pairs
  	var obj = {};
  	for (var i = 0; i < objProperties.length; i++) {
  	  //var keyValueArray = objProperties[i].split(': ');
  	  //obj[keyValueArray[0]] = parseJSON(keyValueArray[1]);

      var colonIndex = objProperties[i].indexOf(':');
      var key = objProperties[i].slice(1,colonIndex - 1);
      console.log(key);
      var value = objProperties[i].slice(colonIndex+3,objProperties.length - 1);
      obj[key] = parseJSON(value);
  	}
    return obj;
  }
  //string
  else {
    return json;
  }
};