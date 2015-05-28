var http = require('http');

var app = http.createServer(function (req, res, next) {
  res.writeHead(200, {'Content-Type' : 'text/html'});
  console.log('listening');
  res.end('<h1>Hello World</h1>');
});
 
app.listen(3000, 'localhost');

console.log('server app running on port 3000');