document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.color-button'); 
    const body = document.querySelector('body');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.id === 'grey') {
                body.style.backgroundColor = 'grey';
            }
            if (e.target.id === 'blue') {
                body.style.backgroundColor = 'blue';
            }
            if (e.target.id === 'red') {
                body.style.backgroundColor = 'red';
            }
            if (e.target.id === 'green') {
                body.style.backgroundColor = 'green';
            }
        });
    });
});
