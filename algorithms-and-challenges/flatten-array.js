(function() {

	let myArray = [[{"_id":"55064111d06b96d974937a6f","title":"Generic Title","shortname":"generic-title","contents":"<p>The Healing Center offers practical, social, and spiritual support to individuals and families. Services include, but are not limited to: food and clothing, job skills training and job search assistance, auto repair (Saturdays only), mentoring, financial counseling, tutoring, prayer, life skills training, and helpful information about local community services.</p><p>Stay in touch with us:</p>","__v":0},{"_id":"5508e1405c621d4aad2d2969","title":"test english","shortname":"test-page","contents":"<h2>English Test</h2>","__v":0}],[{"_id":"550b336f33a326aaee84f883","shortname":"ok-url","title":"now english","contents":"<p>okokko</p>","category":"Transportation","__v":0}]]
	let myArray2 = [10, 20, [30, [40], {test:'string'}, undefined,], 50]

	function flatten(arr) {  
	  let result = [];
	  
	  if (!arr instanceof Array) { return false }
	                         
	  for (let i=0; i < arr.length; i++) {
	    if (arr[i] instanceof Array) {  
	      result = result.concat(flatten(arr[i]));
	    } else {
	      result.push(arr[i]);
	    }
	  }
	  
	  return result;
	}

	let result = flatten(myArray2);
	console.log(result);

})();