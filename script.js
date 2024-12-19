//your JS code here. If required.
let currentActive = 1;
const circles = document.querySelectorAll('.circle');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

function updateProgress() {
    // Update the active class for each circle
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Disable/enable the buttons based on the current active circle
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

nextButton.addEventListener('click', () => {
    if (currentActive < circles.length) {
        currentActive++;
        updateProgress();
    }
});

prevButton.addEventListener('click', () => {
    if (currentActive > 1) {
        currentActive--;
        updateProgress();
    }
});

// Initialize the progress bar
updateProgress();
