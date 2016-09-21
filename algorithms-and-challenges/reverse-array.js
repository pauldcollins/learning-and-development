let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let reversedArray = new Array(arr.length);

for (let i = 0; i<arr.length/2; i++) {
  let tmp = arr[i];
  reversedArray[i] = arr[arr.length -i - 1];
  reversedArray[arr.length -i -1] = tmp;
}

console.assert(arr.reverse().toString() === reversedArray.toString())
