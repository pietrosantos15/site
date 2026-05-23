const menuButton = document.querySelector('#menuButton');
const mobileNav = document.querySelector('#mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = !mobileNav.classList.contains('hidden');
    mobileNav.classList.toggle('hidden');
    menuButton.setAttribute('aria-expanded', String(!isOpen));
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav-link')];

if (sections.length && navLinks.length) {
  const setActiveLink = () => {
    const current = sections
      .map((section) => ({
        id: section.id,
        top: Math.abs(section.getBoundingClientRect().top - 110)
      }))
      .sort((a, b) => a.top - b.top)[0];

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current.id}`);
    });
  };

  setActiveLink();
  window.addEventListener('scroll', setActiveLink, { passive: true });
}
