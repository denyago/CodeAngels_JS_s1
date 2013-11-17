'use strict';

var getObject = function(pathString, obj) {
  var result = obj,
      path   = pathString.split('.');

  path.forEach(function(element){
    result = result[element];
    if (result == undefined) {
      return result;
    }
  });

  return result;
};

var o = {
  a: {
    b: 'c'
  }
};

console.log(getObject('a.b', o)); // ‘c’
console.log(getObject('a', o));   // {b: ‘c’}
console.log(getObject('d', o));   // undefined
