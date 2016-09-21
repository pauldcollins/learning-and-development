

// create an array with ID, firstName, lastName
const memberArray = [
  {id: 1, firstName: 'John', lastName: 'Doe'},
  {id: 2, firstName: 'Bruce', lastName: 'Lee'},
  {id: 3, firstName: 'Penny', lastName: 'Drop'},
  {id: 4, firstName: 'Jake', lastName: 'Law'}
]

const ratingsArray = [
  {id: 1, rating: 3.4},
  {id: 2},
  {id: 3, rating: 1.3},
  {id: 4, rating: 4.8}
]


// First, filter out the objects without ratings
let getMembersWhoRated = ratingsArray.filter(elem => elem.rating !== undefined);

// get names of members who voted
let membersWhoVoted = () => {
  let idsOfMembersWhoRated = getMembersWhoRated.map(elem => elem.id);
  
  let findMemberById = memberArray.filter(elem => idsOfMembersWhoRated.indexOf(elem.id) !== -1)
    .map(elem => `${elem.firstName} ${elem.lastName},`);
  
  return findMemberById;
}

console.log('Members who voted: ', ...membersWhoVoted());

// get the average rating by using reduce
let averageRating = ratingsArray.filter( el => el.rating).reduce((prev, el) => (prev + el.rating)/2, 0);
console.log('Average rating: ' + (Math.round(averageRating * 2) / 2).toFixed(1));

// TODO: remove comma after last member name 
// LET'S TALK ABOUT EXTRAS POINTS IN THE ARTICLE!!
