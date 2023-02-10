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
const cardsData = [
  {
    class: 'ttl',
    class2: 'cards',
    heading: 'My Recent Works',
  },
  {
    class: ['img-hdr', 'langs'],

    divClasses: [
      'card cd1',
      'card cd2',
      'card cd3',
      'card cd4',
      'card cd5',
      'card cd6',
    ],
    listClass: 'cd-links',
    heading: ['Multi-Post Stories', 'Gain+Glory'],
    technologies: ['Ruby on Rails', 'css', 'Javascript', 'html'],

    btn: 'See Project',
    btnCls: 'cardBtn',
  },
];
const popupData = [
  {
    id: 'popup',
    divClasses: ['popimg', 'poptext', 'popHead', 'topBtns', 'btns'],
    classes: [
      'fa-solid fa-x close',
      'imgMob',
      'imgDesk',
      'popTtl',
      'btn seeLive',
      'btn seeLink',
      'popLinks',
      'link',
      'popPara',
    ],
    buttonText: ['See Live', 'See source'],
    images: ['./assets/mobile.png', './assets/popImg.png'],
    h2: 'Keeping track of hundreds of components',
    buttonLinks: [
      'https://prg-04.github.io/Portfolio_',
      'https://github.com/prg-04/Portfolio_',
    ],
    technologies: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",

  },
];

function createImg(src) {
  const img = document.createElement('img');
  img.src = src;
  return img;
}

function createDiv(cls) {
  const div = document.createElement('div');
  div.className = cls;
  return div;
}

function createDiv2(id) {
  const div = document.createElement('div');
  div.id = id;
  return div;
}

function createH3(txt) {
  const h3 = document.createElement('h3');
  h3.innerText = txt;
  return h3;
}
function createH2(txt) {
  const h2 = document.createElement('h2');
  h2.innerText = txt;
  return h2;
}

function createUl(cls) {
  const ul = document.createElement('ul');
  ul.className = cls;
  return ul;
}

function createLi(txt) {
  const li = document.createElement('li');
  li.innerText = txt;
  return li;
}

function createLists(arr) {
  const technologies = arr.map((elem) => {
    const li = createLi(elem);
    return li;
  });
  return technologies;
}

function createPara(txt) {
  const p = document.createElement('p');
  p.innerText = txt;
  return p;
}

function createBtn(txt) {
  const btn = document.createElement('button');
  btn.innerText = txt;
  return btn;
}

const work = document.getElementById('portfolio');

const title = createDiv(cardsData[0].class);
const h2 = createH2(cardsData[0].heading);
title.appendChild(h2);
work.appendChild(title);

function createCard(arr) {
  const card = arr.map((elem) => {
    const card = createDiv(elem);
    const div = createDiv(cardsData[1].class[0]);
    const div2 = createDiv(cardsData[1].class[1]);
    const h3 = createH3(cardsData[1].heading[0]);
    const h3m = createH3(cardsData[1].heading[1]);
    const ul = createUl(cardsData[1].listClass);
    const technologies = createLists(cardsData[1].technologies);
    technologies.map((list) => ul.appendChild(list));

    const btn = createBtn(cardsData[1].btn);
    btn.className = cardsData[1].btnCls;
    card.appendChild(div);
    div2.appendChild(h3);
    div2.appendChild(h3m);
    div2.appendChild(ul);
    div2.appendChild(btn);
    card.appendChild(div2);
    return card;
  });
  return card;
}

const cdContainer = createDiv(cardsData[0].class2);
const cards = createCard(cardsData[1].divClasses);
cards.map((card) => cdContainer.appendChild(card));
work.appendChild(cdContainer);

const modal = document.querySelector('.popup');

const arr = popupData[0].classes;
const [demo, src] = popupData[0].buttonText;
const [gitpages, github] = popupData[0].buttonLinks;
const [
  close,
  imgMob,
  imgDesk,
  popTtl,
  seeLive,
  seeLink,
  popLinks,
  link,
  popPara,
] = arr;
const popDiv = createDiv2(popupData[0].id);
const icon = document.createElement('i');
icon.className = close;
popDiv.appendChild(icon);
const popImg = createDiv(popupData[0].divClasses[0]);
const img1 = createImg(popupData[0].images[0]);
img1.className = imgMob;
popImg.appendChild(img1);

const img2 = createImg(popupData[0].images[1]);
img2.className = imgDesk;
popImg.appendChild(img2);
popDiv.appendChild(popImg);
modal.appendChild(popDiv);


const poptext = createDiv(popupData[0].divClasses[1]);
const popHead = createDiv(popupData[0].divClasses[2]);
const h2pop = createH2(popupData[0].h2);
h2pop.className = popTtl;
popHead.appendChild(h2pop);

