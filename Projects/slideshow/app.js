const Slider = document.querySelector(".slide");
const slideImages = document.querySelectorAll(".slide img");

// buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// Slide Count
let count = 1;
const size = slideImages[0].clientWidth;

Slider.style.transform = "translateX(" + -size * count + "px)";

// button listener

nextBtn.addEventListener("click", () => {
  if (count >= slideImages.length - 1) return;
  Slider.style.transition = "transform 0.4s ease-in-out";
  count++;
  Slider.style.transform = "translateX(" + -size * count + "px)";
});
prevBtn.addEventListener("click", () => {
  if (count <= 0) return;
  Slider.style.transition = "transform 0.4s ease-in-out";
  count--;
  Slider.style.transform = "translateX(" + -size * count + "px)";
});

Slider.addEventListener("transitionend", () => {
  if (slideImages[count].id === "lastClone") {
    Slider.style.transition = "none";
    count = slideImages.length - 2;
    Slider.style.transform = "translateX(" + -size * count + "px)";
  }
  if (slideImages[count].id === "firstClone") {
    Slider.style.transition = "none";
    count = slideImages.length - count;
    Slider.style.transform = "translateX(" + -size * count + "px)";
  }
});
