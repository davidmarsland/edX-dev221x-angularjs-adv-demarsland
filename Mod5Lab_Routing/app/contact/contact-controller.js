'use strict';

angular.module('app').controller('contactController', [ '$scope', 
    function($scope){
        $scope.sendMessage = function(){
            alert("Contact Sent");
        };
    }
]);
