const http = require("http");
const fileSystem = require("fs");

//Crear instancia del servidor
const server = http.createServer((request, response) => {
  //funcion que pide un request y responde,
  fileSystem.readFile("./resources/my_page.html", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    response.end(data);
  });
});
console.log("Iniciando servidor...");
server.listen(3000);
