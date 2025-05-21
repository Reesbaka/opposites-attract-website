const body = document.body;
const toggle = document.getElementById('toggle');

// Default to light mode
body.classList.add('light');

toggle.addEventListener('click', () => {
  body.classList.toggle('light');
  body.classList.toggle('dark');
});
