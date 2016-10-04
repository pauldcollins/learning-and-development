var tuple = '(44, 5, 3, 6), (6, 2), (9, 3, 4), (1, 4, 5, 2)';

/**
 * Create an array from tuple
 * @param {string} tuple - tuple string to turn to array
 * @returns {array}
 */
function tupleToArray(tuple) {

  if (typeof tuple !== 'string') {
    throw new Error('Tuple must be a string');
  } 

  const splitTuple = tuple.split(',');
  const parentArray = [];
  let childArray = [];

  for (let i = 0; i < splitTuple.length; i++) {
    
    // if item starts with '(', remove it and start new child array
    if (splitTuple[i].includes('(')) {    
      splitTuple[i] = splitTuple[i].replace('(', '').trim();      
      childArray = [];            
    }
    
    // if item ends with ')', remove it and push child array to parent
    if (splitTuple[i].includes(')')) {
      splitTuple[i] = splitTuple[i].replace(')', '').trim();
      parentArray.push(childArray);
    } 
        
    childArray.push(splitTuple[i]);
  }
  
  return parentArray;
}

/**
 * Multiply elements in multiple arrays based on index
 * @param {array} array - array containing nested arrays of numbers
 * @param {integer} indexToMultiply - the number of the index item to use from each array
 * @returns {integer}  
 */
function arrayIndexMultiplier(array, indexToMultiply) {
  if (!array instanceof Array) {
    throw new Error('An array is needed to multiply');
  } 
  
  if (typeof indexToMultiply !== 'number') {
    throw new Error('Index to multiply must be an integer');
  }   
  
  return array.reduce(function(previousValue, currentItem) {  
    
    // if number doesn't exist in current array index, just make it "1"
    if (!currentItem[indexToMultiply]) { currentItem[indexToMultiply] = 1 }
    
    return previousValue * currentItem[indexToMultiply];
  }, 1);
}  

const tupleArray = tupleToArray(tuple);
console.log(arrayIndexMultiplier(tupleArray, 0));
