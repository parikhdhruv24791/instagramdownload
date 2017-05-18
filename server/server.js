// Fetch the site configuration
process.addListener('uncaughtException', function(err, stack) {
    console.log('Caught exception: ' + err + '\n' + err.stack);
    console.log('\u0007'); // Terminal bell
});

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
module.exports = app;
app.use(bodyParser.json());




require('./routes/index')(app);

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({'error': {
        message: err.message,
        error: err
    }});
});


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

