(function() {
  'use stict';

  var person = {
      firstName: "Penelope",
      lastName: "Barrymore",
      fullName: function () {
          // Notice we use "this" just as we used "he" in the example sentence earlier?:
          console.log(this.firstName + " " + this.lastName);
      }
  };

  var anotherPerson = {
    firstName: "Paul",
    lastName: "Collins"
  };
  
  
// person.fullName.call(anotherPerson);
  
var Person = {
  create: function(firstName, lastName) {
      // New school method is to take a person.prototype and use Object.create.
      // One of the issues here, is that there is no type information associated.

     // We're not using `this`. Therefore, the context has absolutely no effect on this function!
    
      return {
        firstName: firstName,
        lastName: lastName,

        // fullName's "default - instance.fullName()_" context is this returned object.
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      };
  }
}


// 1. Take the fullName function that is "attached" to p1.
// 2. Execute the fullName  function, with the context (aka `this`) p1.

// Create another person object, using call
var p1 = Person.create('James', 'Brown');
var p1 = Person.create.call(Person, 'James', 'Brown');
p1.fullName();  

// What will this return?
// console.log(p1.fullName.call(null));
  
var p2 = Person.create('Paul', 'Rudd')
console.log(p2.fullName.call(p1)); // => James Brown
  
var exPM = {
  firstName: 'Kevin',
  lastName: 'Rudd'
};

console.log(p1.fullName.call(exPM)); // Kevin Rudd
  
console.log(p1.fullName.call({ firstName: 'Kanye', lastName: 'West'}));
    
function fullName() {
  return this.firstName + " " + this.lastName;
}
  
// How can you use the standalone version of `fullName` to produce `Steve Jobs`.
console.log(fullName.call({firstName: 'Steve', lastName: 'Jobs'}));

$('p').on('click', function(e) {
  console.log(this); // this is some <p> DOM element

// jQuery pseudo code...
var callbacks = [func1];
// p gets clicked
var p = DOMElement;
var eventObject = DOMEvent;
  for callback in callbacks {
  callback.call(p, eventObject);
}
  
// Starting explorations into apply
var p3 = Person.create.call(Person, 'Matt', 'Damon');
var p4 = Person.create.apply(Person, ['Matt', 'Damon']);

var celia = 5;
var doug = 3;
var max = 6;  

var studentAges = [celia, doug, max];

Math.min(celia, doug, max) /* is the same as */ Math.min.apply(null, studentAges);
  
// And .bind...

  
// Good algorithm questions
// 1. Binary Search
// 2. FizzBuzz
// 3. Reverse a string using plain JS. Then, improve effiency.
// 4. Write an implementation of Object.keys.  

})();
