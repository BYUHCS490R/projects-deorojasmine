document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (!form) return; 

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    
    message.textContent = "Thank you! Your message has been received.";
  });
});