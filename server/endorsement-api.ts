///<reference path='../isomorphic/types/references.d.ts' />


var server_port = process.env.PORT || 3000;

var path = require('path'),
	express = require('express'),
	application = express();

export function launch(){

	application.use('/polymer', express.static(path.join(__dirname, '..', 'samples', 'polymer-tutorial-master')))

	var server = application.listen(server_port, function(){
		var host = server.address().address;

		console.log('server launched - ', host);	
	});
}