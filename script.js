let currentActive = 1;  // Initially, the first circle is active

// Get the circles and buttons
const circles = document.querySelectorAll('.circle');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

// Function to update the progress bar
function updateProgressBar() {
  // Remove the 'active' class from all circles
  circles.forEach(circle => {
    circle.classList.remove('active');
  });
  
  // Add the 'active' class to the current circle
  const activeCircle = document.getElementById(`circle-${currentActive}`);
  activeCircle.classList.add('active');
  
  // Enable or disable buttons based on the current circle
  if (currentActive === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }
  
  if (currentActive === circles.length) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

// Add event listeners to the buttons
nextButton.addEventListener('click', () => {
  if (currentActive < circles.length) {
    currentActive++;
    updateProgressBar();
  }
});

prevButton.addEventListener('click', () => {
  if (currentActive > 1) {
    currentActive--;
    updateProgressBar();
  }
});

// Initialize the progress bar when the page loads
updateProgressBar();
