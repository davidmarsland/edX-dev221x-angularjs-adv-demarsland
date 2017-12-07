'use strict';

angular.module('app').controller('userDisplayController', [ '$scope', 'userService', 
    function($scope, userService){
        
        $scope.executeSearch = function(){
            userService.getUsers().then(getUsersSuccess);
        }

        var getUsersSuccess = function(result){
            $scope.users = result;
        }
    }
]);