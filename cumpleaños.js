function verificarCumple() {
  const input = document.getElementById("respuesta");
  const respuesta = input.value.trim().toLowerCase();
  const resultado = document.getElementById("resultado");

  const cumpleRegex = /^(6|06)[\s\/\-]?de[\s\-]?mayo$|^(6|06)[\s\/\-]?mayo$|^(06|6)[\/\-](05|5)(?:[\/\-]\d{4})?$/;

  resultado.innerHTML = ""; 

  if (cumpleRegex.test(respuesta)) {
    resultado.innerHTML = `<p style="color:#c0ffcc;">Si, Dany cumple el 6 de mayo </p>`;
    mostrarContador(resultado);
  } else {
    input.disabled = true;
    resultado.innerHTML = `<p style="color: #ffcdd2;">Dany no cumple ese dia 😞</p>`;

  }
}

function mostrarContador(container) {
  const hoy = new Date();
  const añoActual = hoy.getFullYear();
  let proximoCumple = new Date(añoActual, 4, 6); 

  if (hoy > proximoCumple) {
    proximoCumple = new Date(añoActual + 1, 4, 6);
  }

  const diffTiempo = proximoCumple - hoy;
  const diasFaltan = Math.ceil(diffTiempo / (1000 * 60 * 60 * 24));

  container.innerHTML += `<p>Faltan <strong>${diasFaltan}</strong> dias para su cumple el <strong>6 de mayo</strong></p>`;
}

function verificarPerro() {
  const respuesta = document.getElementById("perro").value.trim().toLowerCase();
  const resultado = document.getElementById("resultado-perro");

  if (respuesta === "kitty" || respuesta === "danilo" || respuesta === "Danilo") {
    resultado.innerHTML = `<p style="color:#c0ffcc;">Si, el perro se llama asi </p>`;
  } else {
    resultado.innerHTML = `<p style="color: #ffcdd2;">No, su perro no se llama asi jasdhf</p>`;
  }
}

function verificarColor() {
  const respuesta = document.getElementById("color").value.trim().toLowerCase();
  const resultado = document.getElementById("resultado-color");

  if (respuesta === "azul") {
    resultado.innerHTML = `<p style="color:#c0ffcc;">Si, Su color favorito es el azul 💙</p>`;
  } else {
    resultado.innerHTML = `<p style="color: #ffcdd2;">Ese no es su color favorito 😔</p>`;
  }
}
