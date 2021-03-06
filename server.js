var application_root = __dirname
    , express = require('express')
    , path = require('path');

/**
 * Express Setup
 */
var app = express();

var config = require('./app/config')(app, express);
var router = require('./app/router.js')(app);

// Start server
app.listen(app.get('port'), function() {
  console.log('Express server listening on port %d in %s mode...\n\n', app.get('port'), app.settings.env);
});
