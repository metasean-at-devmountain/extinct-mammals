var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

// veggieSchema with three fields: `name`, `type`, and `year_extinct`
var VeggieSchema = new mongoose.Schema({
	name: String,
	type: String,
	year_extinct: Number
});

var Veggie = mongoose.model('Veggies', VeggieSchema);