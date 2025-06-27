const http = require("http");
const url = require("url");

const handler = require("./handlers/handler");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  // req.query -> query parametar - se sto se naogja posle prasalnikot  ( ? )
  // /user?name=John
  // welcome
  if (parsedUrl.pathname === "/welcome") {
    handler.handleWelcome(req, res);
  } else if (parsedUrl.pathname === "/user") {
    handler.handleUser(req, res, parsedUrl.query.username);
  } else {
    handler.handleNotFound(req, res);
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
