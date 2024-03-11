// ------navbar responsive
const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const togglebtn = document.querySelector(".toggle-btn");
const modebtn = document.querySelector(".toggle-switch-btn");
const content = document.querySelector(".contentbody");

modebtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});

// window load resize and toggle

document.addEventListener("DOMContentLoaded", function () {
  // Check the window size
  if (window.innerWidth <= 768) {
    sidebar.classList.add("close");
    content.classList.add("contentclose");
    togglebtn.classList.add("toggle-btn-rotate");
  }

  // Resize Check windows size
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 768) {
      sidebar.classList.add("close");
      content.classList.add("contentclose");
      togglebtn.classList.add("toggle-btn-rotate");
    } else {
      sidebar.classList.remove("close");
      content.classList.remove("contentclose");
      togglebtn.classList.remove("toggle-btn-rotate");
    }
  });

  // toggle btn
  togglebtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    content.classList.toggle("contentclose");
    togglebtn.classList.toggle("toggle-btn-rotate");
  });
});

// Master navlink collapsed
document.addEventListener("DOMContentLoaded", () => {
  const masternav = document.querySelector(".masterbtn");
  const sidenav = document.querySelector(".sidebar-link");

  sidenav.addEventListener("click", function () {
    masternav.classList.toggle("master-btn-rotate");
  });
});
