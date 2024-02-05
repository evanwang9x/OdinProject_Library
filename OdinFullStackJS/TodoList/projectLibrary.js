const headButton = document.getElementById("headerButton")
const buttons = document.querySelectorAll('.leftHandButtons', ".selectedButton");
const addTask = document.getElementById("addTask")
const createTaskPanel = document.getElementById("createTaskPanel")
const panelAddTask = document.getElementById("addToDo")
const newTaskHolder = document.getElementById("newTaskHolder")
const editToDo = document.getElementById("editToDo")
const inboxButton = document.getElementById("button1")
const todayButton = document.getElementById("todayButton")
const weekButton = document.getElementById("weekButton")

var tasks = {};
window.onload = function(){
    button1.classList.remove("leftHandButtons")
    button1.classList.add("selectedButton")
    var savedTasks = localStorage.getItem('tasks');
    if(savedTasks) {
        tasks = JSON.parse(savedTasks);
        for(let taskId in tasks){
            var toDoTitle = tasks[taskId].title
            var toDoDetails = tasks[taskId].details
            var userDate = tasks[taskId].date

            var detailButton = detailButtonCreation()
            var editButton = editButtonCreation()
            var header1 = titleNameCreation(toDoTitle)
            var secondHeader1 = dateCreation(userDate)
            var deleteButton = deleteButtonCreation()
            var detailsContainer = detailsContainerCreation(toDoDetails)
            var detailsContainer = detailsContainerCreation()
            var closeOut = closeOutCreation()
            var detailsTitle = detailsTitleCreation(toDoTitle)
            var detailsDescription = detailsDescriptionCreation(toDoDetails)
            detailsContainer.append(detailsTitle)
            detailsContainer.append(detailsDescription)
            detailsContainer.append(closeOut)
            var titleContainerLeft = document.createElement("div")
            titleContainerLeft.className = "titleContainerLeft"
            var detailDateEditDeleteContainer = document.createElement("div")
            detailDateEditDeleteContainer.className = "detailDateEditDeleteContainer"
        
            titleContainerLeft.appendChild(checkboxCreation())
            titleContainerLeft.appendChild(header1)
            detailDateEditDeleteContainer.appendChild(detailButton)
            detailDateEditDeleteContainer.appendChild(secondHeader1)
            detailDateEditDeleteContainer.appendChild(editButton)
            detailDateEditDeleteContainer.appendChild(deleteButton)
            var newDiv = document.createElement('div');
            newDiv.className = "newDivStyle"
            newDiv.appendChild(titleContainerLeft)
            newDiv.appendChild(detailDateEditDeleteContainer)
            newTaskHolder.appendChild(newDiv)
            newTaskHolder.appendChild(detailsContainer)
            
            detailButton.addEventListener('click', function(event){
                event.stopPropagation();
                detailsContainer.style.display = "block"
            }) 
            deleteButton.addEventListener('click', function(event) {
                event.stopPropagation();
                newDiv.remove();
                var taskId = this.closest('.newDivStyle').dataset.taskId;
                console.log("Deleting task with ID:", taskId);
                console.log("Task before deletion:", tasks[taskId]);
                delete tasks[taskId];;
                console.log("Task after deletion:", taskId);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            });    
            closeOut.addEventListener('click', function(event) {
                event.stopPropagation();
                detailsContainer.style.display = "none"
            })
            editButton.addEventListener('click', function(event){
                event.stopPropagation
                var taskId = this.closest('.newDivStyle').dataset.taskId;
            
                document.getElementById("toDoTitle").value = tasks[taskId].title;
                document.getElementById("toDoDetails").value = tasks[taskId].details;
                document.getElementById("myDateInput").value = tasks[taskId].date;
            
                createTaskPanel.style.display = "block"
                addTask.style.display = "none"
                document.getElementById('addToDo').style.display = 'none';
                document.getElementById('editToDo').style.display = 'block';})
            
                editToDo.addEventListener("click",function() {
                    var updatedTitle = document.getElementById("toDoTitle").value;
                    var updatedDetails = document.getElementById("toDoDetails").value;
                    var updatedDate = document.getElementById("myDateInput").value
                    tasks[taskId] = {
                        title: updatedTitle,
                        details: updatedDetails,
                        date: updatedDate
                    };
                    header1.textContent = updatedTitle;
                    detailsTitle.textContent = updatedTitle
                    detailsDescription.textContent = updatedDetails;
                    if(updatedDate == "") {
                        secondHeader1.textContent = "No Due Date"
                    }
                    else{
                        secondHeader1.textContent = dateSimplifier(updatedDate)
                    }
                    createTaskPanel.style.display = "none"
                    addTask.style.display = "block"
                    localStorage.setItem('tasks', JSON.stringify(tasks));
            
                    document.getElementById('addToDo').style.display = 'block';
                    document.getElementById('editToDo').style.display = 'none';
                    document.getElementById("toDoTitle").value = '';
                    document.getElementById("toDoDetails").value = '';
                    document.getElementById("myDateInput").value = '';
                })





        }
    }
}
function createUniqueID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
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
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

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

    var detailButton = detailButtonCreation()
    var editButton = editButtonCreation()
    var header1 = titleNameCreation(toDoTitle)
    var secondHeader1 = dateCreation(userDate)
    var deleteButton = deleteButtonCreation()
    var detailsContainer = detailsContainerCreation(toDoDetails)
