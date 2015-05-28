var express = require( 'express' );
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
	var data = '<h3>And this is how routes go</h3>';
	res.send(data);
});

app.listen(port);
console.log( 'listening on %s', port );