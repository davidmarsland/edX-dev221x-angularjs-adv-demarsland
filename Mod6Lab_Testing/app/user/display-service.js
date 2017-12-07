'use strict';

angular.module('app').factory('userService', ['$http', '$q', 
    function($http, $q){
        function getUsers(){
            var deferred = $q.defer();
            $http.get('https://reqres.in/api/users').then(
                function(result){
                    deferred.resolve(result.data.data);
                },
                function(error){
                    deferred.reject(error);
                }
            );
            return deferred.promise;
        }
        
        var service = { getUsers: getUsers };
        return service;
    }
]);
