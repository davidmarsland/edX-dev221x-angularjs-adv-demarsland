'use strict';

angular.module('app').controller('homeController', [ '$scope', 
    function($scope){
        $scope.message = 'From Home Controller';
    }
]);
