const headButton = document.getElementById("headerButton")
const buttons = document.querySelectorAll('.leftHandButtons', ".selectedButton");
const addTask = document.getElementById("addTask")
const createTaskPanel = document.getElementById("createTaskPanel")
const panelAddTask = document.getElementById("addToDo")
const newTaskHolder = document.getElementById("newTaskHolder")
var tasks = {};
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
addTask.addEventListener('click', function() { //This part is the button in the create task menu used to actually create the task.
    addTask.style.display = 'none';
    createTaskPanel.style.display = "block"
})  

function dateSimplifier(dateString){ //This is used to shorten the date from 06/04/2023 to June 4th
    if(dateString == "") {
        return ``
    }
    else {
    const date = new Date(dateString)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const suffix = ["th", "st", "nd", "rd"][
        day % 10 > 3 ? 0 : (day % 100 - day % 10 != 10) * day % 10
    ];
    return `${monthNames[monthIndex]} ${day}${suffix}`;
}
}
panelAddTask.addEventListener('click', function(){
    createTaskPanel.style.display = "none"
    addTask.style.display = "block"
    var toDoTitle = document.getElementById("toDoTitle").value;
    var toDoDetails = document.getElementById("toDoDetails").value;
    var userDate = document.getElementById("myDateInput").value

    var taskID = createUniqueId();
    newDiv.dataset.taskID = taskID

    var titleContainerLeft = document.createElement("div")
    titleContainerLeft.className = "titleContainerLeft"
    var detailDateEditDeleteContainer = document.createElement("div")
    detailDateEditDeleteContainer.className = "detailDateEditDeleteContainer"

    var checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.className = "completionCheckMark"
    titleContainerLeft.appendChild(checkbox)

    var header1 = document.createElement('h1')
    header1.className = "titleName"
    header1.textContent = toDoTitle
    titleContainerLeft.appendChild(header1)

    var detailButton = document.createElement('button')
    detailButton.className = "details"
    detailButton.id = "detailButton"
    detailButton.textContent = "Details"
    detailDateEditDeleteContainer.appendChild(detailButton)

    var secondHeader1 = document.createElement('h1')
    secondHeader1.className = "dateButton"
    if(userDate == "") {
        secondHeader1.textContent = "No Due Date"
    }
    else{
        this.style.marginLeft = 
        secondHeader1.textContent = dateSimplifier(userDate)
    }
    detailDateEditDeleteContainer.appendChild(secondHeader1)


    var editButton = document.createElement("button")
    editButton.className = "editButton"

    var editImg = document.createElement("img")
    editImg.src = "photos//EditButton.png"
    editImg.className = "editButtonImage"
    editButton.append(editImg)
    detailDateEditDeleteContainer.appendChild(editButton)

    var deleteButton = document.createElement("button")
    deleteButton.className = "deleteButton"
    var deleteImg = document.createElement("img")
    deleteImg.src = "photos//Delete.png"
    deleteImg.className = "deleteButtonImage"
    deleteImg.id = "deleteButton"
    deleteButton.append(deleteImg)
    detailDateEditDeleteContainer.appendChild(deleteButton)

    var detailsContainer = document.createElement("div")
    detailsContainer.className = "detailsContainer"

    var detailsTitle = document.createElement("h1")
    detailsTitle.textContent = toDoTitle
    var detailsDescription = document.createElement("p")
    var closeOut = document.createElement("img")
    closeOut.src = "photos//closeout.png"
    closeOut.className = "closeOutImage"
    detailsContainer.appendChild(closeOut)
    detailsDescription.textContent = toDoDetails
    detailsDescription.className = "detail-description"
    detailsContainer.appendChild(detailsTitle)
    detailsContainer.appendChild(detailsDescription)


    var newDiv = document.createElement('div');
    newDiv.className = "newDivStyle"
    newDiv.appendChild(titleContainerLeft)
    newDiv.appendChild(detailDateEditDeleteContainer)
    newTaskHolder.appendChild(newDiv)
    newTaskHolder.appendChild(detailsContainer)

    document.getElementById("toDoTitle").value = '';
    document.getElementById("toDoDetails").value = '';
    document.getElementById("myDateInput").value = '';


closeOut.addEventListener('click', function(event) {
    event.stopPropagation();
    detailsContainer.style.display = "none"
})
detailButton.addEventListener('click', function(event){
    event.stopPropagation();
    detailsContainer.style.display = "block"
}) 
deleteButton.addEventListener('click', function(event) {
    event.stopPropagation();
    newDiv.remove();
});
editButton.addEventListener('click', function(event){
    event.stopPropagation
    createTaskPanel.style.display = "block"
    addTask.style.display = "none"

})
    
})




