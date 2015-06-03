"use strict";
var app = angular.module('app', ['ngRoute']);

//Defining Constants
app.constant('INIT', {
      'CTRL_URL' : '/js/controllers/',
      'VIEW_URL' : 'views/',
      'ASSETS_URL' : 'img/assets/',
      'HOME' : '/',
});



/*Routing */
app.config(function( $routeProvider, INIT ){

   $routeProvider.when( '/', { "templateUrl" : INIT.VIEW_URL + "homeView.html", "controller" : "homeCtrl" } );

});
