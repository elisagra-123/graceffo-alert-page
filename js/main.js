(() => {
  const navButton = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');

  if (navButton && nav) {
    navButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navButton.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  const scrollButton = document.querySelector('#scrollTop');
  if (scrollButton) {
    const toggleVisibility = () => {
      scrollButton.classList.toggle('visible', window.scrollY > 360);
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();
    scrollButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.querySelectorAll('.copy-email').forEach((button) => {
    button.addEventListener('click', async () => {
      const target = document.getElementById(button.dataset.copyTarget || '');
      if (!target) {
        return;
      }
      const raw = target.getAttribute('href') || target.textContent || '';
      const email = raw.replace(/^mailto:/, '').trim();
      try {
        await navigator.clipboard.writeText(email);
        button.textContent = 'Copied';
        setTimeout(() => {
          button.textContent = 'Copy email';
        }, 1600);
      } catch {
        button.textContent = 'Copy unavailable';
      }
    });
  });
})();
