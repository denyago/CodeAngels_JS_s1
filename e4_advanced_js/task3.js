String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

var AmendedPerson = function(args){
  var publicFunctions = {},
      _this           = this;

  for(var property in args){
    if (typeof args[property] == 'function') {
      publicFunctions[property] = args[property];
    } else {
      var getterName = 'get' + property.capitalize(),
          setterName = 'set' + property.capitalize();

      getter = (function(propertyName){
        return function() {
          return _this[propertyName];
        };
      })(property);

      setter = (function(propertyName){
        return function(val) {
          return _this[propertyName] = val;
        };
      })(property);

      _this[property]             = args[property];
      publicFunctions[getterName] = getter;
      publicFunctions[setterName] = setter;
    }
  }

  return publicFunctions;
};

var p = new AmendedPerson({
  name: 'Jack',
  age: '10',
  jump: function(){
    return "My name is " + this.getName() + " and I can jump.";
  }
});

console.log(p.getName()); // ‘Jack’
console.log(p.name);      // undefined
console.log(p.getAge());  // 10
console.log(p.age);       // undefined
console.log(p.jump());    // “My name is Jack and I can jump.”
console.log(p.getJump);   // undefined
console.log(p.setName('Di')); // ‘Di’
console.log(p.getName());     // ‘Di’
console.log(p.setAge(16));    // ‘16’
console.log(p.getAge());      // ‘16’
