// // GET ALL ANAGRAMS STRING
function getAllAnagramsString(rest, soFar) {

    var next;
    var remaining;

    if (rest == '') {
        console.log(soFar);
    } else {

        for (var i = 0; i < rest.length; i++) {
            remaining = rest.substr(0,i) + rest.substr(i+1,rest.length-1);
            next = soFar + rest[i];

            getAllAnagramsString(remaining, next);
        }
    }   
}

console.log(getAllAnagramsString('Positive', ''));


// //http://www.graemeboy.com/string-permutations

// // GET ALL ANAGRAMS ARRAY
// function getAllAnagrams(word) {

// 	if (typeof word === 'string') {
// 		let anagramsArray = [];

// 		// if word is less than 2 characters, no need to process
// 		if (word.length < 2) {
// 			anagramsArray.push(word);

// 		// if word is more than two characters, find available anagrams	
// 		} else {			
// 			// loop through string and grab each letter in succession
// 			for (let i=0; i < word.length; i++) {				
// 				// get the shortened word and run through anagrams
// 				let shortenedWord = getAllAnagrams(word.substr(0, i) + word.substr(i+1, word.length-1));			

// 				// push single letter and shortened word to array
// 				for (let j=0; j < shortenedWord.length; j++) {
// 					anagramsArray.push(word[i] + shortenedWord[j]);
// 				}		
// 			}			
// 		}

// 		return anagramsArray;

// 	} else {
// 		console.log('I need a string mate!');
// 		return false;
// 	}
// }







// // OLD
// function getAllPermutations(word) {
// 	let permutationsArray = [];

// 	if (typeof word === 'string') {
// 		if (word.length < 2) {
// 			permutationsArray.push(word);
// 		} else {
// 			for (let i=0; i < word.length; i++) {
// 				let result = getAllPermutations(word.substr(0, i) + word.substr(i+1));
// 				for (let j=0; j < result.length; j++) {
// 					permutationsArray.push(word[i] + result[j]);
// 				}
// 			}
// 		}		
// 	} else {
// 		console.log('I need a string mate!');
// 		return false;
// 	}

// 	return permutationsArray;
// } 

// console.log(getAllPermutations('Positive'));

// console.assert(getAllPermutations('Positive') instanceof Array, 'Expected an Array');
// console.assert(getAllPermutations('Positive').length == 40320, 'Incorrect number of available permutations');
// console.assert(getAllPermutations(undefined || null) === false, 'Required a string as input');

// ==============

// // Is it guaranteed a string?
// // What happens if it's incorrect data, error checking?
// // Guaranteed only letters?

// function allAnagrams(word) {
// 	var anagramsArray = [];

// 	if (word.length < 2) {
// 		anagramsArray.push(word);
// 	} else {
// 		for (let i=0; i < word.length; i++) {
// 			var result = allAnagrams(word.substr(0, i) + word.substr(i+1));
// 			for (let j=0; j < result.length; j++) {
// 				anagramsArray.push(word[i] + result[j]);
// 			}
// 		}
// 	}

// 	return anagramsArray;
// }

// console.log(allAnagrams('positive'));



// 		// ====  SOLUTION 1 ====

// 		// for (var i = 0; i < word.length; i++) {

// 		// 	var letter = word[i];
// 		// 	var shortWord = word.substr(0, i) + word.substr(i+1, word.length -1);

// 		// 	var shortWordArray = allAnagrams(shortWord);

// 		// 	for (var j=0; j < shortWordArray.length; j++) {
// 		// 		anagramsArray.push(letter + shortWordArray[j]);
// 		// 	}
// 		// }

// 		// ====  SOLUTION 2 ====
		
//         for (var i=0; i < word.length; i++) {
//             var result = allAnagrams (word.substr(0, i) + word.substr(i+1));            
//             for (var j=0; j<result.length; j++) {
//                 anagramsArray.push(word[i] + result[j]);
//             }
//         }