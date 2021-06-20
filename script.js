const slides = document.body.querySelectorAll(".slide");

function clearClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

document.body.addEventListener("click", function (event) {
  if (!event.target.closest(".slide")) return;
  clearClasses();
  event.target.closest(".slide").classList.add("active");
});
