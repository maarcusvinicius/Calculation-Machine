var InputCampoUm = document.getElementById("PrimeiroCampo");
var InputCampoDois = document.getElementById("SegundoCampo");

var resultado = document.getElementById("resultado");

var card = document.getElementById("card1");
var enviar = document.getElementById("botao");

var check = document.getElementById("confirm");
card.style.visibility = "hidden";

function v () {
  botaoHandler();
  function botaoHandler() {
    event.preventDefault();
    console.log("Botão Clicado!");
  }
if (check.checked) {
  card.style.visibility = "visible";
  calcular();
} else {
  console.log("Algo deu errado");
}
}
function calcular() {
  console.log("Calculando...");

  let larguraDaParede = InputCampoUm.value;
  let alturaDaParede = InputCampoDois.value;

  let area = larguraDaParede * alturaDaParede;
  let tinta = area / 2;

  console.log(area, tinta);

  resultado.innerHTML = `<p>Sua parede tem a dimensão de ${larguraDaParede}x${alturaDaParede} e sua área é de ${area}m²</p>`;
  resultado.innerHTML += `<p>Para pintar essa parede, você presisará de ${tinta}L de tinta</p>`;
}
