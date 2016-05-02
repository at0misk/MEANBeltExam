var mongoose = require('mongoose');
var List = mongoose.model('List');
var user = mongoose.model('User');
var ObjectID = require('mongoose').Types.ObjectId;
module.exports = (function() {
	return {
		find: function(req, res){
			console.log(req.params);
			user.findOne({_id: req.params.id})
			.populate('lists')
			.exec(function(err, results){
				if(err) {
		         console.log(err);
		       } else {
		       	console.log(results);
		         res.json(results);
		       }
			})
		},
		create: function(req, res){
			console.log(req.body._author);
			console.log(req.body.tagged);
			var id = new ObjectID(req.body._author);
			// var taggedId = new ObjectID(req.body.tagged);
			// console.log(req.params._author);
			user.findOne({_id: id}, function(err, user){
			var newList = new List(req.body);
			console.log(user.lists);
	        // data from form on the front end
	        //  set the reference like this:
	        newList._user = user._id;
	        user.lists.push(newList);
	        // now save both to the DB
	        newList.save(function(err){
	            user.save(function(err){
	        if(err) {
	                   console.log('Error');
	       }
	            });
	        });
	    	});
	    	user.findOne({name: req.body.tagged}, function(err, user){
	    	var newList = new List(req.body);
	    	newList._user = user._id;
	    	user.lists.push(newList);
	    		user.save(function(err){
			        if(err) {
			            console.log('Error');
			       }
			        else {
	              res.redirect('/');
	              }
	    	});
	    	});
		},
		update: function(req, res){
			console.log(req.params.id)
			List.findOneAndUpdate({_id:req.params.id}, {'$inc' :{'complete': +1}}).exec(function(err, results){
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
// cl.find( { "_id": ..., 'field' : { '$mod' : [ 2, 1 ] } );