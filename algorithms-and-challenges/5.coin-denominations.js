//https://www.interviewcake.com/question/javascript/coin

// Example: for amount=44 (44¢) and denominations=[1,2,3][1,2,3] (11¢, 22¢ and 33¢), your program would output 44—the number of ways to make 44¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

// @param {string} amount - amount we want to calculate
// @param {array} denominations - the different denominations of currency we need to calculate
// function waysToMakeSomeMoney(amount, denominations) {
//   let numberOfPossibilities = [];
  
//   denominations.forEach(denomination => {
//     numberOfPossibilities += Math.floor(amount / denomination);
//   });
  
//   console.log(numberOfPossibilities);
// }


// console.assert(waysToMakeSomeMoney('4', [1,2,3]) === [])
function product1ToN(n) {
    // we assume n >= 1
    var result = 1;
    for (var num = 1; num <= n; num++) {
        result *= num;
        console.log(result);
    }
    return result;
}

product1ToN(100);