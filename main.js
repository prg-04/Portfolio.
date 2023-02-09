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

const navlinks = document.querySelectorAll('.link');

navlinks.forEach((item) => {
  item.addEventListener('click', () => {
    navlink.classList.remove('active');
    toggle.classList.remove('open');
  });
});
