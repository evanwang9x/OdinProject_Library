
document.getElementById("inputForm").addEventListener('submit', function(event){
    event.preventDefault();
    const emailInput = document.getElementById("emailInput").value
    const countryInput = document.getElementById("countryInput").value
    const zipInput = document.getElementById("zipInput").value
    const passwordInput = document.getElementById("passwordInput").value
    const passwordConfirmation = document.getElementById("passwordConfirmation").value

    console.log("emailInput value: " + emailInput)
    console.log("countryInput value: " + countryInput)
    console.log("zipInput value: " + zipInput)
    console.log("passwordInput: " + passwordInput)
    console.log("passwordConfirmation: " + passwordConfirmation)
})
