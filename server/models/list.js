var mongoose = require('mongoose');
var ListSchema = new mongoose.Schema({
	title: String,
	description: String,
	created_at:  {type: Date, default: Date.now},
	complete: Number,
	_user: {type:mongoose.Schema.ObjectId, ref:'User'},
});
mongoose.model('List', ListSchema);