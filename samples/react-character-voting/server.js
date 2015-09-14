
var express = require('express'),
	path = require('path'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),

	swig = require('swig'),
	React = require('react'),
	Router = require('react-router'),
	routes = require('./app/routes');


var application = express();

application.set('port', process.env.PORT || 3000);

application.use(logger('dev'));
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: false }));
application.use(express.static(path.join(__dirname, 'public')));

application.use(function(request, response){
	Router.run(routes, request.path, function(Handler){
		var html = React.renderToString(React.createElement(Handler)),
			page = swig.renderFile('views/index.html', { html: html });
			response.send(page);
	})
})

application.listen(application.get('port'), function(){
	console.log('Express server listening on port ' + application.get('port'));
})