var str1 = 'abcdefg';


//===== VERSION 1 ======

function reverseString(string) {
  return str1.split('').reverse().join('');
}


//===== VERSION 2 ======

function reverseString2(string) {

  let reversedString = '';
  
  for (i = string.length -1; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString;
}


// RESULTS

let result = reverseString2(str1);
console.log('Result', result);
console.assert(typeof result === 'string', 'String expected, not supplied');
console.assert(result == 'gfedcba', 'Result is incorrect');