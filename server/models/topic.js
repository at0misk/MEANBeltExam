var mongoose = require('mongoose');
var TopicSchema = new mongoose.Schema({
	name: String,
	description: String,
	cat: String,
	_author: {type:mongoose.Schema.ObjectId, ref:'User'}
});
mongoose.model('Topic', TopicSchema);