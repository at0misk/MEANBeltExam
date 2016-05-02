var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
	answer: String,
	user: String,
	vote: Number,
	_question: {type:mongoose.Schema.ObjectId, ref:'Question'}
});
mongoose.model('Comment', CommentSchema);