
// CHALLENGE: Find all posible combinations of denominations to make up a given amount
// For EG: how many combinations of 1c, 2c & 5c can you use to make $1 dollar


//  ============== BOTTOM UP ALGORITHM SOLUTION =================

// Taken from Interview Cake: https://www.interviewcake.com/question/javascript/coin

function changePossibilitiesBottomUp(amount, denominations) {

    // intialize an array of zeros with indices up to amount
    var waysOfDoingNcents = [];
    for (var i = 0; i <= amount; i++) {
        waysOfDoingNcents[i] = 0;
    }
    waysOfDoingNcents[0] = 1;

    for (var j = 0; j < denominations.length; j++) {
        var coin = denominations[j];
        for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
            var higherAmountRemainder = higherAmount - coin;
            waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
        }
    }

    return waysOfDoingNcents[amount];
}


//  ============== DYNAMIC PROGRAMMING SOLUTION =================

// Take from: http://codeoverdose.com/category/javascript/

function coinPermutations(total){

    var cLen = coins.length,
    matrix = Array(cLen),
    mLen = matrix.length,
    prevPerms;

    for(var x = 0; x <= mLen; x++){
        matrix[x] = Array(total+1);
    }

    for(var z = 0; z <= mLen; z++){
        matrix[z][0] = 1;
    }

    //now the fun starts!
    for(var a = 1; a <= cLen; a++){
      for(var b = 1; b <= total; b++){
        matrix[0][b] = 0;
        prevPerms = matrix[a-1][b];
        prevPerms += coins[a-1] <= b ? matrix[a][b-coins[a-1]] : 0;
        matrix[a][b] = prevPerms;
      }
    }
    return matrix[cLen][total];
}

var coins = [1,2,5];
console.log(coinPermutations(50)); // returns 146


//  ============== RECURSIVE SOLUTION =================


/** 
*	@param {integer} numberOfCoins
* 	@returns {integer} how many combinations there are
*   @ only works out combinations of 1,2 or 3
*/
function countCoins(numberOfCoins) {
	// TODO: if we only have stair, just return number
	// TODO: if not an integer, return false, or throw an error

	if (numberOfCoins < 0) {
		return 0
	} else if (numberOfCoins === 0) {
		return 1
	}
	
	// call the function again with that remainder
	return countCoins(numberOfCoins -1) + countCoins(numberOfCoins -2) + countCoins(numberOfCoins -3);
}


//  ============== FUNCTIONAL PROGRAMMING SOLUTION (In progress) =================

/** 
* @param {string} amount - amount we want to calculate
* @param {array} denominations - the different denominations of currency we need to calculate
*/
function waysToMakeSomeMoney(amount, denominations) {
  let numberOfPossibilities = [];
  
  denominations.forEach(denomination => {
    numberOfPossibilities += Math.floor(amount / denomination);
  }).reduce(() => ;
  
  console.log(numberOfPossibilities);
}

console.log(waysToMakeSomeMoney('4', [1,2,3]));
