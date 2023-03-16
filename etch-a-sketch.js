let grid = document.querySelector('.grid');

let fullGridHeight = 960;

function getGridSize() {
    let gridSize = prompt("Please enter a grid size from 1-100");
    return gridSize;
}

function createGrid(gridSize,boxHeight) {
    for(let i=0; i<gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('id',"row"+i);
        grid.appendChild(row);
        
        for(let j=0; j<gridSize; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
            box.setAttribute('id',"box"+j);
            box.style.height = boxHeight+"px";
        }
    }
}

function destroyGrid(gridSize) {
    for(let i=0; i<gridSize; i++) {    
        let row = document.querySelector(`#row${i}`);
        for(let j=0; j<gridSize; j++) {
            let box = document.querySelector(`#box${j}`);
            row.removeChild(box);
        }
        grid.removeChild(row);
    }
};

let gridSize = 0;

let resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', () => {
    destroyGrid(gridSize);
    gridSize = getGridSize();
    let boxHeight = (fullGridHeight-gridSize*2)/gridSize; //box height that accounts for 1px border
    createGrid(gridSize, boxHeight);
});

addEventListener('mouseover', (e) => {
    e.target.classList.add('highlight');
});