const downArrow = document.getElementById("experience-arrow-down");
const upArrow = document.getElementById("experience-arrow-up");
console.log(upArrow,downArrow)

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
