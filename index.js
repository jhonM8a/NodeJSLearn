const call = require("./source/call");

//call.greet("Jhon Ochoa"); No asincrono

//call.withPromise("Jhon", "Ochoa").then(nombre => console.log(nombre)); Asincrono

async function callWhitPromise() {
  const fullName = await call.withPromise("Jhon", "Ochoa");
  console.log(fullName);
}

callWhitPromise();
