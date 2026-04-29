// Highlight active nav link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.style.textDecoration = 'none');
    link.style.textDecoration = 'underline';
  });
});

// Placeholder for chatbot integration
// Example: load ManyChat or Dialogflow widget here
// window.onload = () => { loadChatbot(); };
