const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const sliders = document.querySelectorAll(".slider__item")
let index = 0;
function chanheClassActive(niger) {
    for (const slide of sliders) {
        slide.classList.remove("active")
    }
    sliders[niger].classList.add("active")
}
function nextSlide() {
    index++;
    if (index > sliders.length - 1) {
        index = 0;
        chanheClassActive(index);
    } else {
        chanheClassActive(index);
    }
}



function prevSlide() {
    index--;
    if (index < 0) {
        index = sliders.length - 1;
        chanheClassActive(index);
    } else {
        chanheClassActive(index);
    }
}

prev.addEventListener("click", prevSlide)
next.addEventListener("click", nextSlide)

const InputMinutes = document.querySelector(".minutes");
const InputSeconds = document.querySelector(".seconds");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const btn1 = document.querySelector(".buttons-time__item_1");
const btn5 = document.querySelector(".buttons-time__item_5");
const btn10 = document.querySelector(".buttons-time__item_10");
let minutes = 20;
let seconds = 20;
let timer;


InputMinutes.value = minutes;
InputSeconds.value = seconds;
function startTimer() {
    if (seconds > 0) {
        seconds--;
        InputSeconds.value = seconds;

    } else if (seconds <= 0 && minutes <= 0) {
        InputSeconds.value = seconds;
        InputMinutes.value = minutes;

        clearInterval(timer);
    } else if (seconds === 0) {
        minutes--;
        InputMinutes.value = minutes;
        seconds = 60;
    }
}
start.addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(startTimer, 1000)
});
stop.addEventListener('click', () => {
    clearInterval(timer);
});
function setValue(min, sec) {
    clearInterval(timer);
    minutes = min;
    seconds = sec;
    InputMinutes.value = minutes;
    InputSeconds.value = seconds;
}

reset.addEventListener('click', () => {
    setValue(10, 0)
});
btn1.addEventListener('click', () => {
    setValue(1, 0)
});
btn5.addEventListener('click', () => {
    setValue(5, 0)
});
btn10.addEventListener('click', () => {
    setValue(10, 0)
});

InputMinutes.addEventListener("change", () => {
    minutes = InputMinutes.value;
})
InputSeconds.addEventListener("change", () => {
    if (InputSeconds.value == 60) {
        minutes++;
        seconds = 0;

        InputMinutes.value = minutes;
        InputSeconds.value = seconds;
    } else {
        seconds = InputSeconds.value;
    }
})


const rasdelItem = document.querySelectorAll(".rasdel__titel");

for(let elem of rasdelItem){
    elem.addEventListener("mouseover",()=>{
        elem.nextElementSibling.classList.add("active")
    })
    elem.addEventListener("mouseout",()=>{
        elem.nextElementSibling.classList.remove("active")
    })
}