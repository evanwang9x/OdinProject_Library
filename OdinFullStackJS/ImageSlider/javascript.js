const leftArorw = document.getElementById("leftArrow")
const rightArrow = document.getElementById("rightArrow")
const slides = document.querySelectorAll(".slide")
const dotContainer = document.getElementById("dotContainer")

let currentSlideNumber = 0;

document.addEventListener('DOMContentLoaded', function() {
    for(let i =0; i < slides.length; i++){
        createDivDots(i)
    }
    slideDisplay(0)
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
    const dots = dotContainer.querySelectorAll('.dots');

    dots.forEach((dot => {
        let dotSlideNumber = parseInt(dot.getAttribute('data-slide'), 10)
        console.log("This is the value of dotSlideNumber: " + dotSlideNumber + " and here is the value of the index: " + index)

        if (dotSlideNumber === index){
            dot.classList.add('active')
        }
        else{
            dot.classList.remove('active')
        }
    }))
    slides[currentSlideNumber].style.display = "block"
}
leftArrow.addEventListener("click", function(){
    slideDisplay(--currentSlideNumber);
})
rightArrow.addEventListener("click", function(){
    slideDisplay(++currentSlideNumber);
})
function createDivDots(i){
    var dots = document.createElement('div')
    dots.className = "dots"
    dots.setAttribute('data-slide', i)
    dotContainer.appendChild(dots)
}
