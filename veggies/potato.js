// var bat  = "I have wing and eat fruit!";


// // mammalSchema with three fields: `name`, `type`, and `year_extinct`
// var BatSchema = new MammalSchema({
// 	name: String,
// 	type: 'bat',
// 	year_extinct: Number
// })

function MammalRepository() {}

MammalRepository.prototype.findAll = function () {
	return this.mammals;
}

module.exports = MammalRepository;