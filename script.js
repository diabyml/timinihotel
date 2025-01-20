const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const carouselItems = document.querySelectorAll(".carousel-item");

let currentIndex = 0;

// NAVIGATION BTN TOGGLER
document.querySelector(".toggle-menu").addEventListener("click", function () {
  console.log("clicked");
  document.querySelector(".primary-nav").classList.toggle("active");
});

function showCarouselItem(index) {
  carouselItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
}

// Previous button event
prevBtn.addEventListener("click", () => {
  currentIndex =
    currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
  showCarouselItem(currentIndex);
});

// Next button event
nextBtn.addEventListener("click", () => {
  currentIndex =
    currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
  showCarouselItem(currentIndex);
});

// Initial display
showCarouselItem(currentIndex);
