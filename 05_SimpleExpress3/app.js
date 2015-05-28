var express = require('express');
var app = express();
var morgan = require('morgan');
var port = process.env.PORT || 3000;
var publicDir = require('path').join(__dirname, '/public');

app.use(morgan('dev'));

app.use(express.static(publicDir));

app.use(function (req, res) {
	var data = "<h1>These arn't the droids you are looking for...</h1>";
	res.writeHeader(200, {'Content-Type' : 'text/html'});
	res.end(data);
});

app.listen(port);

console.log('look at http://localhost:' + port);