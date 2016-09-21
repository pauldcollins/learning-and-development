class MovieReview {
  /**
   * @param {String} name
   * @param {[Member]} members
   * @param {[Ratings]} ratings
   */
  constructor(name, members, ratings) {
    this.name = name;
    // TODO: Check that all elements in members are of type `Member`, throw exception if not
    this.members = members;

    // Check that all elements in members are of type `Rating`, throw exception if not
    this.ratings = ratings;
  }
 
  getMembersVoted() {  
   let idsOfMembersWhoRated = this.ratings.map(elem => elem.id);
   return this.members.filter(elem => idsOfMembersWhoRated.indexOf(elem.id) !== -1)
    .map(elem => `${elem.firstName} ${elem.lastName}`);  
  }

  getRating() {
    return ratings.filter(el => el.rating).reduce((prev, el) => (prev + el.rating)/2, 0);
  }

  toString() {
    return `Members ${this.getMembersVoted().join(', ')} gave ${this.name} ${this.getRating} stars`;
  }
}


//console.log('Members who voted: ', membersWhoVoted().join(', '));

// get the average rating by using reduce
//console.log('Average rating: ' + (Math.round(averageRating * 2) / 2).toFixed(1));

// TEST //

class Member {  
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Rating {
   constructor(id, rating) {
     this.id = id;
     this.rating = rating;
   }
}


const movieName = 'Captain America';

const members = [
  new Member(1, 'John', 'Doe'),
  new Member(2, 'Jackie', 'Chan'),
  new Member(3, 'Bruce', 'Lee'),
  new Member(4, 'Chuck', 'Norris')
]

const ratings = [
  new Rating(1, 1.5),
  new Rating(2, 3.0),
  new Rating(4, 4.5)
]

let captainAmericaReview = new MovieReview(movieName, members, ratings);

// get names of members who voted
let membersWhoVoted = () =>  captainAmericaReview.getMembersVoted();
let averageRating = () =>  captainAmericaReview.getRating();

console.log(membersWhoVoted());
console.log(averageRating());

// TODO - Write some unit tests
console.assert(averageRating() == 3.1875, 'Expected rating did not match');
// console.assert(captainAmericaReview.getMembersVoted() == [members[0], [members[1], [members[2]], 'Expected rating did not match');
// console.assert(captainAmericaReview.toString() == 'Members Jon, Amy, Steve gave Captain America 3.5 stars')
