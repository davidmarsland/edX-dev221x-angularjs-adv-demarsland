angular.module('app')
.controller('LabController', [ 
   function () { 
      var vm = this; 
      vm.person = {
        name: 'Samuel Clemens',
        penName: 'Mark Twain'
    };
   } 
]);