'use strict';

function generateRandomFeature(features){
  var feature = features[Math.floor(Math.random() * features.length)];
  return feature;
}

function generateWizard (names, surnames, coatColors, eyesColors){
  var wizard = {
    name: generateRandomFeature(names),
    surname: generateRandomFeature(surnames),
    coatColor: generateRandomFeature(coatColors),
    eyesColor: generateRandomFeature(eyesColors)
  };
  return wizard;
}

var setupBlock = document.querySelector(".setup");
var similarListElement = document.querySelector(".setup-similar-list");
var similarWizardTemplate = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");
var wizardNames = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var wizardSurnames = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var coatColors = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
var eyesColors = ["black", "red", "blue", "yellow", "green"];
var wizards = [];

for (var i=0; i<4; i++){
  wizards[i] = generateWizard(wizardNames, wizardSurnames, coatColors, eyesColors);
}
setupBlock.classList.remove("hidden");
var renderWizard = function(wizard){
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(".setup-similar-label").textContent = wizard.name + '\n'+ wizard.surname;
  wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;
  return wizardElement;
}
var fragment = document.createDocumentFragment();
for (var i=0; i<wizards.length; i++){
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
setupBlock.querySelector('.setup-similar').classList.remove("hidden");


