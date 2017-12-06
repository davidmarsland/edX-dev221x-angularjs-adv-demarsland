// Note lab is buggy, must add to end:              , sessionController]
angular.module('app')
  .controller('sessionController', ['sessionService', sessionController]);

function sessionController(sessionService) {
  var vm = this;
  vm.getServiceSession = function () {
    vm.model = {
      name: sessionService.get('name'),
      nickname: sessionService.get('nickname'),
      status: 'Retrieved by service on ' + new Date()
    };
  };
  vm.setServiceSession = function () {
    sessionService.save('name', vm.model.name);
    sessionService.save('nickname', vm.model.nickname);
    vm.getServiceSession();
  };
  vm.clearServiceSession = function () {
    sessionService.clear();
    vm.getServiceSession();
  };
};

