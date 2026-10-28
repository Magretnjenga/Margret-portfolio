document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.main-nav');
  if (button && nav) {
    button.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
      button.textContent = open ? '×' : '☰';
    });
  }
});
