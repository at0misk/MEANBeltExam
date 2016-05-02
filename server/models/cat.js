var mongoose = require('mongoose');
var CatSchema = new mongoose.Schema({
	name: String
});
mongoose.model('Cat', CatSchema);