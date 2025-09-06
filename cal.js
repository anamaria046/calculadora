const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");
const historial = document.getElementById("historial");

document.getElementById("sumar").addEventListener("click", () => {
  operar("sumar");
});

document.getElementById("restar").addEventListener("click", () => {
  operar("restar");
});

function operar(tipo) {
  const n1 = Number(num1.value);
  const n2 = Number(num2.value);
  const modal = document.getElementById('error-msg')
   if (n1 <= 0 || n2 <= 0) {
    modal.classList.add('show'); // Mostrar mensaje
    resultado.textContent = "Resultado: --";
    return; // 👈 salir de la función para no seguir calculando
  } else {
    modal.classList.remove('show'); // Ocultar si todo está bien
  }

  if (isNaN(n1) || isNaN(n2)) {
    alert("Por favor, ingresa números válidos");
    return;
  }

  let res;
  let simbolo;

  if (tipo === "sumar") {
    res = n1 + n2;
    simbolo = "+";
  } else {
    res = n1 - n2;
    simbolo = "-";
  }

  resultado.textContent = `Resultado: ${res}`;

  // Guardar en historial
  const p = document.createElement("p");
  p.textContent = `${n1} ${simbolo} ${n2} = ${res}`;
  historial.appendChild(p);
}