const topBtnDiv = createDiv(popupData[0].divClasses[3]);
const btn1 = createBtn(popupData[0].buttonText[0]);
btn1.className = seeLive;
topBtnDiv.appendChild(btn1);

const btn2 = createBtn(popupData[0].buttonText[1]);
btn2.className = seeLink;
topBtnDiv.appendChild(btn2);
popHead.appendChild(topBtnDiv);
poptext.appendChild(popHead);

const ul = createUl(popLinks);

const technologies = createLists(popupData[0].technologies);

technologies.map((item) => {
  const elem = item;
  elem.className = link;

  return item.innerHTML === 'Bootstrap' || item.innerHTML === 'Terminal' || item.innerHTML === 'Codepen'
    ? elem
    : null;
});

technologies.map((list) => ul.appendChild(list));
poptext.appendChild(ul);

const txt = createPara(popupData[0].description);
txt.className = popPara;
poptext.appendChild(txt);

const bottomBtnDiv = createDiv(popupData[0].divClasses[4]);
const btn3 = createBtn(popupData[0].buttonText[2]);

btn3.className = seeLive;
btn3.innerHTML = demo;
bottomBtnDiv.appendChild(btn3);

const btn4 = createBtn(popupData[0].buttonText[3]);
btn4.className = seeLink;
btn4.innerHTML = src;
bottomBtnDiv.appendChild(btn4);
poptext.appendChild(bottomBtnDiv);
popDiv.appendChild(poptext);
modal.appendChild(popDiv);

const cardBtn = document.querySelectorAll('.cardBtn');
const body = document.querySelector('#portfolio');
const hero = document.querySelector('.hero');
const popup = document.querySelector('.popup');
const collapse = document.querySelector('.fa-x');

cardBtn.forEach((item) => {
  item.addEventListener('click', () => {
    popup.classList.add('open');
    body.classList.add('blur');
    hero.classList.add('blur');
  });
});

collapse.addEventListener('click', () => {
  popup.classList.remove('open');
  body.classList.remove('blur');
  hero.classList.remove('blur');
});

const demoLink = document.querySelectorAll('.seeLive');
const source = document.querySelectorAll('.seeLink');

demoLink.forEach((item) => {
  item.addEventListener('click', () => {
    window.location.href = gitpages;
  });
});

source.forEach((item) => {
  item.addEventListener('click', () => {
    window.location.href = github;
  });
});

const nameErr = document.querySelector('.fullNameError');
const emailErr = document.querySelector('.emailError');
const fullNValid = document.querySelector('.fullNValid');
const emailValid = document.querySelector('.emailValid');
const msgErr = document.querySelector('.msgError');
const msgValid = document.querySelector('.msgValid');
const submitErr = document.querySelector('.submitErr');
const submit = document.getElementById('submit');

function validateFullName() {
  const fullName = document.getElementById('fullname').value;

  if (fullName.length === 0) {
    nameErr.innerHTML = 'Full name is required';
    fullNValid.innerHTML = null;
    return false;
  }
  if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameErr.innerHTML = 'Enter second name';
    fullNValid.innerHTML = null;
    return false;
  }
  nameErr.innerHTML = null;
  fullNValid.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  const email = document.getElementById('email').value;

  if (email.length === 0) {
    emailErr.innerHTML = 'Email is required';
    emailValid.innerHTML = null;
    return false;
  }
  if (email.match(/[A-Z]/g)) {
    emailErr.innerHTML = 'Enter email in lowercase';
    emailValid.innerHTML = null;
    return false;
  }
  if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
  ) {
    emailErr.innerHTML = 'Email Invalid';
    emailValid.innerHTML = null;
    return false;
  }
  emailErr.innerHTML = null;
  emailValid.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}

function validateMsg() {
  const msg = document.getElementById('msg').value;
  const required = 30;

  const charLeft = required - msg.length;
  if (charLeft > 0) {
    msgErr.innerHTML = `${charLeft}more characters required`;
    msgValid.innerHTML = null;
    return false;
  }
  msgErr.innerHTML = null;
  msgValid.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}

function formValidate() {
  if (!validateFullName() || !validateEmail() || !validateMsg()) {
    submitErr.style.display = 'block';
    submitErr.style.color = 'red';
    submitErr.innerHTML = 'Please fix error to submit';
    setTimeout(() => {
      submitErr.style.display = 'none';
    }, 3000);
    return false;
  }
  submitErr.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}

submit.addEventListener('click', () => formValidate());

const navlinks = document.querySelectorAll('.link');

navlinks.forEach((item) => {
  item.addEventListener('click', () => {
    navlink.classList.remove('active');
    toggle.classList.remove('open');
  });
});
