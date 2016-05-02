var mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema({
	title: String,
	description: String,
	comments: [{type:mongoose.Schema.ObjectId, ref:'Comment'}]
});
mongoose.model('Question', QuestionSchema);