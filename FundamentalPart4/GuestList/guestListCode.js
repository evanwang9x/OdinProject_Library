const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const btn = document.getElementById("firstBtn")

btn.addEventListener("click", () => {
    const refused = document.createElement("p");
    refused.textContent = "Denied Guests: "
    const admitted = document.createElement("p");
    admitted.textContent = "Admitted Guests: "


    for (let i = 0; i < people.length; i++) {

        if (i == people.length-1) { 
//This if section is to fix an issue where at the end of my output it gives "Sam, Kay," 
//and I wish to remove that extra comma behind Kay without hardcoding it
            if (people[i] == "Phil") {
                refused.textContent += `${people[i]}, `
            }
            else if(people[i] == "Lola") {
                refused.textContent += `${people[i]}`
            }
            else {
                admitted.textContent += `${people[i]}`
            }
        }

        else {
            if (people[i] == "Phil") {
                refused.textContent += `${people[i]}, `
            }
            else if(people[i] == "Lola") {
                refused.textContent += `${people[i]}`
            }
            else {
                admitted.textContent += `${people[i]}, `
            }
        }
    }

    const admittedOutput = document.getElementById("admitted")
    admittedOutput.appendChild(admitted)

    const deniedOutput = document.getElementById("rejected")
    deniedOutput.appendChild(refused)








})