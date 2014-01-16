/*******************************************
*	Controllers
*********************************************/

exports.getHomePage = function(req, res) {
	res.render('index', {
		title: "GitHub · Build software better, together."
	});
};