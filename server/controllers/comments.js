var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var question = mongoose.model('Question');
module.exports = (function() {
	return {
		create: function(req, res){
			// console.log(req.body._id);
			// 	comment.create(req.body, function(err, results){
			// 	if(err) {
			//         console.log(err);
			//        } else {
			//         res.json(results);
			//        }
			//     })
			question.findOne({_id: req.params.id}, function(err, question){
	        // data from form on the front end
	        var newComment = new Comment(req.body);
	        //  set the reference like this:
	        newComment._question = question._id;
	        question.comments.push(newComment);
	        // now save both to the DB
	        newComment.save(function(err){
	            question.save(function(err){
	        if(err) {
	                   console.log('Error');
	       } else {
	              res.redirect('/');
	              }
	            });
	        });
	    	});
		}
	}
})();