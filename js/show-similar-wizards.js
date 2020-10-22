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

  function renderWizard(wizard){
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector(".setup-similar-label").textContent = wizard.name + '\n'+ wizard.surname;
    wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
    wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;
    return wizardElement;
  }

  window.showSimilarWizards = function () {
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
  }
})();
