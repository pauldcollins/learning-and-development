// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// For example, given:

//  [1, 7, 3, 4]

// your function would return:

//  [84, 12, 28, 21]

// by calculating:

//  [7*3*4, 1*3*4, 1*7*4, 1*7*3]

function getProductsOfAllIntsExceptAtIndex(arg) {
    let result = [];
  
    // OLD CODE
//     arg.forEach((currentValue, index, array) => {
//       let eachResult = array.filter(value => value != currentValue)
//       .reduce((previousValue, currentValue) => previousValue * currentValue);
      
//       result.push(eachResult);
//     });
  
    // NEW CODE
    // the above example wasn't working when we had repeat values, as the filter would return nothing and therefor the reduce had nothing to process
    arg.forEach((currentValue, index, array) => {
      let eachResult = array.filter((value, filterIndex) => index != filterIndex)
      .reduce((previousValue, currentValue) => previousValue * currentValue);
      
      result.push(eachResult);
    });
  
    return result; 
}

var array = [1, 7, 3, 4];
console.log(getProductsOfAllIntsExceptAtIndex(array)); // should return [84, 12, 28, 21]

var array2 = [1, 1, 1, 1];
console.log(getProductsOfAllIntsExceptAtIndex(array2));


// INTERVIEW CAKE VERSION
//https://www.interviewcake.com/question/javascript/product-of-other-numbers

// function getProductsOfAllIntsExceptAtIndex(intArray) {

//     var productsOfAllIntsExceptAtIndex = [];

//     // for each integer, we find the product of all the integers
//     // before it, storing the total product so far each time
//     var productSoFar = 1;
//     for (var i = 0; i < intArray.length; i++) {
//         productsOfAllIntsExceptAtIndex[i] = productSoFar;
//         productSoFar *= intArray[i];
//     }

//     // for each integer, we find the product of all the integers
//     // after it. since each index in products already has the
//     // product of all the integers before it, now we're storing
//     // the total product of all other integers
//     productSoFar = 1;
//     for (var j = intArray.length - 1; j >= 0; j--) {
//         productsOfAllIntsExceptAtIndex[j] *= productSoFar;
//         productSoFar *= intArray[j];
//     }

//     return productsOfAllIntsExceptAtIndex;
// }