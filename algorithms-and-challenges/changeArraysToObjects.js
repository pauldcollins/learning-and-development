const lodash = require("lodash");

const array = [
  ['John','Smith','johnsmith@gmail.com' ],
  ['Grace', 'Appleseed', 'gappleseed@gmail.com'],
  ['Bruce', 'Ruxton', 'bruce@ruxton.com']
]

// using forEach and building relying on fixed values
function convertToObjectsForEach(data) {
  let newArray = [];
  
  data.forEach((currentValue, index, array) => {
    
    let newObject = {
      firstName: currentValue[0],
      lastName: currentValue[1],
      email: currentValue[2]
    }
    
    newArray.push(newObject);
  })
  
  return newArray;
}

// using lodash
function convertToObjectsLodash(data) {
  let newArray = [];
  
  data.forEach((currentValue) => {
    newArray.push(lodash.zipObject(['firstName', 'lastName', 'email'], currentValue));
  });
  
  return newArray;
}

// using map
function convertToObjectsObjectAssign(data) {
  let newObject = {
    firstName: '',
    lastName: '',
    email: ''
  }
  data.forEach((currentValue, index, array) => {
    console.log(currentValue);
    let test = Object.assign(newObject, ...array);
    console.log(test);
  });                        
}

//console.log(convertToObjectsForEach(array));
//console.log(convertToObjectsLodash(array));
console.log(convertToObjectsObjectAssign(array));
