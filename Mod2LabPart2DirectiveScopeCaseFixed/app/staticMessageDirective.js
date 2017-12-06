angular.module('app')
  .directive('staticMessageDirective', function () {
    return {
      // default
      // restrict: 'EA',
      template: '<h2>This is from a directive</h2>'
    };
  });