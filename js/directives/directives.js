'use strict';

app.directive('submenu' , function() {

	return {
		/*scope : true,*/
		link : function(scope, element, attr) {
			
		}
	};
});

app.directive('global', function() {

	var body = angular.element(document.getElementsByTagName("body")[0]);

	return {

		link : function(scope, element) {

			body.on("keypress", function(args) {
	    		if (args.keyCode == 13) {
	        		scope.send();
	    		}
			});	
		}
		
	}
	

});

app.directive('triggersubmenu' , function($timeout) {
	var body = angular.element(document.getElementsByTagName("body")[0]);
	return {
		/*scope : true,*/
		link : function(scope, element, attr) {
			var el = angular.element(document.getElementById(attr.submenu));
			
			element.bind("click", function(e) {
				el.addClass("active");
				e.stopPropagation();

				$timeout(function() {

					body.bind("click", function(ev) {
						ev.stopPropagation();

						var elTmp = element[0].parentElement.className;
						var flag = false;
						var tar = ev.target;

						for(var n = 0; n < 6; n ++) {
							
							if(tar == null) {
								hideMenu();
								return false;
							} else {
								
								if(elTmp == tar.className ) {
									return false;
								} else {
									tar = tar.parentElement;	
								}

							}
							
							
						}

						hideMenu();
					});

				},10);
			});

			var hideMenu = function(tar) {
				/*console.log(tar);*/

				el.removeClass("active");

				//Timeout, so js doesn't do this in the async way
				$timeout(function() {
					body.unbind("click");
				});	
				
			}
		}
	};
});
