var connect = require('connect');

var app = connect.createServer()
	.use(connect.static(__dirname + '/dist'))
	.listen(process.env.PORT);

console.log('Express server started on port %s', app.address().port);