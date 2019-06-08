const call = require("./src/call");

//call.withCallback("Jhon CallBack", call.sync);

console.log(
  call.withPromise("Jhon").then(name => {
    console.log(name);
  })
);
