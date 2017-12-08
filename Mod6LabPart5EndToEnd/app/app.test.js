describe('app module', function () {
});

var app;

beforeAll(function () {
  app = angular.module('app')
});

// Following this, you will create a test checking if your app variable has been instantiated.

it('should be defined', function () {
  expect(app).toBeDefined();
});