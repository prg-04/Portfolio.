/* eslint-disable no-restricted-globals */
const toggle = document.querySelector('.toggleMenu');
const navlink = document.querySelector('.navlinks');
let menuOpen = false;

toggle.addEventListener('click', () => {
  if (!menuOpen) {
    toggle.classList.add('open');
    menuOpen = true;
  } else {
    toggle.classList.remove('open');
    menuOpen = false;
  }

  navlink.classList.toggle('active');
});

const hide = document.getElementById('firstN');
const hide2 = document.getElementById('lastN');
const hide3 = document.getElementById('fullname');

window.addEventListener('resize', () => {
  if (screen.width < 550) {
    hide.setAttribute('disabled', '');
    hide2.setAttribute('disabled', '');
  } if (screen.width > 550) {
    hide3.setAttribute('disabled', '');
  } else {
    hide3.removeAttribute('disabled');
    hide.removeAttribute('disabled');
    hide2.removeAttribute('disabled');
  }
});