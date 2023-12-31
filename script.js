const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increased');
const decreaseBtn = document.getElementById('decreased');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx  = canvas.getContext('2d');

isPresses = false
let size = 10
let color = 'black'
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPresses = true;

    x = e.offsetX
    y = e.offsetY

    console.log(isPresses, x, y)
})

canvas.addEventListener('mouseup', (e) => {
    isPresses = false;

    x = undefined
    y = undefined

    console.log(isPresses, x, y);
})

canvas.addEventListener('mousemove', (e) => {
    if(isPresses){
        const x2 = e.offsetX
        const y2 = e.offsetY

        // console.log(x2, y2);
        drawCircle(x2, y2);
        drawLine(x,y,x2, y2);

        x = x2
        y = y2
    }
})



function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0 , Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}


function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEl.innerText = size
}

// drawCircle(100, 200)
// drawLine(300, 300, 300, 550);

increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50){
        size = 50
    }

    updateSizeOnScreen()
})


decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5){
        size = 5
    }

    updateSizeOnScreen()
})


colorEl.addEventListener('change', (e) => {
    color = e.target.value
})


clearEl.addEventListener('click', () => {
    ctx.clearRect(0,0, canvas.width, canvas.height)
})