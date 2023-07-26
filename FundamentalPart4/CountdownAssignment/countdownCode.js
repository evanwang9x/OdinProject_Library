const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    const para = document.createElement("p");
    para.textContent = "Output: ";
    
    for (let i = 10; i >= 0; i--) {
        if(i === 10) {
            para.textContent += `Countdown ${i} `
            continue;
        }
        else if (i ===0) {
            para.textContent += `Blastoff!`
            continue;
        }
        else {
        para.textContent += `${i} `;
        }
    }
    const output = document.getElementById("output")
    output.appendChild(para);




});