/*
 * Imagine, it's the year 2000! We don't have jQuery, or anything like it.
 * 
 * document.getElementById, className property.
 */

function addClass(element, newClass) {
  // // check if element is a string or HTML element
  if (typeof element !== HTMLElement && typeof element !== 'string')  {
    // if not return false
    return false;
    console.log('wrong type of data mate!');
  }

  // // if element is not a HTML element, we need to get DOM element
  if (typeof element !== HTMLElement) {
    element = document.getElementById(element);
  }  

  // if element has a class already
  if (element.className !== '') {
      // reattach it and add our new class
      element.className = `${element.className} ${newClass}`;
  // if element already has this class, no need to add it again    
  } else if (element.className.indexOf(newClass) !== -1) {
    return false;

  // if it doesn't have a class, attach our new one    
  } else {
    element.className = newClass;
  }
}

addClass('searchField', 'button');