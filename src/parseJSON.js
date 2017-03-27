// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (json[0] === "[" && json[json.length - 1] === "]") {
    return [];
  } else if (json[0] === "{" && json[json.length - 1] === "}") {
  	//delimit string by comma - to determine key-value pairs
  	var objProperties = json.slice(1, json.length -1).split(',');
  	console.log(objProperties);
  	//iterate through key-value pairs to set object keys and pairs
  	var obj = {};
  	for (var i = 0; i < objProperties.length; i++) {
  	  console.log(objProperties[i]);
  	  var keyValue = objProperties[i].split(': ');
  	  console.log(keyValue);
  	  obj[keyValue[0]] = keyValue[1];
	
  	}
  }

};
