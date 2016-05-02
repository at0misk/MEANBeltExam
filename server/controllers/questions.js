var mongoose = require('mongoose');
var question = mongoose.model('Question');
module.exports = (function() {
	return {
		index: function(req, res){
			question.find({}, function(err, results) {
		       if(err) {
		         console.log(err);
		       } else {
		         res.json(results);
		       }
		   })
		},
		create: function(req, res){
			question.create({title: req.body.title, description: req.body.description, author: req.body.author}, function(err, results) {
		       if(err) {
		         console.log(err);
		       } else {
		         res.json(results);
		       }
		})
		},
		check: function(req, res){
			//this is where i need to populate
			console.log(req.params);
			question.findOne({_id: req.params.id})
			.populate('comments')
			.exec(function(err, results){
				if(err) {
		         console.log(err);
		       } else {
		       	console.log(results);
		         res.json(results);
		       }
			})
		},
		update: function(req, res){
			question.findOneAndUpdate({_id:req.body._question}, {$push:{"comments":req.body._id}}).exec(function(err, results){
				if(err) {
		         console.log(err);
		       } else {
		       	console.log(results);
		         res.json(results);
		       }
			})
		}
	}
})();