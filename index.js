const container = document.getElementById('container');

buildCanvas(16);

function adjustGrid(){
    let newSize = prompt("Enter new grid size (max: 100): ");

    if(newSize == null) return;

    newSize = parseInt(newSize);

    if(isNaN(newSize) || newSize <= 0 || newSize > 100){
        alert("Please enter a number between 1 and 100");
        return;
    }
    container.innerHTML = "";
    buildCanvas(newSize);
}

function buildCanvas(x) {
    for (let i = 0; i < (x * x); i++) {
    const divCell = document.createElement('div');
    container.appendChild(divCell);
    divCell.className = 'divCell';
    divCell.style.backgroundColor = 'white';
    divCell.style.height = (1000 / x) + 'px';
    divCell.style.width = (1000 / x) + 'px';
    divCell.addEventListener('mouseenter', () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        divCell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
    }
}

function clearCanvas() {
    // Get all the div elements (cells)
    const divCells = document.querySelectorAll('.divCell');
    divCells.forEach(divCell => {
      divCell.style.backgroundColor = 'white';  // Reset each cell to white
    });
  }
