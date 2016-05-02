var users = require('./../controllers/users.js');
var lists = require('./../controllers/lists.js');
module.exports = function(app){
	app.post('/users', function(req, res){
		users.create(req, res);
	})
	app.get('/users', function(req, res){
		users.index(req, res);
	})
	app.post('/lists', function(req, res){
		lists.create(req, res);
	})
	app.get('/getlists/:id', function(req, res){
		users.find(req, res);
	})
	app.get('/users/:id', function(req, res){
		users.find(req, res);
	})
	app.put('/lists/:id', function(req,res){
		console.log(req.params.id);
		lists.update(req, res);
	})
}