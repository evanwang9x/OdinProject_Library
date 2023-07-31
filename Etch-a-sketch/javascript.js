const divContainer = document.getElementById("mainDivContainer")
const submitButton = document.getElementById("submitButton")
const colorChoice = document.getElementById("colorChoice")
const colorButton = document.getElementById("colorButton")
const randomColorButton = document.getElementById("getRandomColor")
let color =""
gridSize(16)

function gridSize(size){
    divContainer.style.gridTemplateColumns = `repeat(${size},1fr)`
    divContainer.style.gridTemplateRows = `repeat(${size},1fr)`
        for (let j = 0; j < size * size; j++) {
          const gridCell = document.createElement('div');
          gridCell.classList.add('grid-item');
  
          const nestedDiv = document.createElement('div');
          nestedDiv.classList.add('nested-container');
          gridCell.addEventListener("mouseover", function() {
            colorChanger(gridCell, colorChoice.value)
          })
  
          gridCell.appendChild(nestedDiv);
          divContainer.appendChild(gridCell);
        }
}
randomColorButton.addEventListener('click', function() {
    color = "random"
})
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
function colorChanger(gridCell, colorStuff){
    if (color == "random") {
        let randomColorV2 = randomColor()
        gridCell.style.backgroundColor = randomColorV2
    }
    else {
    gridCell.style.backgroundColor = colorStuff
    }
}
function randomColor() {
    const r = Math.floor(Math.random() * 200 +56)
    const g = Math.floor(Math.random() * 200 +56)
    const b = Math.floor(Math.random() * 200 +56)

    const r1 = r.toString(16)
    const g1 = g.toString(16)
    const b1 = b.toString(16)


    const hexColor = `#${r1}${g1}${b1}`
    return hexColor
}
colorButton.addEventListener('click', function() {
    color=""
})