ar express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//var veggies = require('./veggies/potato.js');

mongoose.connect('mongodb://localhost/veggies');

app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
});


var api = require('./server/api.js');
api.post('/veggies', api.post);
api.get('/veggies', api.list);
api.get('/veggies/:name', api.get)


// Make the index page in the following directory the render page
app.use(express.static(__dirname + '/public'));

// Start the server on this port
app.listen(3000); 