feather.replace();

// Menu toggle
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Scroll Up
const backTop = document.querySelector(".back-top");
window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 88) {
    backTop.style.display = "flex";
  } else {
    backTop.style.display = "none";
  }
}

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
    // duration: 123
  });
});
