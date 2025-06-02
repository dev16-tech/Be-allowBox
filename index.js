const http = require('http');
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node! CICD is setup\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running and cicd setup on http://localhost:${port}/`);
});
