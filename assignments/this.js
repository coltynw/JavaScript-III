/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, the value of "this" willb e the window/console Object;
* 2. The object to the left of the dot gets 'this' context
* 3. When using constructor functions, 'this' will refer to a new array that is created.
* 4. Explicit Binding is using .call, .bind, or .apply to reference an object
    .call: can pass in arguments, but not arrays
    .apply: can pass in an array of arguments
    .bond: will return a new function instead of invoking the function. Can set it to another variable, which can come in handy.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const myObj = {
    greeting: 'Hello',
    speak: function (){
        console.log('this is pointing to ', this);
        return '${this.gretting}, world!'
    }
}

myObj.speak();


// Principle 2

// code example for Implicit Binding
const myObj2 = {
    greeting: 'Hello',
    sayHello: function(name){
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};

myObj2.sayHello('Coltyn');



// Principle 3

// code example for New Binding
// this is a constructor function

function Person(greeter) {
    this.greeting = `Hello `;
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    }
}

const Coltyn = new Person(`Wiewel`);
const Wiewel = new Person(`Coltyn`);

Coltyn.speak();
Wiewel.speak();


// // Principle 4

// code example for Explicit Binding
// I hope its okay I'm using the object from New Binding, same as the example in the video

Coltyn.speak.apply(Wiewel);

