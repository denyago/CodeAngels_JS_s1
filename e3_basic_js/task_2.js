'use strict';

var deepCopy = function (object) {
  var member,
      clone = {};

  for(member in object) {
    if (typeof object[member] == 'object') {
      clone[member] = deepCopy(object[member]);
    } else {
      clone[member] = object[member];
    }
  }

  return clone;
};

// trololo... I can search StackOverflow!
var otherDeepCopy = function (object) {
  return JSON.parse(JSON.stringify(object));
};

var c,
    b,
    a = {
      b: 'c',
      d: {
        e: 'f'
      }
    };

b = deepCopy(a);
c = otherDeepCopy(a);
a.d = 12;

console.log('Recursive:', b.d); // {e: ‘f’}
console.log('JSON way:',  c.d); // {e: ‘f’}
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

