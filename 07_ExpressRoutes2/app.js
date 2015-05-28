var app = require('express')();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	var data = '<h1>this is how we do it</h1>';
	res.send(data);
});

var server = app.listen(port, function () {
	console.log('server started on port %s', server.address().port);
});