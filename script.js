// Select DOM elements
const circles = document.querySelectorAll('.circle');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentActiveIndex = 0;  // Initially, the first circle is active

// Function to update the active class on circles
function updateCircles() {
  circles.forEach((circle, index) => {
    if (index <= currentActiveIndex) {
      circle.classList.add('active');  // Add active class for circles before the current one
    } else {
      circle.classList.remove('active');  // Remove active class for circles after the current one
    }
  });

  // Enable/Disable buttons based on the current active index
  prevButton.disabled = currentActiveIndex === 0;
  nextButton.disabled = currentActiveIndex === circles.length - 1;
}

// Event listener for "Next" button
nextButton.addEventListener('click', () => {
  if (currentActiveIndex < circles.length - 1) {
    currentActiveIndex++;
    updateCircles();
  }
});

// Event listener for "Previous" button
prevButton.addEventListener('click', () => {
  if (currentActiveIndex > 0) {
    currentActiveIndex--;
    updateCircles();
  }
});

// Initial update to set up the circles and buttons
updateCircles();
