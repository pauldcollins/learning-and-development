var a = 10;

//
var b = 5;
var c = b;
var c = 10;

var d* = 0x998BB // => THE HEAP ( 0x998BBA: { name: 'Ryan' } );



// String, int, double, bool, Symbol, Point, null, undefined
//

// Memory lookup table
//
//  b:  0xFF0000: 5 (line 4)
//  c:  0xFF4455: 5 (line 5)
//  c:  0xFF4455: 10 (line 6)
//  d:  0x457375: 0x998BBA (this points to the heap)



// 1. C++ looks var b.
// 2. Find 0xFF0000
// 3. What value is in this memory location. "5"
// 4. Takes var c's memory location and assigns 5 to it.


function myFunction() {
  var a = 10;
  var b = 20;
  var c = { name: 'Ryan' };

  myOtherFunction(c);

}

function myOtherFunction(obj) {
  window.someObj = obj*;
}

// Executing...
myFunction() // which in turn calls myOtherFunction)

// myFunction Stack while executing
[
  a (0xFF0000: 5),
  b (0xDDD445: 10),
  c (0xDDD445: 0xFF4499)
]

// myOtherFunction Stack while executing
[]
// window.someObj : 0xFF4499

// HEAP ( 0xFF4499 => { name: 'Ryan' } )

// Garbage Collection Source Code
references = {
  // Key: Memory location
  // Value: Number of references
}

references.0xDDD445 = 1 // when c is declared
references.0xDDD445 = 2 // when `myOtherFunction` is executing
references.0xDDD445 = 1 // when both functions are done because now, we only have window.someObj
references.0xDDD445 = 0 // window.someObj = null

// Some code that randomly executes ever n milliseconds
// Cleanup routine
for key, value in references {
  if value == 0 {
    references.removeKey(key)
    removeFromHeap(key)
  }
}


// When `myFunction` is finished.
[]

// HEAP ( 0xFF4499 => { name: 'Ryan' } )
// window.someObj : 0xFF4499

window.someObj = null;

// HEAP ( )

var persons = [];
var person = { name: 'Ryan' };
persons.push(person);

var personDOMElement = document.getElementById('person1');
var personDOMElement.person = person;

// Some time later, we delete this person
persons.deleteAtIndex(0); // Delete person, but peson will still be on heap due to `personDOMElement` ownership.