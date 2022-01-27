const result = document.getElementById("result");
let resultat = "";

function select(clickedElement) {
  resultat += clickedElement.innerHTML;
}

function display() {
  result.innerHTML += resultat;
  resultat = "";
}
