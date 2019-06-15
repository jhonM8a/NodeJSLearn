const server = require("http").Server();
const io = require("socket.io")(server);
const port = require("./config").SERVER_PORT;

require("./backend/connect")(io);

const banner = `
************************************
    Init server with socket io
************************************
Status: Online
Listening on port :${port}
`;

server.listen(port, () => {
  console.info(banner);
});
