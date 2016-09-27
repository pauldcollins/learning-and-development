/** PROS (or CONS??) OF FACTORIES
 * Because Devs might not remember to use `new`
 * There's  inconsistency: if adding classes you sometimes need to use 'new' and sometimes not
 * Factories are just objects, and extending objects.
 *
 * Enter factories.
 */

// Old school (Constructors)
function Person(name) {
    this.name = name;
}

Person.constructor.greeting = function () {
    console.log(`Hello ${this.name}`);
};

let p1 = new Person('Paul');

// The newer school way (classes)
class PersonClass {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        console.log(`Hello ${this.name}`);
    }
}

let p2 = new PersonClass('Paul');

/// ---

let PersonFactory = {
    create: function (name, isAdmin = false) {
        var person = {
            name: name,

            greeting: function () {
                console.log(`Hello ${this.name}`);
            }
        };

        if (isAdmin) {
            person.backendAdminLogin = function () {
                // Enables them to login to the backend
            };
            person.isAdmin = true;
        }

        return person;
    }
};

let p3 = PersonFactory.create('Ryan');
// pr.prototype is "Object"
