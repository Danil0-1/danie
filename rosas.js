const canvas = document.getElementById('rosas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const rosas = [];

for (let i = 0; i < 30; i++) {
  rosas.push({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 15 + Math.random() * 10,
    speed: 1 + Math.random() * 2,
    drift: Math.random() * 1
  });
}

const rosaImg = new Image();
rosaImg.src = 'rosa.png'; 

function draw() {
  ctx.clearRect(0, 0, width, height);

  for (let rosa of rosas) {
    ctx.drawImage(rosaImg, rosa.x, rosa.y, rosa.r, rosa.r);
    rosa.y += rosa.speed;
    rosa.x += Math.sin(rosa.y * 0.01) * rosa.drift;

    if (rosa.y > height) {
      rosa.y = -20;
      rosa.x = Math.random() * width;
    }
  }

  requestAnimationFrame(draw);
}

rosaImg.onload = draw;

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});