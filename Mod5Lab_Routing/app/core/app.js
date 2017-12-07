'use strict';

angular.module('app', ['ngRoute'])

.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){

        $routeProvider
        .when('/', {
            templateUrl: '/app/home/index.html',
            controller: 'homeController'
        })
        .when('/items/', {
            templateUrl: '/app/items/index.html',
            controller: 'itemsController'
        })
        .when('/contact/', {
            templateUrl: '/app/contact/index.html',
            controller: 'contactController'
        })        
        .otherwise({ redirectTo: '/' });

        // Relieves us from having to use the hashbang tag in our urls
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('!');
    }
]);
