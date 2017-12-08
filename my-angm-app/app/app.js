(function() {
	'use strict';

	/**
	* @ngdoc index
	* @name app
	* @description
	* # app
	*
	* Main module of the application.
	*/

	angular.module('ang-modular', [
		'ngResource',
		'ngAria',
		 'ui.bootstrap',
		
		'ngCookies',
		'ngAnimate',
		'ngTouch',
		'ngSanitize',
		'ui.router',
		'home',
	]);

})();
