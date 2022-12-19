const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('item-nav')[0]
const bodyColor = document.getElementsByTagName('body')[0]

toggleButton.addEventListener('click', () => {
  if (navbarLinks.classList.toggle('active'),
    bodyColor.classList.toggle('change')) {
    toggleButton();
    color();
  }
  
})
