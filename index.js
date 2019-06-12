const greet = require("./src/greet");

greet.emit("clap");
greet.emit("shout", "Jhon");
greet.emit("call", "Jhon", name => {
  console.log("Estamos llamando a: " + name);
});
