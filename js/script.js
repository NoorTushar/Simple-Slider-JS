const sliderSection = document.querySelector(".slider-item-section");

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let xValue = 0;

nextButton.addEventListener("click", () => {
  let imageCount = document.querySelectorAll(".slider-item-section img").length;
  let maxValue = (imageCount - 1) * -800;
  console.log(maxValue);
  if (xValue > maxValue) {
    xValue = xValue - 800;
    console.log(xValue);

    sliderSection.style.transform = `translateX(${xValue}px)`;
  }
});

prevButton.addEventListener("click", () => {
  if (xValue < 0) {
    xValue += 800;
    console.log(xValue);
    sliderSection.style.transform = `translateX(${xValue}px)`;
  }
});
