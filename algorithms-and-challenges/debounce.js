(function() {

	// find the dom element 
	let searchItem = document.getElementById('searchField');

	// add event listener for keydown, attach function
	searchItem.addEventListener('keydown', search);

	// declare a variable to store the timeout
	let lastTimeTyped;

	// search function
	function search() {
		
		// check if timeout has already been called, if it has, clear it and start again
		if (typeof lastTimeTyped !== 'undefined') {
			clearTimeout(lastTimeTyped);
		}

		// assign timeout to last time typed
		lastTimeTyped = setTimeout(function() {
			console.log(searchItem.value);
		}, 400);
	}

})();