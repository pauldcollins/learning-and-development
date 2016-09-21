function reposition(arr, indices) {

	if (arr instanceof Array === false || indices instanceof Array === false) {
		return false;
	}

	// want to get what index each number is in indices
	return indices.map(function(item, index) {
		// push the letter that matches the same index
		return arr[indices.indexOf(index)];
	});

	// for loop 
	// let newArray = [];

	// for (i=0; i<indices.length; i++) {
	// 	var item = indices.indexOf(i);
	// 	newArray.push(arr[item]);
	// }

	// return newArray; 
}

var arr = 	  ["a", "b", "c", "d", "e", "f"];
var indices = [2, 3, 4, 0, 5, 1];

console.log(reposition(arr, indices));

console.assert(reposition(arr, indices) instanceof Array, 'Returns Array');
console.assert(reposition(arr, indices).toString() == [ 'd', 'f', 'a', 'b', 'c', 'e' ].toString() , 'Expect result returned');


// returns: ["d", "f", "a", "b", "c", "e"]