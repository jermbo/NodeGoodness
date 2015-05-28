var app = require('express')();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	var data = '<h1>say what again!</h1>';
	res.send(data);
});

var server = app.listen(port, '127.0.0.1', function () {
	var host = server.address();
	console.log('server started on %s:%s', host.address, host.port);
});