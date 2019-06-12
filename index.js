const erros = require("./resource/errors");
const handle = require("./resource/handlig");

try {
  erros.standardErr.range();
} catch (err) {
  console.log("Ha pasado algo...");
}

//handle.errorFirstCallbackWrong(); //Detiene la ejecución del codigo, forma incorrecta de manejar errores en funciones asincronas.
handle.errorFirstCallback(); //Forma correcta de manejar errores de funciones asincronas
