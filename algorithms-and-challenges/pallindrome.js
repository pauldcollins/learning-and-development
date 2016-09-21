// Requirements
// Implement a `isPalindrome` function in pure JS.
// No arrays.
// Must always return a boolean
// handle if not string

function isPalindrome(input) {
  // if it's not a string, return false
  if (typeof input !== 'string') { return false }; 

  // remove spaces and change to lowercase
  input = input.replace(/ /g,'').toLowerCase();
  let endIndex = input.length -1;

  // loop through input until we get to middle 
  for (i=0; i<input.length/2; i++) {

    // compare values at each end of string, working in
    if (input[i] !== input[endIndex]) {
      return false;
    }

    // move backwards on index
    endIndex --;
  }

  return true;
}

console.assert(isPalindrome('r8cec8r') === true, 'r8cec8r is a palindrome');
console.assert(isPalindrome('r8cecar') === false, 'r8cecar is not a palindrome');
console.assert(isPalindrome('byt') === false, 'byt is not a palindrome');
console.assert(isPalindrome('ana') === true, 'ana is a palindrome');
console.assert(isPalindrome('race car') === true, 'racecar is a palindrome');
console.assert(isPalindrome(['race car']) === false, '[race car] is not a palindrome');



// //==== RYAN'S EDITS =======

// // Requirements
// // Implement a `isPalindrome` function in pure JS.
// // No arrays.
// // Must always return a boolean
// // handle if not string
// // Deosn't handle unicode at all



// I've simplified this and will explain how you can find the failing test through Dev Tools
console.assert(isPalindrome('Anna'));
console.assert(isPalindrome('an\tna'));
console.assert(isPalindrome('r8c ec8r'));
console.assert(!isPalindrome('r8cecar'));
console.assert(!isPalindrome('byt'));
console.assert(isPalindrome('ana'));
console.assert(isPalindrome('race car'));
console.assert(!isPalindrome(['race car']));
console.assert(isPalindrome('kayak'));