const button = document.getElementById('animateBtn');
const ball = document.getElementById('ball');

button.addEventListener('click', () => {
    // Remove the animation class to reset it
    ball.classList.remove('animate');
    // Force reflow to restart the animation
    void ball.offsetWidth;
    // Add the animation class to trigger the animation
    ball.classList.add('animate');
});
