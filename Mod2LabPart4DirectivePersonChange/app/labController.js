angular.module('app')
.controller('labController', [ 
   function () { 
      var vm = this; 
      vm.show = show;
      
      vm.person = {
        name: 'Samuel Clemens',
        penName: 'Mark Twain'
      };
      function show() {
        alert(JSON.stringify(vm.person));
        console.log(JSON.stringify(vm.person));
      }
   } 
]);