const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('item-nav')[0];
const bodyColor = document.getElementsByClassName('section-1')[0];
const toggleButtonOff = document.getElementsByClassName('toggle-2')[0];
const toggleScroll = document.getElementsByTagName('body')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')(bodyColor.classList.toggle('change')(toggleScroll.classList.toggle('fixed')));
});

toggleButtonOff.addEventListener('click', () => {
  if (navbarLinks.classList.toggle('active')(bodyColor.classList.toggle('change')(toggleScroll.classList.toggle('fixed')))) {
    toggleButtonOff();
  }
});

// eslint-disable-next-line no-unused-vars
function closeMenu(toggleButton) {
  navbarLinks.classList.toggle('active')(bodyColor.classList.toggle('change')(toggleScroll.classList.toggle('fixed')));
}