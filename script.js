// Selecting elements
const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Initialize the progress bar
let currentActive = 1;
circles[0].classList.add('active');

// Functions to update progress bar and buttons
function updateProgress() {
  // Set active class to current circle
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Disable/enable buttons based on currentActive
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

// Next button functionality
nextButton.addEventListener('click', () => {
  if (currentActive < circles.length) {
    currentActive++;
    updateProgress();
  }
});

// Previous button functionality
prevButton.addEventListener('click', () => {
  if (currentActive > 1) {
    currentActive--;
    updateProgress();
  }
});

// Initial progress update
updateProgress();
