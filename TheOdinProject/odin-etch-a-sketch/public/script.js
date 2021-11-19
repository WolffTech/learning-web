const colorPicker = document.getElementById('colorPicker');
const drawButton = document.getElementById('drawButton');
const clearButton = document.getElementById('clearButton');
const eraserButton = document.getElementById('eraserButton');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('grid');

const defaultSize = 16;
const defaultColor = "#000000";
const defaultMode = "draw";

let currentColor = defaultColor;
let currentSize = defaultSize;
let currentMode = defaultMode;

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    sizeValue.innerHTML = `${size} x ${size}`;

    drawButton.classList.add('active');
    eraserButton.classList.remove('active');

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseover', setCurrentColor);
        grid.appendChild(cell);
    }
}

function clearGrid() {
    grid.innerHTML = '';
}

function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
}

function setCurrentColor(e) {
    e.target.style.backgroundColor = colorPicker.value;
}

function setCurrentMode(mode) {
    currentMode = mode;
    switch (mode) {
        case 'draw':
            colorPicker.value = currentColor;
            drawButton.classList.add('active');
            eraserButton.classList.remove('active');
            break;
        case 'eraser':
            colorPicker.value = '#FFFFFF';
            drawButton.classList.remove('active');
            eraserButton.classList.add('active');
            break;
        default:
            console.error('Invalid mode');
            break;
    }
}

function setCurrentSize(size) {
    currentSize = size;
    sizeValue.innerHTML = `${size} x ${size}`;
    reloadGrid();
    console.log(currentSize);
}

colorPicker.onchange = (e) => setCurrentColor(e.target.value);
drawButton.onclick = () => setCurrentMode('draw');
eraserButton.onclick = () => setCurrentMode('eraser');
clearButton.onclick = () => reloadGrid();
sizeSlider.onchange = (e) => setCurrentSize(e.target.value);

window.onload = () => {
    setupGrid(defaultSize);
}