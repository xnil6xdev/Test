const http = require('http')

const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello from my-app!</h1><p>Your project is running successfully.</p>');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
