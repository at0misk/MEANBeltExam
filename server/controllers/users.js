var mongoose = require('mongoose');
var user = mongoose.model('User');
var ObjectID = require('mongoose').Types.ObjectId;
module.exports = (function() {
	return {
		create: function(req, res){
			user.create(req.body, function(err, results) {
		       if(err) {
		         console.log(err);
		       } else {
		         res.json(results);
		       }
		   })
		},
		index: function(req, res){
			user.find({}, function(err, results) {
		       if(err) {
		         console.log(err);
		       } else {
		         res.json(results);
		       }
		   })
		},
		find: function(req, res){
			var id = new ObjectID(req.params.id);
			user.findOne({_id: req.params.id})
			.populate('lists')
			.exec(function(err, results){
				if(err) {
		         console.log(err);
		       } else {
		       	console.log(results);
		       	console.log("HEY");
		         res.json(results);
		       }
			})
		}
	}
})();