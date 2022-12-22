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

const toggleTonicPop = document.getElementsByClassName('project-btn')[0];
const tonicPopup = document.getElementsByClassName('tonic-popup')[0];
const tonicPopClose = document.getElementsByClassName('toggle-popup')[0];
const popupBlur = document.getElementsByClassName('header-section')[0];
const blurNav = document.getElementsByClassName('toolbar')[0];

toggleTonicPop.addEventListener('click', () => {
  tonicPopup.classList.toggle('show')(popupBlur.classList.toggle('blur')(blurNav.classList.toggle('dim')));
});

tonicPopClose.addEventListener('click', () => {
  if (tonicPopup.classList.toggle('show')(popupBlur.classList.toggle('blur')(blurNav.classList.toggle('dim')))) {
    tonicPopClose();
  }
});

const toggleMultiPop = document.getElementsByClassName('project-btn2')[0];
const multiPopup = document.getElementsByClassName('multi-popup')[0];
const multiPopClose = document.getElementsByClassName('toggle-popup2')[0];

toggleMultiPop.addEventListener('click', () => {
  multiPopup.classList.toggle('show')(popupBlur.classList.toggle('blur')(blurNav.classList.toggle('dim')));
});

multiPopClose.addEventListener('click', () => {
  if (multiPopup.classList.toggle('show')(popupBlur.classList.toggle('blur')(blurNav.classList.toggle('dim')))) {
    tonicPopClose();
  }
});

const toggleFacePop = document.getElementsByClassName('project-btn3')[0];
const facePopup = document.getElementsByClassName('facebook-popup')[0];
const facePopClose = document.getElementsByClassName('toggle-popup3')[0];

toggleFacePop.addEventListener('click', () => {
  facePopup.classList.toggle('show')(popupBlur.classList.toggle('blur')(blurNav.classList.toggle('dim')));
});

facePopClose.addEventListener('click', () => {
  if (facePopup.classList.toggle('show')(popupBlur.classList.toggle('blur')(blurNav.classList.toggle('dim')))) {
    tonicPopClose();
  }
});

const toggleUberPop = document.getElementsByClassName('project-btn4')[0];
const uberPopup = document.getElementsByClassName('uber-popup')[0];
const uberPopClose = document.getElementsByClassName('toggle-popup4')[0];

toggleUberPop.addEventListener('click', () => {
  uberPopup.classList.toggle('show')(popupBlur.classList.toggle('blur')(blurNav.classList.toggle('dim')));
});

uberPopClose.addEventListener('click', () => {
  if (uberPopup.classList.toggle('show')(popupBlur.classList.toggle('blur')(blurNav.classList.toggle('dim')))) {
    tonicPopClose();
  }
});