const paths = document.querySelectorAll(".experience-dash");
const downArrow = document.getElementById("experience-arrow-down");
const upArrow = document.getElementById("experience-arrow-up");

downArrow.addEventListener("click", () => {
  upArrow.scrollIntoView({behavior: "smooth"});
});

upArrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 1050) {
    for (let i = 0; i < paths.length; i++) {
      paths[i].setAttribute("d", "M50 0 L 50 150")
    }
  } else {
    for (let i = 0; i < paths.length; i++) {
      if (i % 2 == 0) {
        paths[i].setAttribute("d", "M-45 1 C -45 75, 145 25, 145 99")
      } else {
        paths[i].setAttribute("d", "M-45 99 C -45 25, 145 75, 145 1")
      }
    }
  }
});
