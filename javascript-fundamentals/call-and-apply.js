// ===== CALL & APPLY =======

// const instead of let?
// Singular or plural
const Crumpets = {
  // This seems like it could be a list of spreads? 
  spread1: 'Vegemite', // Default values should probably be assigned in constructor
  spread2: 'Honey', // Default values should probably be assigned in constructor
  
  // no constructor? Would be good if I could instantiate with a my spreads
  
  // This seems like it would returna  list of spreads [String], not a descriptive string
  allSpreads: function() {
    return ('I like my crumpets with ' + this.spread1 + ' and ' + this.spread2);
  },
  
  // Not sure what this is for
  soManySpreads: function(spreads /* [{}]*/) {
    // Iterate over spreads
    spreads.forEach(function(currentValue, index, arr) {
      console.log(this.allSpreads() + 'and ' + currentValue);
    }, this);
  }
}

// const or let?
const MoreSpreads = {
  spread1: 'Jam',
  spread2: 'Peanut Butter'
}

// const or let
// did you mean a single list of spread strings?
const spreadsArray = [
  {
    spread1: 'Chocolate',
    spread2: 'Tomato Sauce'
  },
  {
    spread1: 'Cheese',
    spread2: 'Butter'
  }  
]

//Crumpets.allSpreads.call(MoreSpreads);

Crumpets.soManySpreads(spreadsArray[0]);
Crumpets.soManySpreads(spreadsArray[1]);
// or for each loop