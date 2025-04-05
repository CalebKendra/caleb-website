let dropdownToggle = document.querySelector('.dropdown-button')
let bars = document.querySelectorAll('.dropdown-bar')

function toggleHamburger(e) {
  bars.forEach(bar => bar.classList.toggle('dropdown-x'))
}

dropdownToggle.addEventListener('click', toggleHamburger)
