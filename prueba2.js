//CANVAS2


const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawLight(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI); // Crea un círculo
    ctx.fillStyle = 'blue'; // Establece el color
    ctx.fill();
}

canvas.addEventListener('mousemove', (event) => {
    drawLight(event.clientX, event.clientY);
});