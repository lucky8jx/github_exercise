
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.mapRoute = function(app) {
	var index = require('../controllers');

	app.get('/', function(req, res) {
		index.getHomePage(req, res);
	});
};