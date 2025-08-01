
function calcular() {
  const ingreso = parseFloat(document.getElementById("ingresoMensual").value);
  const ahorroSugerido = ingreso * 0.2;
  const resultado = document.getElementById("resultado");

  if (isNaN(ingreso)) {
    resultado.textContent = "Por favor, ingresa un número válido.";
  } else {
    resultado.textContent = `Deberías ahorrar aproximadamente $${ahorroSugerido.toFixed(2)} al mes.`;
  }
}
