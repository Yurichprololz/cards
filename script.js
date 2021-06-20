const slides = document.body.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    clearClasses();
    slide.classList.add("active");
  });
});

function clearClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
