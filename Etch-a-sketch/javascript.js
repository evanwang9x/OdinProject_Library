const divContainer = document.getElementById("mainDivContainer")
const submitButton = document.getElementById("submitButton")

function gridSize(size){
    divContainer.style.gridTemplateColumns = `repeat(${size},1fr)`
    divContainer.style.gridTemplateRows = `repeat(${size},1fr)`
        for (let j = 0; j < size * size; j++) {
          const gridCell = document.createElement('div');
          gridCell.classList.add('grid-item');
  
          const nestedDiv = document.createElement('div');
          nestedDiv.classList.add('nested-container');
  
          gridCell.appendChild(nestedDiv);
          divContainer.appendChild(gridCell);
        }
      
}
gridSize(16)
submitButton.addEventListener('click', function() {
    const labelValue = document.getElementById("gridSize")
    const inputValue = labelValue.value
    const integerValue = parseInt(inputValue)
    setFlexSize(integerValue)
})

function setFlexSize(size) {
    divContainer.innerHTML=""
    gridSize(size)
}
