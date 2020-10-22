'use strict';
(function () {
  window.setupUserPicMousedownHandler = function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;
    function setupUserPicMousemoveHandler(moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      setupBlock.style.top = (setupBlock.offsetTop - shift.y) + 'px';
      setupBlock.style.left = (setupBlock.offsetLeft - shift.x) + 'px';
    }
    function setupUserPicMouseupHandler(upEvt){
      upEvt.preventDefault();
      document.removeEventListener("mousemove", setupUserPicMousemoveHandler);
      document.removeEventListener("mouseup", setupUserPicMouseupHandler);
      if (dragged){
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          setupUserPic.removeEventListener('click', onClickPreventDefault);
        }
        setupUserPic.addEventListener('click', onClickPreventDefault);
      }
    }
    document.addEventListener("mousemove", setupUserPicMousemoveHandler);
    document.addEventListener("mouseup", setupUserPicMouseupHandler);
  }
})();
