var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use( function( req, res ){
  var data = '<h2>Hello Meetup!</h2>';
  res.writeHead(200, { 'Content-Type' : 'text/html'});
  res.end(data);
});

app.listen( port );
console.log('listening on port %s', port );