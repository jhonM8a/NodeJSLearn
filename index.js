const express = require("express");
const app = express(); //Instancia de servicio HTTP con express.js

//Definir rutas

app.get("/", (request, response) => {
  response.send("En ruta Home");
});
app.get("/app", (request, response) => {
  response.send("En ruta app");
});

app.get("*", (request, response) => {
  //Ruta general, debe ir de ultimo
  response.send("NPI");
});

app.listen(3000, () => {
  console.log("Server Listener...in the port 3000");
});
