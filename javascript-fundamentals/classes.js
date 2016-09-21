var _ = require('underscore')

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);


/* 
Your previous Haskell content is preserved below:

var _ = require('underscore')

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);

 */

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

// $('p').on('click', function(e) {
//   console.log(this); // this is some <p> DOM element
// });

// jQuery pseudo code...
// var callbacks = [func1];
// // p gets clicked
// var p = DOMElement;
// var eventObject = DOMEvent;
//   for callback in callbacks {
//   callback.call(p, eventObject);
// }
  
// Starting explorations into apply
var p3 = Person.create.call(Person, 'Matt', 'Damon');
var p4 = Person.create.apply(Person, ['Matt', 'Damon']);

var celia = 5;
var doug = 3;
var max = 6;  

var studentAges = [celia, doug, max];

// Math.min(celia, doug, max) /* is the same as */ Math.min.apply(null, studentAges);

console.log('\n\n--\n\n')   ;
   
// Classes
  
class Dog {
  constructor (name) {
    this.name = name;
  }
  
  woof() {
    return 'Woof! My name is ' + this.name;
  }
}  
   
let d = new Dog('Fido');
// 1. Allocate a new Object for d {}
// 2. Take the prototype from Dog (constructor method, woof method) and we set it to be the d's prototype (d's prototype references Dog's prototype).
// 3. We execute the `constructor`
// 4. return the object to d
console.log(d.woof());
console.log(d.wagTail);

// We can dynamically affect any instances of Dog at any time because of every instance's reference
// to Dog's prototype object.
Dog.prototype.wagTail = function() {
  console.log(this.name + ' wags tail.');
} 

d.wagTail();
   
// Mix-ins
// Take multiple objects, create a new prototype by mixing each of the objects protypes together into a single object.

var logger = {
  log: function(message) {
    console.log(message)
  }
};
   
let counter = 10;
counter.toString();
   
let list = [1,2,3];
list.length; // Object oriented version
// lenth(list) = functional version


// Real world example of static methods
// Product model   
class Product {
  constructor (id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  
  description () {
    // return `${this.name} - $${this.price}`;
    return this.name + " $" + this.price;
  }
  
  save() {
    // Going to need the `id`
  }
  
  delete() {
    // Going to need the `id`
  }
  
  static findAll() {
    // Because it's static, it can't access any instance information.
    // This function needs to be standalone, or use other static functions
    return [/*Product*/];
  }
};



let shampoo = new Product(1, 'Shampoo', 95.00);
console.log(shampoo.description());

let conditioner = new Product(2, 'Conditioner', 99.00);   
console.log(conditioner.description());

let products = Product.findAll();


// Ways of defining an Object APIU in JS (not every possibility!)
// React.create({});

// var React = {
//   create: function() {}
// };

// var React = {};

// React.create = function() {
// };

// function React() {
//   // initialisation
// }

// React.prototype.create = function() {
// };

 
// What the API for querying for prouducts?
// class ProductAPI {
//   // no state...
//   static all(arg1, arg2) {
//     return [/*Product*/]
//   }
// }
   
// let products = ProductAPI.all();
   
   
// And .bind...

class ParagraphClicker {
  constructor () {
    this.numberParagraphsClicked = 0;

    // Version 1.
    var self = this
    $('p').on('click', function(event) {
       self. onParagraphClick(event);
    });

    // Version 2.
    $('p').on('click', this.onParagraphClick.bind(this) );
  
    // Version 3.
    $('p').on('click', (event) => this.onParagraphClick(event) );

    // 1. We pass this.onParagraphClick function ref to bind
    // 2. Bind, passes back a function that will execute in the context we pass it (this)
    // 3. When jQuery, executes our callback, it executes the function reference (from bind) in
    // the context of the p element/
    // 4. The function returned bind is hard coded to execute in the context we originally passed it (this)
  }

  onParagraphClick(event) {
    console.log('A paragraph was clicked', this, event);
    this.numberParagraphsClicked += 1;
  }
};

// Usage
let pClicker = new ParagraphClicker();



// Good algorithm questions
// 1. Binary Search
// 2. FizzBuzz
// 3. Reverse a string using plain JS. Then, improve effiency.
// 4. Write an implementation of Object.keys.  


