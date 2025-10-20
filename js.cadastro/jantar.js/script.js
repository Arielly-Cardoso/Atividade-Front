function verificarComida() {
  // Lendo os elementos do HTML
  let input = document.getElementById("comida");
  let resultado = document.getElementById("resultado");

  let comida = input.value.toLowerCase().trim();

  // Condições
  if (comida === "pão com ovo") {
    resultado.textContent = "Isso é café da manhã";
  } else if (comida === "feijão com arroz") {
    resultado.textContent = "Isso é almoço";
  } else if (comida === "") {
    resultado.textContent = "Você não digitou nada! Parece que é janta";
  } else {
    resultado.textContent = "Isso é jantar";
  }
}