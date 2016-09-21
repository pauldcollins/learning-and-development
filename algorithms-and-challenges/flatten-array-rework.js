(function() {

	let myArray = [[{"_id":"55064111d06b96d974937a6f","title":"Generic Title","shortname":"generic-title","contents":"<p>The Healing Center offers practical, social, and spiritual support to individuals and families. Services include, but are not limited to: food and clothing, job skills training and job search assistance, auto repair (Saturdays only), mentoring, financial counseling, tutoring, prayer, life skills training, and helpful information about local community services.</p><p>Stay in touch with us:</p>","__v":0},{"_id":"5508e1405c621d4aad2d2969","title":"test english","shortname":"test-page","contents":"<h2>English Test</h2>","__v":0}],[{"_id":"550b336f33a326aaee84f883","shortname":"ok-url","title":"now english","contents":"<p>okokko</p>","category":"Transportation","__v":0}]]
	let myArray2 = [
		10,
		20,
		[30,
			[40],
			{test:'string'},
			undefined,

		],
	50];	

	function flattenArray(arr) {
		let itemsArray = [];
		let i = 0;
		let test = arr;

		while (test[i]) {		
			itemsArray = test.concat(arr[i]);
			i++;
		}

		return itemsArray;
	}
	//function flattenArray(arr) {
	  // return arr.reduce(function (flat, toFlatten) {
	  //   return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
	  // }, []);	
	// }

	// function flattenArray(input, newArray) {
		// // if returning an array, we need to start with a new one
		// let itemsArray = newArray || [];		

		// if (input instanceof Array) {
		// 	for (let i = 0; i < input.length; i++) {
		// 		flattenArray(input[i], itemsArray);	
		// 	}
		// } else {
		// 	itemsArray.push(input);
		// }
		
		// // 4. return the resulting array
		// return itemsArray;
	// }

	//let arrayTest1 = flattenArray([[1], [2], [[3]]]);
	let arrayTest1 = flattenArray(myArray2);
	console.log(arrayTest1);

	console.assert(flattenArray([[1], [2], [[3]]]) instanceof Array, 'Expect result to be array');
	//console.assert(flattenArray(myArray2) == [10, 20, 30, 40, Object, undefined, 50], 'Expect result to be flattened array');

})();