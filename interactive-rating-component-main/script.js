const ratingBtn = document.querySelectorAll(".btn-rating")
const submitBtn = document.querySelector(".btn-submit")
const yourRating = document.querySelector(".your-rating")
const section1 = document.querySelector(".section1")
const section2 = document.querySelector(".section2")

ratingBtn.forEach( rating => {
    rating.addEventListener('click',() => {
        yourRating.textContent = rating.dataset.value
        section1.classList.add("dsply-none")
        section2.classList.remove("dsply-none")
    })
})