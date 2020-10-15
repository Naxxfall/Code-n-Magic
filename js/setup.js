'use strict';

var setupOpen = document.querySelector(".setup-open");
var setupBlock = document.querySelector(".setup");
var setupClose = setupBlock.querySelector(".setup-close");
var setupWizardForm = setupBlock.querySelector(".setup-wizard-form");
var setupSubmit = setupBlock.querySelector(".setup-submit");
var setupUserName = setupBlock.querySelector(".setup-user-name");
var setupPlayer = setupBlock.querySelector(".setup-player");
var setupWizard = setupBlock.querySelector(".wizard");
var setupFireballWrap = setupBlock.querySelector(".setup-fireball-wrap");
var setupWizardCoat = setupWizard.querySelector(".wizard-coat");
var setupWizardEyes = setupWizard.querySelector(".wizard-eyes");
var similarListElement = document.querySelector(".setup-similar-list");
var similarWizardTemplate = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");
var wizardNames = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var wizardSurnames = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var coatColors = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
var eyesColors = ["black", "red", "blue", "yellow", "green"];
var fireballColors =["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];
var wizards = [];

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

function renderWizard(wizard){
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(".setup-similar-label").textContent = wizard.name + '\n'+ wizard.surname;
  wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;
  return wizardElement;
}

function showSimilarWizards() {
  while (similarListElement.firstChild){
    similarListElement.removeChild(similarListElement.firstChild);
  }
  for (var i = 0; i < 4; i++){
    wizards[i] = generateWizard(wizardNames, wizardSurnames, coatColors, eyesColors);
  }
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++){
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
  setupBlock.querySelector('.setup-similar').classList.remove("hidden");
}

function setupOpenPressHandler(evt){
  if (evt.type === "click" || (evt.type === "keydown" && evt.code === "Enter")){
    evt.preventDefault();
    setupBlock.classList.remove("hidden");
    showSimilarWizards();
    setupOpen.removeEventListener("click", setupOpenPressHandler);
    setupOpen.removeEventListener("keydown", setupOpenPressHandler);
    setupClose.addEventListener("click", setupClosePressHandler);
    setupClose.addEventListener("keydown", setupClosePressHandler);
    setupSubmit.addEventListener("click", setupSubmitPressHandler);
    window.addEventListener("keydown", setupClosePressHandler);
    setupWizard.addEventListener("click", wizardClickHandler);
    setupFireballWrap.addEventListener("click", setupFireballWrapClickHandler);
  }
}

function setupClosePressHandler(evt){
  if ((evt.target === setupClose && (evt.type === "click" || evt.code === "Enter")) ||
    (evt.target !== setupUserName && evt.code === "Escape")){
    evt.preventDefault();
    setupClose.removeEventListener("click", setupClosePressHandler);
    setupOpen.removeEventListener("keydown", setupClosePressHandler);
    setupSubmit.removeEventListener("click", setupSubmitPressHandler);
    window.removeEventListener("keydown", setupOpenPressHandler);
    setupWizard.removeEventListener("click", wizardClickHandler);
    setupFireballWrap.removeEventListener("click", setupFireballWrapClickHandler);
    setupBlock.classList.add("hidden");
    setupOpen.addEventListener("click", setupOpenPressHandler);
    setupOpen.addEventListener("keydown", setupOpenPressHandler);
  }
}

function setupSubmitPressHandler(){
  setupWizardForm.submit();
}

function wizardClickHandler(evt){
  if (evt.target === setupWizardCoat){
    do {
      setupWizardCoat.style.fill = generateRandomFeature(coatColors);
    }
    while (setupWizardCoat.style.fill === setupPlayer.querySelector('input[name="coat-color"]').value);
    setupPlayer.querySelector('input[name="coat-color"]').value = setupWizardCoat.style.fill;
    return;
  }
  if (evt.target === setupWizardEyes){
    do {
      setupWizardEyes.style.fill = generateRandomFeature(eyesColors);
    }
    while (setupWizardEyes.style.fill === setupPlayer.querySelector('input[name="eyes-color"]').value);
    setupPlayer.querySelector('input[name="eyes-color"]').value = setupWizardEyes.style.fill;
  }
}

function setupFireballWrapClickHandler(){
  do {
    setupFireballWrap.querySelector(".setup-fireball").style.backgroundColor = generateRandomFeature(fireballColors);
  }
  while (setupFireballWrap.querySelector(".setup-fireball").style.backgroundColor === setupFireballWrap.querySelector('input[name="fireball-color"]').value);
  setupFireballWrap.querySelector('input[name="fireball-color"]').value = setupFireballWrap.querySelector(".setup-fireball").style.backgroundColor;
}

setupOpen.addEventListener("click", setupOpenPressHandler);
setupOpen.addEventListener("keydown", setupOpenPressHandler);

