angular.module('app')
  .directive('person', function () {
    return {
      scope: {
        person: '='
      },
      restrict: 'E',
      template: '<h3>{{person.name}}</h3><h4>{{person.penName}}</h4>'
    }
  });