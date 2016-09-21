//
//
// Codebase with 350 commits
//
// One of the team members has just realised,,that the cpde is broken.
//
// Given that a function `isBadCommit(i)` exists that will return true/false 
// depending on whether the commit is good or bad, write an algorithm, that
// will find the first bad commit.
//

// Out of the commits, at least the first one is good...

// GIT BISECT
let commits = [0...349] // middle = Math.floor(349 / 2) => 174
// result = isBadCommit(commits[middle]) => true (
// stopIndex = middle
[0...174] // middle = Math.floor(174/2) => 87
// result = isBadCommit(commits[middle]) => false
// startIndex = middle + 1
[88...174] // middle = Math.floor(174 - 88/2) => 43

[90...92]

[91...92]
// bad commit is found when you can no longer divide by 2


const arrayToSearch = ["a","b","c","d","d","d","d","e","e","e","e","e","e","e","e","e","e"];

function isBad(array, searchValue) {
	// get start and stop index
	let startIndex = 0;	
	let stopIndex = array.length - 1;

	// get the middle of those indexes
	let middle = Math.floor((startIndex + stopIndex) / 2);

	// while start index has not reached the middle
	while (startIndex != middle) {

		// if search value is less than middle count down from end
		if (searchValue < array[middle]) {
			stopIndex = middle -1;

		// if search value is greater than middle, count up from start
		} else if (searchValue > array[middle]) {
			startIndex = middle +1;

		// if start index hasn't reached middle yet, make the stop index the middle
		} else if (startIndex != middle) {
			stopIndex = middle;
		}

		// recalculate middle 
		middle = Math.floor((startIndex + stopIndex)/2);
	}
		
	return middle;
}

console.log(isBad(arrayToSearch, "e"));
