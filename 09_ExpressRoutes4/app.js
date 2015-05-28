var app = require( 'express' )();
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
	res.send('welcome to express');
});

app.get('/about', function(req, res){
	res.send('a little demo about routing');
});

app.get('/hello', function(req, res){
	res.send('hellooooooooooooo');
});

app.listen(port);