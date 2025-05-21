const body = document.body;
const toggleBtn = document.getElementById('toggle');

// Default is light mode
body.classList.remove('dark');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
});
