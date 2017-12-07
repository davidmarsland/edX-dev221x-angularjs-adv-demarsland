angular.module('app')
.controller('LabController', [ 
   function () { 
      var vm = this; 
      vm.show = show;
      
      vm.people = [{
        name: 'Samuel Clemens',
        penName: 'Mark Twain'
      }, {
        name: 'Mae West',
        penName: 'Mae Whiskey'
      }, {
        name: 'Wyatt Earp',
        penName: 'Deadeye'
      }];
      function show() {
        alert(JSON.stringify(vm.people));
        console.log(JSON.stringify(vm.people));
      }
   } 
]);