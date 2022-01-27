const imgContainer = document.getElementById("img-container");
const buttonShow = document.getElementById("buttonShow");
const buttonReset = document.getElementById("buttonReset");
const resultContainer = document.getElementById("result-container");
let resultat = "";

function selectItems(clickedElement) {
  resultat += clickedElement.innerHTML;
}

function displayItems() {
  resultContainer.innerHTML += resultat;
  resultat = "";
}

function resetItems() {
  resultContainer.innerHTML = "";
}
