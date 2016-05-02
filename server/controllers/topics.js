var mongoose = require('mongoose');
var topic = mongoose.model('Topic');
var user = mongoose.model('User');
module.exports = (function() {
	return {
		index: function(req, res){
			topic.find({}).populate('_author posts posts._author').exec(function(err, results) {
				var options = {
					path: 'posts._author',
					model: 'User'
				};
				topic.populate(results, options, function(err, results){
		       if(err) {
		         console.log(err);
		       } else {
		       	console.log(results);
		         res.json(results);
		       }
		   })
		})
		},
		create: function(req, res){
			user.findOneAndUpdate({_id:req.body.userId}, {$push:{"posts":req.body._id}}).exec(function(err, results){
				topic.create(req.body, function(err, results){
				if(err) {
			        console.log(err);
			       } else {
			        res.json(results);
			       }
			    })
			})
		}
	}
})();