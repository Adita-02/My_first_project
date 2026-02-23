

const menuIcon = document.getElementById('navbar__menu-icon');
const navLinks = document.getElementById('navbar__menu-links');
const menuItems = document.querySelectorAll('.navbar__menu-item');
const menuIconChild = menuIcon.querySelector('i');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  if (navLinks.classList.contains('open')) {
    menuIconChild.classList.remove('ri-menu-4-fill');
    menuIconChild.classList.add('ri-close-large-line');
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 100);
    });
  } else {
    menuIconChild.classList.remove('ri-close-large-line');
    menuIconChild.classList.add('ri-menu-4-fill');
    menuItems.forEach((item) => {
      item.classList.remove('show');
    });
  }
});
const cardImages = document.querySelectorAll('.header__card img');
const heroImage = document.querySelector('.header__hearo-image');

cardImages.forEach(image => {
  image.addEventListener('click', () => {
    const newImageSrc = image.getAttribute('data-image');
    heroImage.src = newImageSrc;
  });
});

const sr = ScrollReveal({
  distance: '50px',
  duration: 800,
  easing: 'ease-in-out',
  opacity: 0,
  scale: 0.8
});

sr.reveal('.header__content-section', { delay: 300 });
sr.reveal('.header__hero-section', { delay: 500 });
sr.reveal('.header__card', { interval: 200, origin: 'left', distance: '100px' });
sr.reveal('.header__social-links', { origin: 'right', delay: 700 });
document.querySelectorAll('.flyout-text').forEach((link) => {
  const text = link.textContent;
  link.innerHTML = ''; 
  text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.transitionDelay = `${index * 0.05}s`; 
      link.appendChild(span);
  });
});
const themeToggler = document.querySelector('.theme-toggler');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggler.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    themeIcon.classList.remove('ri-sun-line');
    themeIcon.classList.add('ri-moon-line');
  } else {
    themeIcon.classList.remove('ri-moon-line');
    themeIcon.classList.add('ri-sun-line');
  }
});
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'flex';
  } else {
    backToTopButton.style.display = 'none';
  }
});
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
