///<reference path='../isomorphic/types/references.d.ts' />
var server_port = process.env.PORT || 3000;
var path = require('path'), express = require('express'), application = express();
function launch() {
    application.use('/public', express.static(path.join(__dirname, '..', 'client', 'public')));
    application.use('/react', express.static(path.join(__dirname, '..', 'client', 'react')));
    application.use('/meteor', express.static(path.join(__dirname, '..', 'client', 'meteor')));
    application.use('/polymer', express.static(path.join(__dirname, '..', 'client', 'polymer')));
    application.use('/polymer-tutorial', express.static(path.join(__dirname, '..', 'samples', 'polymer-tutorial-master')));
    var server = application.listen(server_port, function () {
        var host = server.address().address;
        console.log('server launched - ', host);
    });
}
exports.launch = launch;