//Next 4 Lines are involved in detailsContainer, Taking a shortcut and not optimzing though.
    var detailsContainer = detailsContainerCreation()
    var closeOut = closeOutCreation()
    var detailsTitle = detailsTitleCreation(toDoTitle)
    var detailsDescription = detailsDescriptionCreation(toDoDetails)
    detailsContainer.append(detailsTitle)
    detailsContainer.append(detailsDescription)
    detailsContainer.append(closeOut)
    var titleContainerLeft = document.createElement("div")
    titleContainerLeft.className = "titleContainerLeft"
    var detailDateEditDeleteContainer = document.createElement("div")
    detailDateEditDeleteContainer.className = "detailDateEditDeleteContainer"

    titleContainerLeft.appendChild(checkboxCreation())
    titleContainerLeft.appendChild(header1)
    detailDateEditDeleteContainer.appendChild(detailButton)
    detailDateEditDeleteContainer.appendChild(secondHeader1)
    detailDateEditDeleteContainer.appendChild(editButton)
    detailDateEditDeleteContainer.appendChild(deleteButton)

    var newDiv = document.createElement('div');
    newDiv.className = "newDivStyle"
    newDiv.appendChild(titleContainerLeft)
    newDiv.appendChild(detailDateEditDeleteContainer)
    newTaskHolder.appendChild(newDiv)
    newTaskHolder.appendChild(detailsContainer)

    var taskId = createUniqueID();
    newDiv.dataset.taskId = taskId
    tasks[taskId] = {
        title: toDoTitle,
        details: toDoDetails,
        date: userDate
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.getElementById("toDoTitle").value = '';
    document.getElementById("toDoDetails").value = '';
    document.getElementById("myDateInput").value = '';


detailButton.addEventListener('click', function(event){
    event.stopPropagation();
    detailsContainer.style.display = "block"
}) 

deleteButton.addEventListener('click', function(event) {
    event.stopPropagation();
    newDiv.remove();
    var taskId = this.closest('.newDivStyle').dataset.taskId;
    delete tasks[taskId];;
    localStorage.setItem('tasks', JSON.stringify(tasks))
});    

closeOut.addEventListener('click', function(event) {
    event.stopPropagation();
    detailsContainer.style.display = "none"
})
editButton.addEventListener('click', function(event){
    event.stopPropagation
    var taskId = this.closest('.newDivStyle').dataset.taskId;

    document.getElementById("toDoTitle").value = tasks[taskId].title;
    document.getElementById("toDoDetails").value = tasks[taskId].details;
    document.getElementById("myDateInput").value = tasks[taskId].date;

    createTaskPanel.style.display = "block"
    addTask.style.display = "none"
    document.getElementById('addToDo').style.display = 'none';
    document.getElementById('editToDo').style.display = 'block';})

    editToDo.addEventListener("click",function() {
        var updatedTitle = document.getElementById("toDoTitle").value;
        var updatedDetails = document.getElementById("toDoDetails").value;
        var updatedDate = document.getElementById("myDateInput").value
        tasks[taskId] = {
            title: updatedTitle,
            details: updatedDetails,
            date: updatedDate
        };
        header1.textContent = updatedTitle;
        detailsTitle.textContent = updatedTitle
        detailsDescription.textContent = updatedDetails;
        if(updatedDate == "") {
            secondHeader1.textContent = "No Due Date"
        }
        else{
            secondHeader1.textContent = dateSimplifier(updatedDate)
        }
        createTaskPanel.style.display = "none"
        addTask.style.display = "block"
        localStorage.setItem('tasks', JSON.stringify(tasks));

        document.getElementById('addToDo').style.display = 'block';
        document.getElementById('editToDo').style.display = 'none';
        document.getElementById("toDoTitle").value = '';
        document.getElementById("toDoDetails").value = '';
        document.getElementById("myDateInput").value = '';
    })
})
todayButton.addEventListener("click", function() {
    const today = new Date()
    today.setHours(0,0,0,0)
    for(let taskId in tasks){
        const taskDate = new Date(tasks[taskId].date)
        taskDate.setMinutes(taskDate.getMinutes() + taskDate.getTimezoneOffset());
        const taskDiv = document.querySelector(`[data-task-id="${taskId}"]`);
        if(taskDate.toDateString() != today.toDateString()) {
            taskDiv.style.display = "none"
        }
        else{
            taskDiv.style.display = "flex"
        }
    }
})
inboxButton.addEventListener("click", function() {
    for(let taskId in tasks){
        const taskDiv = document.querySelector(`[data-task-id="${taskId}"]`);
            taskDiv.style.display = "flex"
    }
})
weekButton.addEventListener("click", function() {
    const today = new Date()
    today.setHours(0,0,0,0)
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); 
    startOfWeek.setHours(0,0,0,0)
    const endOfWeek = new Date(startOfWeek.getTime() + 7 * 24 * 60 * 60 * 1000); 

    for(let taskId in tasks){
        const taskDate = new Date(tasks[taskId].date)
        taskDate.setMinutes(taskDate.getMinutes() + taskDate.getTimezoneOffset());

        if (taskDate >= startOfWeek && taskDate < endOfWeek) {
            const taskDiv = document.querySelector(`[data-task-id="${taskId}"]`);
            if (taskDiv) {
                taskDiv.style.display = 'flex'; 
            }
        } else {
            const taskDiv = document.querySelector(`[data-task-id="${taskId}"]`);
            if (taskDiv) {
                taskDiv.style.display = 'none'; 
            }
        }
    }
})
function checkboxCreation(){
    var checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.className = "completionCheckMark"
    return checkbox;
}
function titleNameCreation(toDoTitle){
    var header1 = document.createElement('h1')
    header1.className = "titleName"
    header1.textContent = toDoTitle
    return header1;
}
function detailButtonCreation(){
    var detailButton = document.createElement('button')
    detailButton.className = "details"
    detailButton.id = "detailButton"
    detailButton.textContent = "Details"
    return detailButton;
}
function dateCreation(userDate){
    var secondHeader1 = document.createElement('h1')
    secondHeader1.className = "dateButton"
    if(userDate == "") {
        secondHeader1.textContent = "No Due Date"
    }
    else{
        secondHeader1.textContent = dateSimplifier(userDate)
    }
    return secondHeader1;
}
function editButtonCreation(){
    var editButton = document.createElement("button")
    editButton.className = "editButton"
    editButton.id = "editButton"
    var editImg = document.createElement("img")
    editImg.src = "photos//EditButton.png"
    editImg.className = "editButtonImage"
    editButton.append(editImg)
    return editButton
}
function deleteButtonCreation() {
    var deleteButton = document.createElement("button")
    deleteButton.className = "deleteButton"
    var deleteImg = document.createElement("img")
    deleteImg.src = "photos//Delete.png"
    deleteImg.className = "deleteButtonImage"
    deleteImg.id = "deleteButton"
    deleteButton.append(deleteImg)
    return deleteButton
}
function detailsContainerCreation(){
    var detailsContainer = document.createElement("div")
    detailsContainer.className = "detailsContainer"
    return detailsContainer
}
function closeOutCreation(){
    var closeOut = document.createElement("img")
    closeOut.src = "photos//closeout.png"
    closeOut.className = "closeOutImage"
    
    return closeOut
}
function detailsTitleCreation(toDoTitle){
    var detailsTitle = document.createElement("h1")
    detailsTitle.textContent = toDoTitle
    return detailsTitle
}
function detailsDescriptionCreation(toDoDetails){
    var detailsDescription = document.createElement("p")
    detailsDescription.textContent = toDoDetails
    detailsDescription.className = "detail-description"
    return detailsDescription
}