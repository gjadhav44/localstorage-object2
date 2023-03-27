import './styles.scss';

import './styles.css';
window.onload = function () {
  // Check for LocalStorage support.
  if (localStorage) {
    // Add an event listener for form submissions
    document
      .getElementById('contactForm')
      .addEventListener('ubmit', function () {
        // Get the value of the name field.
        var name = document.getElementById('name').value;

        // Save the name in localStorage.
        localStorage.setItem('name', name);
      });
  }
};
