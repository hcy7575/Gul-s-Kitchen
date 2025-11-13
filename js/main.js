document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });

  const introOverlay = document.getElementById('introOverlay');
  const introLogo = document.getElementById('introLogo');
  const navLogo = document.getElementById('navLogo');
  const heroInner = document.getElementById('heroInner');
  const cardsCol = document.getElementById('cardsCol');
  const features = document.querySelector('.features');
  const navbar = document.getElementById('navbar');

  setTimeout(() => { introLogo.classList.add('show'); }, 80);

  const exitDelay = 2000;
  setTimeout(() => {
    introLogo.classList.add('exit');
    setTimeout(() => {
      navLogo.classList.remove('hidden');
      navLogo.style.opacity = 0;
      navLogo.style.transition = 'opacity .6s ease, transform .4s ease';
      navLogo.style.opacity = 1;
      navLogo.style.transform = 'none';
    }, 380);

    setTimeout(() => {
      introOverlay.style.pointerEvents = 'none';
      introOverlay.style.transition = 'opacity .45s ease .08s';
      introOverlay.style.opacity = 0;

      heroInner.classList.add('visible');
      cardsCol.classList.add('visible');
      if (features) features.classList.add('visible');

      setTimeout(() => {
        if (introOverlay && introOverlay.parentNode) introOverlay.parentNode.removeChild(introOverlay);
      }, 800);
    }, 650);
  }, exitDelay);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  const themeBtn = document.getElementById('themeToggle');
  const stored = localStorage.getItem('guls_theme') || 'dark';
  document.body.classList.toggle('light', stored === 'light');

  themeBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light');
    localStorage.setItem('guls_theme', isLight ? 'light' : 'dark');
  });

  document.querySelectorAll('.feature').forEach(el => {
    el.addEventListener('click', () => {
      const recipes = document.getElementById('recipes');
      if (recipes) recipes.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
