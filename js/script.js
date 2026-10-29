const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Filter the menu by pizza type.
const filterButtons = [...document.querySelectorAll('.filter-btn')];
const pizzaCards = [...document.querySelectorAll('.pizza-card')];
const menuCount = document.getElementById('menuCount');

function filterMenu(category) {
  let count = 0;
  pizzaCards.forEach(card => {
    const show = category === 'all' || card.dataset.category === category;
    card.classList.toggle('hidden', !show);
    if (show) count++;
  });
  menuCount.textContent = `${count} delicious ${count === 1 ? 'reason' : 'reasons'} to stay hungry`;
  filterButtons.forEach(button => button.classList.toggle('active', button.dataset.filter === category));
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => filterMenu(button.dataset.filter));
});

document.getElementById('showAllBtn').addEventListener('click', () => {
  filterMenu('all');
  document.querySelector('.filter-row').scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Demo add-to-order buttons; no payment or real order is placed.
const cartToast = document.getElementById('cartToast');
const toastText = document.getElementById('toastText');
let toastTimer;

document.querySelectorAll('[data-add]').forEach(button => {
  button.addEventListener('click', () => {
    toastText.textContent = `${button.dataset.add} added to your demo order!`;
    cartToast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => cartToast.classList.remove('show'), 3200);
  });
});

document.getElementById('closeToast').addEventListener('click', () => {
  cartToast.classList.remove('show');
});

// Demo newsletter form: validates email locally but doesn't send it anywhere.
const newsletterForm = document.getElementById('newsletterForm');
const newsletterMessage = document.getElementById('newsletterMessage');
newsletterForm.addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('email');
  if (!email.checkValidity()) {
    email.reportValidity();
    return;
  }
  newsletterMessage.textContent = `Thanks! ${email.value} is signed up in this demo. Connect a real service to collect subscribers.`;
  newsletterForm.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
