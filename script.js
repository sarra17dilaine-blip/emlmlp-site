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

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/maenookj', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    });

    if (response.ok) {
      message.textContent = "Merci ! Votre demande a bien été envoyée. Nous vous contacterons prochainement.";
      form.reset();
    } else {
      message.textContent = "Une erreur est survenue. Veuillez réessayer.";
    }
  } catch (error) {
    message.textContent = "Une erreur est survenue. Veuillez réessayer.";
  }
});
