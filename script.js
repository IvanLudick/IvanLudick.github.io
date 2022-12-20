const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('item-nav')[0]
const bodyColor = document.getElementsByClassName('section-1')[0]
const toggleButtonOff = document.getElementsByClassName('toggle-2')[0]

toggleButton.addEventListener('click', () => {
  if (navbarLinks.classList.toggle('active'),
    bodyColor.classList.toggle('change')) {
    toggleButton();
    color();
  }
})

toggleButtonOff.addEventListener('click', () => {
  if (navbarLinks.classList.toggle('active'),
    bodyColor.classList.toggle('change')) {
    toggleButtonOff();
    color();
  }
})