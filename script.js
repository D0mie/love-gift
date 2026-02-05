document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     THEME TOGGLE (ALL PAGES)
  ========================== */
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      // Persist theme in localStorage
      if (document.body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
      }
    });

    // Load saved theme
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.add("light-theme");
    }
  }

  /* =========================
     SCROLL TO STORY (INDEX)
  ========================== */
  window.scrollToStory = function () {
    const storySection = document.getElementById("story");
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* =========================
     GIFT INTERACTION (GIFTS)
  ========================== */
  window.openGift = function (type) {
    const display = document.getElementById("gift-display");
    if (!display) return;

    display.style.display = "block";

    if (type === "letter") {
      display.innerHTML = `
        <h2>My Love Letter 💌</h2>
        <p>
          Bubba, loving you has never been easy, but it has always been real.
          You’ve seen me in pain, in fear, in doubt, and you stayed.
          I don’t promise perfection, but I promise honesty,
          effort, and choosing you every day I can. I love you endlessly 💖
        </p>
      `;
    }

    if (type === "flowers") {
      display.innerHTML = `
        <h2>Virtual Flowers 🌹</h2>
        <ul>
          <li>Because you make me feel safe 🤍</li>
          <li>Because you try 💪🏽</li>
          <li>Because you stayed when it was hard 🫂</li>
          <li>Because I still see my future with you 🌍</li>
        </ul>
      `;
    }

    if (type === "promises") {
      display.innerHTML = `
        <h2>My Promises 🤍</h2>
        <p>
          I promise to communicate.
          I promise to heal honestly.
          I promise to grow with you.
          And I promise to love you with intention, not habit.
          Always choosing you, Bubba 💖
        </p>
      `;
    }

    display.scrollIntoView({ behavior: "smooth" });
  };

  /* =========================
     MEMORIES SLIDER
  ========================== */
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    showSlide(currentSlide);
  }

  function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
  }

  document.querySelectorAll(".prev").forEach(btn => btn.addEventListener("click", () => changeSlide(-1)));
  document.querySelectorAll(".next").forEach(btn => btn.addEventListener("click", () => changeSlide(1)));
  dots.forEach((dot, index) => dot.addEventListener("click", () => goToSlide(index)));

  if (slides.length > 0) showSlide(currentSlide);

  /* =========================
     FEATURE STARS (optional)
     For constellation pages
  ========================== */
  const stars = document.querySelectorAll(".feature-star");
  stars.forEach((star, index) => {
    setTimeout(() => {
      star.classList.add("show");
    }, 2500 + index * 1500);
  });

});
