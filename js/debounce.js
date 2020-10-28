'use strict';

(function () {
  window.debounce = function (callBack, interval) {
    let args = arguments[0];
    return function () {
      if (window.lastTimeout){
        clearTimeout(window.lastTimeout);
      }
      window.lastTimeout = setTimeout(function () {
        callBack.apply(null, args);
      }, interval);
    }();
  }
})();
