(function($) {
	/********************************************
	*	The common js of the website
	*********************************************/
	//	Namespace object of common
	var cmn = cmn || {};

	//	Namespace function of common object
	cmn.namespace = function(nsString) {
		var parts = nsString.split('.'),
			parent = cmn;

		//	Strip redundant leadding namespace
		if (parts[0] === "cmn") {
			parts = parts.slice(1);
		}
		$.each(parts, function(idx, val) {
			//	Create a property if it doesn't exist
			if (typeof parent[val] === "undefined") {
				parent[val] = {};
			}
			parent = parent[val];
		});
		return parent;
	};

	//	Add a method to the Function
	if (typeof Function.prototype.method !== "function") {
		Function.prototype.method = function(name, implementation) {
			this.prototype[name] = implementation;
			return this;
		};
	}

	//===========================================
	//	header
	//===========================================
	cmn.namespace('header');
	cmn.header = (function() {
		var $searchForm = $('#searchForm');

		//------------------------------------------------
		//	All private function
		//-----------------------------------------------
		//	Init function
		function init() {
			$searchForm.find('input').on("focus blur", function(e) {
				var $this = $(this),
					type = e.type;

				hide($this);

				focus($this, type);
			});

		}

		//	Hide the top nav
		function hide($elm) {
			$elm.closest('div').toggleClass('is-sf-focus');
		}

		//	Animate the width fo the focused input
		function focus($elm, type) {
			if (type === 'focus') {
				$elm.animate({
					'width': '400px'
				}, 300);
			} else {
				$elm.animate({
					'width': '220px'
				}, 200);
			}
		}

		//-------------------------------------------------
		//	Property of header
		//--------------------------------------------------
		return {
			init: init
		};
	}());

	cmn.header.init();
	// var $searchForm = $('#searchForm'),
	// 	$navigation = $('#navigation');

	// $searchForm
	// 	.find('input').on('focus blur', function(event) {
	// 		var $this = $(this);

	// 		$this
	// 			.closest('div')
	// 				.toggleClass('is-sf-focus');

	// 		if (event.type === 'focus') {
	// 			$this.animate({
	// 				'width': '400px'
	// 			}, 300);
	// 		} else {
	// 			$this.animate({
	// 				'width': '220px'
	// 			});
	// 		}
	// 	});

})(jQuery);