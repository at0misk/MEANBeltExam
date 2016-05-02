var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	name: String,
	lists: [{type:mongoose.Schema.ObjectId, ref:'List'}]
});
mongoose.model('User', UserSchema);