const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello, CI/CD World!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
