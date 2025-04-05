let dropdownToggle = document.querySelector('.dropdown-button');
let dropdownContent = document.querySelector('.dropdown-content');
let bars = document.querySelectorAll('.dropdown-bar');

function toggleHamburger(e) {
  if (!bars[0].classList.contains('dropdown-x')) {
    dropdownContent.setAttribute("style", "display: flex;")
    dropdownToggle.setAttribute("style", "position: fixed;")
  } else {
    dropdownContent.setAttribute("style", "display: none;")
    dropdownToggle.setAttribute("style", "position: absolute;")
  }

  bars.forEach(bar => bar.classList.toggle('dropdown-x'));
}

dropdownToggle.addEventListener('click', toggleHamburger);
