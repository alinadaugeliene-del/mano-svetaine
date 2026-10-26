// Mobilus meniu
const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('#navLinks a').forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', false);
  })
);

// Meniu linija slenkant
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 10);
}, { passive: true });

// Elementų atsiradimas slenkant
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Knygos pranešimo forma (atidaro el. laišką Alinai)
const MY_EMAIL = 'labas@tavo-pastas.lt'; // pakeisk į savo el. paštą
document.getElementById('notifyForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('notifyEmail').value;
  const subject = encodeURIComponent('Noriu sužinoti apie knygą');
  const body = encodeURIComponent(`Sveiki, praneškite man, kai knyga bus išleista. Mano el. paštas: ${email}`);
  window.location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
  document.getElementById('notifyMsg').textContent = 'Ačiū! Pranešiu, kai tik knyga bus išleista.';
  e.target.reset();
});

// Metai apačioje
document.getElementById('year').textContent = new Date().getFullYear();
