// Awesome!
// Generic!
// We want the ability to "mix-in" this functionality into ANY object
let Logger = {
    asString: function () {
        // TODO Make this more awesome
        return this.toString();
    }
};

// Inheritance kinda sucks for this...

class Person {
}

class StaffMember extends Person {
}

// Where do we put the logger functionality?

// OPTION 1 - Nuclear Option
// Attach it to Object.prototype
Object.prototype.asString = Logger.asString;

// This is fine... exept, now EVERY single Object in our runtime has the `asString` method. We don't like Nukes.

// OPTION 2 - Base Class
class Person {
}
Person.prototype.asString = Logger.asString;

// Better than option 1, because now only every instance of Person or its sub-classes has the `asString` method. So it's not nuclear, but it's still heavy handed.

// OPTION 3 - Mix-in where needed/wanted

// Let's say we have an `App` object who contains config
let App = {
    config: {
        debug: true // We're in dev mode
    }
};

// This kind of shit code, but it will clearly demonstrate the intent.
// We want to enable a kind of "debug" mode for our objects, during development

// This is an example of run-time composition
class Person {
    constructor() {
        // Dynamically "mix-in" the desired functionality/API
        if (App.config.debug) {
            this.asString = Logger.asString;
        }
    }

    // Now, if in debug mode, our instances, will have a `asString` method
}

class Person {
}

if (App.config.debug) {
    Person.prototype.asString = Logger.asString;
}

class Staff extends Person {
    // Staff would have the `asString` method
}

// Person is an Object
// Person has a "prototype" which defines its methods and properties
// Because the "prototype" is also an object, which means it's a "reference", we can mess with it at ANY time.

// An example of "build time" composition


// Instead of

// Person

// Staff extends Person

// Manager extends Staff

// A tree...

// It's more like

// Person {
// firstName
// lastName
// }

// Staff is a Person, that can `login`, can debug with `asString`, is `payable`.

// Volunteer, is a Person that can `login` but we DON'T WANT them to be `payable`.


// SWITCHING GEARS


// API

let payWeeklyWage = function () {
    console.log('You got paid');
};

// Other part of the codebase...

// Because a staff members gets paid
class Staff {
}
Staff.prototype.pay = payWeeklyWage;

class Volunteer {
    
}

class Product {
    constructor(name, price, onSpecial = true) {
        this.name = name;
        this.price = price;
        this.onSpecial = onSpecial;
    }
}

class Category {
    constructor(name) {
        this.name = name;
    }
}

let categories = [
    new Category('Shoes'),
    new Category('Wallets')
];

let p = new Product('Nike shoes', 400, false);