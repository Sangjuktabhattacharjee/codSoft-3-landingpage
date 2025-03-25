// Smooth scroll function
function scrollToMenu() {
  document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
}

// animations on scroll
window.addEventListener('scroll', () => {
  const aboutSection = document.querySelector('.about');
  const menuSection = document.querySelector('.menu');
  const contactSection = document.querySelector('.contact');

  const sectionPosition = window.scrollY + window.innerHeight;

  if (sectionPosition > aboutSection.offsetTop) {
      aboutSection.style.opacity = '1';
      aboutSection.style.transform = 'translateY(0)';
  }

  if (sectionPosition > menuSection.offsetTop) {
      menuSection.style.opacity = '1';
      menuSection.style.transform = 'translateY(0)';
  }

  if (sectionPosition > contactSection.offsetTop) {
      contactSection.style.opacity = '1';
      contactSection.style.transform = 'translateY(0)';
  }
});
