// function to shift the gradient container
function shiftContainer() {
    const gradient = document.getElementById('gradientSlide'); // get the gradient container
    gradient.classList.toggle('shiftLeft'); // if this function is added, the blue gradient will move to the left, otherwise to its orignal position
}

// loading spinner for member login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent form submission (page doesnt reload if the form is submitted)
    const loadingSpinner = document.getElementById('loadingSpinner'); // get the loading spinner
    loadingSpinner.style.display = 'block'; // show the spinner
    setTimeout(() => {
        loadingSpinner.style.display = 'none'; // hide the spinner after 2 seconds
    }, 2000);
});

// loading spinner for admin login
document.getElementById('adminLoginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission(similar to admin login)
    const loadingSpinner = document.getElementById('loadingSpinnerAdmin'); // get the loading spinner
    loadingSpinner.style.display = 'block'; // show the spinner
    setTimeout(() => {
        loadingSpinner.style.display = 'none'; // hide the spinner after 2 seconds
    }, 2000);
});