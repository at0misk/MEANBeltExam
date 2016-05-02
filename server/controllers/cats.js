var mongoose = require('mongoose');
var cat = mongoose.model('Cat');
module.exports = (function() {
	return {
		index: function(req, res){
			cat.find({}, function(err, results) {
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