let dropdownHeader = document.getElementById('dropdown-header');
let dropdownToggle = document.querySelector('.dropdown-button');
let dropdownContent = document.querySelector('.dropdown-content');
let bars = document.querySelectorAll('.dropdown-bar');

function toggleHamburger(e) {
  if (!bars[0].classList.contains('dropdown-x')) {
    dropdownContent.setAttribute("style", "display: flex;")
    dropdownToggle.setAttribute("style", "position: fixed;")
    dropdownHeader.setAttribute("style", "color: var(--white);")
  } else {
    dropdownContent.setAttribute("style", "display: none;")
    dropdownToggle.setAttribute("style", "position: absolute;")
    dropdownHeader.setAttribute("style", "color: var(--black);")
  }

  bars.forEach(bar => bar.classList.toggle('dropdown-x'));
}

dropdownToggle.addEventListener('click', toggleHamburger);

window.addEventListener('resize', () => {
  if (window.innerWidth >= 680 && dropdownContent.style.display == "flex") {
    dropdownContent.setAttribute("style", "display: none;")
    dropdownToggle.setAttribute("style", "position: absolute;")
    dropdownHeader.setAttribute("style", "color: var(--black);")

    bars.forEach(bar => bar.classList.toggle('dropdown-x'));
  }
});
