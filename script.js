// Fallback-safe ScrollReveal animations
if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal().reveal('.section h2', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    duration: 800
  });

  ScrollReveal().reveal('.product-card, .about-text, .contact-form', {
    interval: 200,
    distance: '30px',
    origin: 'bottom',
    duration: 800
  });
}

// Header background on scroll
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Highlight active nav link
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Word-by-word animation for welcome message
function animateWords(selector) {
  const element = document.querySelector(selector);
  if (!element) return;

  const words = Array.from(element.querySelectorAll('span'));
  words.forEach((span, i) => {
    span.style.opacity = 0;
    span.style.transition = `opacity 0.5s ease ${i * 200}ms`;
    setTimeout(() => {
      span.style.opacity = 1;
    }, i * 200);
  });
}

// Trigger text animation on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  animateWords('.animated-heading');
  setTimeout(() => {
    animateWords('.animated-subtext');
  }, 1500);
});
