document.addEventListener('DOMContentLoaded', function() {

const headButton = document.getElementById("headerButton");
const overlay = document.getElementById("overlay");
const hiddenForm = document.getElementById("myForm");
const bookButton = document.getElementById("showBookButton");

   
let storedValues = {
    bookTitle: "",
    bookAuthor: "",
    bookPages: "",
    checkBoxValue: false
};

headButton.addEventListener('click', function() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
});

bookButton.addEventListener('click', function() {
    hiddenForm.style.display = "block"
    overlay.style.display = "block"

    document.getElementById("bookName").value = storedValues.bookTitle;
    document.getElementById("bookAuthor").value = storedValues.bookAuthor;
    document.getElementById("bookPages").value = storedValues.bookPages;
    document.getElementById("bookread").checked = storedValues.checkBoxValue;
});

hiddenForm.addEventListener('submit', function(event) {
    event.preventDefault();
    hiddenForm.style.display = "none"
    overlay.style.display = "none"
    const bookTitle = document.getElementById("bookName").value
    const bookAuthor = document.getElementById("bookAuthor").value
    const bookPages = document.getElementById("bookPages").value
    const checkBoxValue = document.getElementById("bookread").checked

    const newDiv = document.createElement("div")
    const newHeader1 = document.createElement("h1")
    const newHeader2 = document.createElement("h2")
    const newHeader3 = document.createElement("h3")
    const newSubmitButton = document.createElement("button")
    const removeButton = document.createElement("button")

    newHeader1.textContent = `"${bookTitle}"`
    newHeader2.textContent = `${bookAuthor}`
    newHeader3.textContent = `${bookPages}`
    removeButton.textContent = `Remove`
    removeButton.classList = "removeButtonStyle"
    if(checkBoxValue == true) {
        newSubmitButton.textContent = "Read"
        newSubmitButton.classList = "newSubmitButtonRead"
    }
    else {
        newSubmitButton.textContent = "Not Read"
        newSubmitButton.classList = "newSubmitButtonNotRead"
    }
    newDiv.classList.add("newDivDisplay")
    newDiv.appendChild(newHeader1)
    newDiv.appendChild(newHeader2)
    newDiv.appendChild(newHeader3)
    newDiv.appendChild(newSubmitButton)
    newDiv.appendChild(removeButton)
    document.getElementById("mainContentSection").appendChild(newDiv)
});

document.getElementById("mainContentSection").addEventListener("click", function(event) {
    const target = event.target

    if(target.classList.contains("newSubmitButtonRead")) {
        target.textContent = "Not Read"
        target.classList.remove("newSubmitButtonRead")
        target.classList.add("newSubmitButtonNotRead")
    }
    else if(target.classList.contains("newSubmitButtonNotRead")) {
        target.textContent = "Read"
        target.classList.remove("newSubmitButtonNotRead")
        target.classList.add("newSubmitButtonRead")
    }
    else if(target.classList.contains("removeButtonStyle")) {
        target.parentElement.remove();
    }
})

});

