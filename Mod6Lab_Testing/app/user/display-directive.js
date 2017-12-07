'use strict';

angular.module('app').directive('userDisplayDirective', [
    function(){
        return {
            templateUrl: 'app/user/display-template.html',
            restrict: 'E',
            scope: {
                users: '='
            }
        };
    }
]);