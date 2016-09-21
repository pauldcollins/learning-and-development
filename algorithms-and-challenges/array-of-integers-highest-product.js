// Given an arrayOfInts, find the highestProduct you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.

function getLargestSumOf3Integers(value) {
  const sortedArray = value.sort((a, b) => b-a)
  return sortedArray[0] * sortedArray[1] * sortedArray[2];
}

var array = [1, 4, 10, 5, 7, 6, 14, 9];
console.log(getLargestSumOf3Integers(array));

var array2 = [1, 10, -5, 1, -100];
console.log(getLargestSumOf3Integers(array2));