var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//var veggies = require('./veggies/potato.js');

mongoose.connect('mongodb://localhost/mammals');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	// something here?
});

var app = express();
// app.use(express.bodyParser());
app.use(bodyParser.json());

// mammalSchema with three fields: `name`, `type`, and `year_extinct`
var MammalSchema = new mongoose.Schema({
	name: String,
	type: String,
	year_extinct: Number
});

var Mammal = mongoose.model('Mammals', MammalSchema);

// var mammalInstance = new Mammal({name: "plain potato"});

// mammalInstance.save(function (err, mammalInstance) {
// 	if (err) return console.error(err);
// });

app.get('/veggies', function(req, res) {

	// var filter = {};
	// Mammal.find(filter)
	// .sort('field')
	// .exec(function(err, data) {
	// 	res.send(profile);
	// });

	Mammal.find(function (error, mammals) {
		console.log('GET veggies request ...');
		try {
			res.json(mammals);
		} catch (error) {
			console.error(err);
			res.status(404).send(error);
		};
	})
});

app.post('/veggies', function (req, res) {
	var newMammal = new Mammal({
		name: req.body.name,
		type: req.body.type,
		year_extinct: req.body.year_extinct
	});
	console.log(newMammal);
	newMammal.save(function (err, newMammal) {
		console.log("mammal saved");
		try {
			res.send({success: true});
		} catch (error) {
			console.error(err);
			res.status(404).send(error);
		};
	});
	// newMammal.save(function(err) {
	// 	res.send({success: true});
	// })
})

// app.post('/veggies', function(req, res) {
// 	console.log('POST veggies request...')
// })



// var justOneVar = require('./dataFile').justOneVar

// -----------------------
// START THE ACTUAL SERVER
// ----------------------- 

// Make the index page in the following directory the render page
app.use(express.static(__dirname + '/public'));

// Start the server on this port
app.listen(3000); 

