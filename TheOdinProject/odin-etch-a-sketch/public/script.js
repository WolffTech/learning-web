const colorPicker = document.getElementById('colorPicker');
const drawButton = document.getElementById('drawButton');
const clearButton = document.getElementById('clearButton');
const eraserButton = document.getElementById('eraserButton');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('grid');

const defaultSize = 16;
const defaultColor = "black";
const defaultMode = "draw";

let currentColor = defaultColor;
let currentSize = defaultSize;
let currentMode = defaultMode;

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseover', changeColor);
        grid.appendChild(cell);
    }
}

function clearGrid() {
    grid.innerHTML = '';
}

function reloadGrid() {
    clearGrid();
    setupGrid(defaultSize);
}

function changeColor(e) {
    e.target.style.backgroundColor = colorPicker.value;

}

function setCurrentMode(mode) {
    currentMode = mode;
    switch (mode) {
        case 'draw':
            colorPicker.value = currentColor;
            break;
        case 'eraser':
            colorPicker.value = 'white';
            break;
        default:
            console.error('Invalid mode');
            break;
    }
}

colorPicker.onchange = (e) => setCurrentColor(e.target.value);
drawButton.onclick = () => setCurrentMode('draw');
eraserButton.onclick = () => setCurrentMode('eraser');
clearButton.onclick = () => reloadGrid();

window.onload = () => {
    setupGrid(defaultSize);
}