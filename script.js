const toggleBtn = document.querySelector(".nav-toggle");
const aside = document.querySelector(".aside");

toggleBtn.addEventListener("click", () => {
    aside.classList.toggle("close");
});

var Typed = new Typed(".typing", {
    strings: ["", "Frontend Developer", "Computer Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const counters = document.querySelectorAll(".progress div");

counters.forEach(counter => {
    const width = counter.style.width;
    counter.style.width = "0";
    setTimeout(() => {
        counter.style.width = width;
    }, 500);
});