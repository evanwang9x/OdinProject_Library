const headButton = document.getElementById("headerButton")
const buttons = document.querySelectorAll('.leftHandButtons', ".selectedButton");
const addTask = document.getElementById("addTask")
const createTaskPanel = document.getElementById("createTaskPanel")
const panelAddTask = document.getElementById("addToDo")
const rightHandContainer = document.getElementById("rightHandContainer")


window.onload = function(){
    button1.classList.remove("leftHandButtons")
    button1.classList.add("selectedButton")
}

headButton.addEventListener('click', function() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
})
buttons.forEach(button => {
    button.addEventListener("mouseover", function() {
        this.style.cursor = "pointer";
        if(this.classList.contains("leftHandButtons")){
            this.style.backgroundColor = "rgb(204,204,204)"
        }
    })
    button.addEventListener("mouseout", function(){
       this.style.backgroundColor = "";
       this.style.cursor = "";
    })
    button.addEventListener("click", function() {
        buttons.forEach(btn => {
            btn.classList.remove("selectedButton")
            btn.classList.add('leftHandButtons') 
        });
        this.classList.remove("leftHandButtons")
        this.classList.add("selectedButton")
    })
})
addTask.addEventListener('click', function() {
    addTask.style.display = 'none';
    createTaskPanel.style.display = "block"
})  
panelAddTask.addEventListener('click', function(){
    createTaskPanel.style.display = "none"
    addTask.style.display = "block"
    var toDoTitle = document.getElementById("toDoTitle").value;
    var toDoDetails = document.getElementById("toDoDetails").value;
    var userDate = document.getElementById("myDateInput").value

    var checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.className = "completionCheckMark"

    var header1 = document.createElement('h1')
    header1.className = "titleName"
    header1.textContent = toDoTitle

    var detailButton = document.createElement('button')
    detailButton.className = "details"
    detailButton.textContent = "Details"

    var secondHeader1 = document.createElement('h1')
    secondHeader1.className = "dateButton"
    secondHeader1.textContent = userDate

    var editButton = document.createElement("button")
    editButton.className = "editButton"
    editButton.textContent = "Edit"

    var deleteButton = document.createElement("button")
    deleteButton.className = "deleteButton"
    deleteButton.textContent = "Delete"

    var newDiv = document.createElement('div');
    newDiv.className = "newDivStyle"
    newDiv.appendChild(checkbox)
    newDiv.appendChild(header1)
    newDiv.appendChild(detailButton)
    newDiv.appendChild(secondHeader1)
    newDiv.appendChild(editButton)
    newDiv.appendChild(deleteButton)
    rightHandContainer.appendChild(newDiv)
})

