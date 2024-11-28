const slider = document.getElementById('slider');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');

// Function to handle image click
document.querySelectorAll('.slider .item img').forEach((img) => {
    img.addEventListener('click', (e) => {
        // Stop spinning
        slider.style.animationPlayState = 'paused';

        // Show overlay with the clicked image
        overlayImage.src = e.target.src;
        overlay.style.display = 'flex';
    });
});

// Function to close the overlay
function closeOverlay() {
    overlay.style.display = 'none';
    slider.style.animationPlayState = 'running'; // Resume spinning
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
