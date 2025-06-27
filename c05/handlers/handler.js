const handleWelcome = (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Welcome to our Node.js server");
};

const handleUser = (req, res, username) => {
  const usernamePattern = /^[a-zA-Z\d_]{3,}$/;
  // const usernamePattern = new RegExp("/^[a-zA-Z\d_]{3,}$/");

  if (usernamePattern.test(username)) {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(`Hello, ${username}`);
  } else {
    res.writeHead(400, { "content-type": "text/plain" });
    res.end("Invalid username format.");
  }
};

const handleNotFound = (req, res) => {
  res.writeHead(404, { "content-type": "text/plain" });
  res.end("404 not found");
};

module.exports = {
  handleWelcome,
  handleUser,
  handleNotFound,
};
