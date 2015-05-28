var express = require( 'express' );
var morgan = require( 'morgan' );
var app = express();
var port = process.env.PORT || 3000;
var testMode = false;

app.use(morgan('dev'));

app.use( function(req, res, next){
	if( req.url == '/test' ){
		console.log( 'enabled test mode' );
		testMode = true;
	}
	next();
});


app.use(function(req, res){
	var data = testMode ? JSON.stringify(req.headers) : '<h1>hello moto</h1>';
	var contentType = testMode ? 'text/plain' : 'text/html';

	res.writeHead(200, {'Content-Type' : contentType});
	res.end(data);
});

app.listen(port);
console.log( 'listening on port %s', port );

