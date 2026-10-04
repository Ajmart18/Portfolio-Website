
function sendEmail() {

  // Get the message the visitor typed
  const visitorMessage = document.getElementById("visitor-message").value;

  // Make sure the visitor actually wrote something
  if (visitorMessage.trim() === "") {
    alert("Please enter a message.");
    return;
  }

  // Email subject
  const subject = "Message from Ajani Martin's Portfolio Website";

  // Create the email
  const mailtoLink =
    "mailto:ajmart304@gmail.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(visitorMessage);

  // Open the visitor's email application
  window.location.href = mailtoLink;
}

const menueIcon = document.querySelector('#menue-icon');
const navLinks = document.querySelector('.nav-links');

menueIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

