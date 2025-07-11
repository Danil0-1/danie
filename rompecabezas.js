function mostrarRompecabezas() {
  document.getElementById('puzzle-section').style.display = 'block';
}

const container = document.getElementById('puzzle-container');
const mensaje = document.getElementById('mensajeFinal');
let piezas = [];
let seleccion = [];

// Crear piezas
for (let i = 0; i < 9; i++) {
  const div = document.createElement('div');
  div.className = 'piece';
  div.style.backgroundPosition = `-${(i % 3) * 100}px -${Math.floor(i / 3) * 100}px`;
  div.dataset.index = i;
  piezas.push(div);
}

// Mezclar y agregar al DOM
piezas.sort(() => Math.random() - 0.5);
piezas.forEach(p => container.appendChild(p));

// Intercambio por clic
container.addEventListener('click', e => {
  if (!e.target.classList.contains('piece')) return;

  if (seleccion.length === 0) {
    seleccion.push(e.target);
    e.target.style.outline = '2px solid hotpink';
  } else if (seleccion.length === 1 && e.target !== seleccion[0]) {
    seleccion.push(e.target);
    intercambiar();
  }
});

function intercambiar() {
  const [a, b] = seleccion;

  const tempPos = a.style.backgroundPosition;
  a.style.backgroundPosition = b.style.backgroundPosition;
  b.style.backgroundPosition = tempPos;

  const tempIndex = a.dataset.index;
  a.dataset.index = b.dataset.index;
  b.dataset.index = tempIndex;

  seleccion.forEach(p => p.style.outline = 'none');
  seleccion = [];

  verificarVictoria();
}

function verificarVictoria() {
  const piezasDOM = [...container.children];
  const correcta = piezasDOM.every((p, i) => Number(p.dataset.index) === i);
  if (correcta) {
    mensaje.textContent = "Completaste el rompecabezas 🥺";
  }
}
