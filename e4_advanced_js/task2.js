var Person = function(args){
  for(var property in args){
    this[property] = args[property];
  }
};

var p = new Person({
  name: 'Jack',
  age: '10',
  jump: function(){
    return "My name is " + this.name + " and I can jump.";
  }
});

console.log(p.name);   // ‘Jack’
console.log(p.age);    // 10
console.log(p.jump()); // “My name is Jack and I can jump.”
