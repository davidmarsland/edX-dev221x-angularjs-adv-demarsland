'use strict';

angular.module('app',[])

.controller('appController',[ '$scope',
    function($scope){
        $scope.display = "This is from angular";
    }
]);

