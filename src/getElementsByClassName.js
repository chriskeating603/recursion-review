// // If life was easy, we could just do things the easy way:
// // var getElementsByClassName = function (className) {
// //   return document.getElementsByClassName(className);
// // };

// // But instead we're going to implement it from scratch:

var getElementsByClassName = function (className) {
  var results = [];
  var searchNode = function (className, element) {
    if (element.classList !== undefined && element.classList.contains(className)) {
      results.push(element)
    }
    if (element.childNodes) {
      for (var i = 0; i < element.childNodes.length; i++) {
      	searchNode(className, element.childNodes[i]);
      }
    }
  }
  searchNode(className, document.body)
  return results;
}