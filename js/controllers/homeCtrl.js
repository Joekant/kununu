'use strict';

app.controller("homeCtrl", function( $scope, MyHTTP, $http) {
	
	var path = "http://gd.geobytes.com/AutoCompleteCity?callback=JSON_CALLBACK &filter=DE&q=";
	$scope.city = "";
	$scope.cities = [];

	$scope.nChange = function() {
		
		if($scope.city.length > 2 ) {
			getCities($scope.city);
		}else {
			$scope.cities =[];
		}
		// console.log($scope.city);
	}

	var getCities = function (cityName) {
        $http.jsonp(path + cityName).then(function (response) {
            console.log(response.data);
            $scope.cities = response.data;
        });
    };

    $scope.selectedCity = function(city) {
    	$scope.city=city;
    	$scope.cities = [city];
    }


    $scope.send = function() {
    	alert($scope.city);
    }

});

