document.addEventListener("DOMContentLoaded", () => {
  const SLIDE_WIDTH = 600;
  const prevBtn = document.querySelector("button.prev");
  const nextBtn = document.querySelector("button.next");
  const slides = document.querySelector("div.slides");
  const sldCount = document.querySelectorAll(
    "div.slides attr_container"
  ).length;

  let position = 0;
  let curPosition = 0;
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (curPosition > 0) {
        position += SLIDE_WIDTH;
        slides.style.transform = `translateX(${position}px)`;
        curPosition--;
      }
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (curPosition < sldCount - 1) {
        position -= SLIDE_WIDTH;
        slides.style.transform = `translateX(${position}px)`;
        curPosition++;
      }
    });
  }
});
