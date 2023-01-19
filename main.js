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

const hide = document.getElementById('firstname');
const hide2 = document.getElementById('lastname');
const hide3 = document.getElementById('fullname');

window.addEventListener('resize', () => {
  if (screen.width <= 550) {
    hide.setAttribute('disabled', 'disabled');
    hide2.setAttribute('disabled', 'disabled');
    hide3.removeAttribute('disabled');
  } else if (screen.width > 550) {
    hide3.setAttribute('disabled', 'disabled');
    hide.removeAttribute('disabled');
    hide2.removeAttribute('disabled');
  }
});

window.addEventListener('load', () => {
  if (screen.width <= 550) {
    hide.setAttribute('disabled', 'disabled');
    hide2.setAttribute('disabled', 'disabled');
    hide3.removeAttribute('disabled');
  } else if (screen.width > 550) {
    hide3.setAttribute('disabled', 'disabled');
    hide.removeAttribute('disabled');
    hide2.removeAttribute('disabled');
  } else {
    removeEventListener('resize')
  }
});
