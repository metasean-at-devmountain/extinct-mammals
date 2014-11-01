var Veggies = require(./veggie.js);

exports.get = function(req, res) {
	
});

exports.list = function(req, res) {

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
});}

exports.post = function(req, res) {
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
});