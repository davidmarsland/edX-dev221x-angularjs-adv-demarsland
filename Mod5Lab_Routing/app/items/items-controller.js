'use strict';

angular.module('app').controller('itemsController', ['$scope', 
    function($scope){
        $scope.items = ['First', 'Second', 'Third'];
    }
]);