let grid = document.querySelector('.grid');

let gridSize = 16

for(let i=0; i<gridSize; i++) {

    let row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);

    for(let j=0; j<gridSize; j++)
        {

            let box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
                        
        }
}