const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const form = document.getElementById('registrationForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = "Merci ! Votre demande est prête à être traitée. Pour recevoir réellement les formulaires, il faudra connecter ce formulaire à une adresse e-mail ou à un service de formulaire.";
  form.reset();
});
