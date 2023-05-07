// Get the button elements
const toggleLightButton = document.getElementById('toggleLight');
const toggleDarkButton = document.getElementById('toggleDark');

// Add click event listeners to the buttons
toggleLightButton.addEventListener('click', function() {
  // Get the body element
  const body = document.body;

  // Remove the 'dark' class and add the 'light' class to the body element
  body.classList.remove('dark');
  body.classList.add('light');
});

toggleDarkButton.addEventListener('click', function() {
  // Get the body element
  const body = document.body;

  // Remove the 'light' class and add the 'dark' class to the body element
  body.classList.remove('light');
  body.classList.add('dark');
});