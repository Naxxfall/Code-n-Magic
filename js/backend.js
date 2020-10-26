'use strict';

(function () {
  window.backend = {};

  backend.load = function (onLoad, onError){
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    var URL = "https://javascript.pages.academy/code-and-magick/data";
    xhr.open("GET", URL);
    xhr.addEventListener("load", function (){
      if (xhr.status === 200){
        onLoad(xhr.response);
      }
      else {
        onError("Статус ответа: " + xhr.status + " " + xhr.statusText);
      }
    });
    xhr.addEventListener("error", function (){
      onError("Произошла ошибка соединения");
    });
    xhr.addEventListener("timeout", function () {
      onError("Запрос не успел выполниться за " + xhr.timeout + " мс.");
    });
    xhr.send();
  }

  backend.save = function (data, onLoad, onError){
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    var URL = "https://javascript.pages.academy/code-and-magick/";
    xhr.open("POST", URL);
    xhr.addEventListener("load", function (){
      if (xhr.status === 200){
        onLoad();
      }
      else {
        onError("Статус ответа: " + xhr.status + " " + xhr.statusText);
      }
    });
    xhr.addEventListener("error", function (){
      onError("Произошла ошибка соединения");
    });
    xhr.addEventListener("timeout", function () {
      onError("Запрос не успел выполниться за " + xhr.timeout + " мс.");
    });
    xhr.send(data);
  }

})();

