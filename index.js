const fileOps = require("./fileops");
const fileSystem = require("fs");

let incrementValuesOk;
let nombresCambiados;
//Archivo con numeros
/*
fileSystem.readFile("./src/number.txt", "utf8", (err, texto) => {
  if (err) throw err;
  const numbers = texto.split("\n").map(n => Number(n));
  console.log(numbers);
  incrementValuesOk = fileOps.incrementValues(numbers);
  fileSystem.writeFile(
    "./src/numbernew.txt",
    incrementValuesOk.join("\n"),
    (err, result) => {
      if (err) throw err;
    }
  ); // ruta, datos ,callback
}); //Ruta, formato, callback(siempre el error y valorr de retorno)
*/
fileSystem.readFile("./src/name.txt", "utf8", (err, texto) => {
  if (err) throw err;
  const nombres = texto.split("\n");
  nombresCambiados = fileOps.callNames(nombres);
  fileSystem.writeFile(
    "./src/namesChange.txt",
    nombresCambiados.join("\n"),
    (err, result) => {
      if (err) throw err;
    }
  );
});
