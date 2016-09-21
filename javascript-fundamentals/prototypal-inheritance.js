
// ===== PROTOTYPAL INHERITANCE =======

// Create a new version `Tea` using Classes instead

function Coffee(additive) {
  // When the constructor is running, the interpreter has already created a fresh object
  // and set the prototype of that object to match the prototype of the constructor.
  // {}
  this.additive = additive;
   // { additive: VALUE FOR additive };
}

// Is `makeAdditive` the best function name?
Coffee.prototype.makeAdditive = function() {
  // FIXME: What if I didn't supply an additive. How should the message change?
  console.log('I like my coffee with ' + this.additive);
}

var coffee = new Coffee('Milk');
