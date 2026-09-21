const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const form = document.getElementById('registrationForm');
const message = document.getElementById('formMessage');

form?.addEventListener('submit', () => {
  message.textContent = "Envoi de votre demande…";
});
