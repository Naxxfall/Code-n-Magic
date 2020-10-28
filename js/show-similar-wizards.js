'use strict';

(function (){
  var similarListElement = document.querySelector(".setup-similar-list");
  var similarWizardTemplate = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");
  var wizardNames = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
  var wizardSurnames = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
  var wizards = [];

  function generateWizard (names, surnames, coatColors, eyesColors){
    var wizard = {
      name: generateRandomFeature(names),
      surname: generateRandomFeature(surnames),
      coatColor: generateRandomFeature(coatColors),
      eyesColor: generateRandomFeature(eyesColors)
    };
    return wizard;
  }

  function renderWizard(wizardData){
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector(".setup-similar-label").textContent = wizardData.name;
    wizardElement.querySelector(".wizard-coat").style.fill = wizardData.colorCoat;
    wizardElement.querySelector(".wizard-eyes").style.fill = wizardData.colorEyes;
    return wizardElement;
  }

  function sortSimilarWizards(wizardsData){
    var SimilarRating = {
      COATRATING: 2,
      EYESRATING: 1
    };
    wizardsData.sort(function (first, second) {
      if (first.name > second.name) return 1;
      if (first.name < second.name) return -1;
      return 0;
    });
    wizardsData.forEach(function (wizard) {
      wizard.similarity = 0;
      if (wizard.colorCoat === setupPlayer.querySelector('input[name="coat-color"]').value){
        wizard.similarity += SimilarRating.COATRATING;
      }
      if (wizard.colorEyes === setupPlayer.querySelector('input[name="eyes-color"]').value){
        wizard.similarity += SimilarRating.EYESRATING;
      }
    });
    wizardsData.sort(function (first, second) {
      if (first.similarity > second.similarity) return -1;
      if (first.similarity < second.similarity) return +1;
      return 0;
    });
  }

  function wizardsLoadHandler(wizardsData){
    sortSimilarWizards(wizardsData);
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++){
      fragment.appendChild(renderWizard(wizardsData[i]));
    }
    while (similarListElement.firstChild){
      similarListElement.removeChild(similarListElement.firstChild);
    }
    similarListElement.appendChild(fragment);
  }

  function wizardsErrorHandler(errorMessage){
    alert(errorMessage);
  }

  window.showSimilarWizards = function () {
    backend.load(wizardsLoadHandler, wizardsErrorHandler);
  }

  /*var showSimilarWizardsOld = function () {
    while (similarListElement.firstChild){
      similarListElement.removeChild(similarListElement.firstChild);
    }
    for (var i = 0; i < 4; i++){
      wizards[i] = generateWizard(wizardNames, wizardSurnames, coatColors, eyesColors);
    }
    var fragment = document.createDocumentFragment();
    for (i = 0; i < wizards.length; i++){
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  }*/
})();
