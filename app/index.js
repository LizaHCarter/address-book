'use strict'; 

var port = process.env.PORT;
var db = process.env.DB;

var express = require('express');
var app = express();

require('./lib/config.js')(app);
require('./lib/pipeline.js')(app, express);
require('./lib/mongodb.js')(db);


app.listen(port, function(){
  console.log('Express Ready: '+port);
});
