(function() {
  'use strict';

  angular
    .module('myProjectBitmaker')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
