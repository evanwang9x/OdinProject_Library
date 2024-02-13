const leftArorw = document.getElementById("leftArrow")
const rightArrow = document.getElementById("rightArrow")
const slides = document.querySelectorAll(".slide")
const dotContainer = document.getElementById("dotContainer")

let currentSlideNumber = 0;

document.addEventListener('DOMContentLoaded', function() {
    for(let i =0; i < slides.length; i++){
        createDivDots()
    }
    slideDisplay(currentSlideNumber);
});
//Current Slide Starts at ZERO not 1 idk why I decided this.
function slideDisplay(index){
    index = currentSlideNumber
    if(index >= slides.length){
        currentSlideNumber = 0;
    }
    else if(currentSlideNumber <0){
        currentSlideNumber = slides.length - 1
    }

    slides.forEach(slide => {
        slide.style.display = "none";
    })

    index = currentSlideNumber;
    slides[currentSlideNumber].style.display = "block"
}
leftArrow.addEventListener("click", function(){
    slideDisplay(--currentSlideNumber);
})
rightArrow.addEventListener("click", function(){
    slideDisplay(++currentSlideNumber);
    console.log(currentSlideNumber)
})
function createDivDots(){
    var dots = document.createElement('div')
    dots.className = "dots"
    dotContainer.appendChild(dots)
}
