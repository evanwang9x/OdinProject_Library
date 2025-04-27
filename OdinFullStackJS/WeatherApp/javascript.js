document.addEventListener("DOMContentLoaded", function() {
    const locationSearcher = document.getElementById("locationSearcher");

    locationSearcher.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            console.log("Enter key was pressed"); 
        }
    });
});
