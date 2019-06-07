const math = require("./math");
const greet = require("./greetings");
const hello = require("./greetings/hello");

console.log(math.add(5, 4));
console.log(math.divide(5, 4));
console.log(math.multiply(5, 4));
console.log(math.substract(5, 4));

console.log(greet.greet("Jhon"));

console.log(hello.sayHello("Jhon"));
