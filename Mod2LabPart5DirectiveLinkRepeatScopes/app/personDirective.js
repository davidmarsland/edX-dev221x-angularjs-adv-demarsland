angular.module('app')
  .directive('person', function () {
    return {
      scope: {
        data: '=',
        action: '&'
      },
      restrict: 'E',
      template: 
      'Pen Name: <input type="text" ng-model="data.name" class="form-control" />' +
      'Pen Name: <input type="text" ng-model="data.penName" class="form-control" />' +
      '<input type="button" ng-click="output()" value="Action" class="btn btn-primary"/>' + 
      '<pre>{{person | json}}</pre>',
      controller: function($scope) {
        $scope.output = function() {
          var s = JSON.stringify($scope.data);
          alert(s);
          console.log(s);
        }
      }
    }
  });