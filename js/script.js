function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const video = document.querySelector('video');
const playButton = document.querySelector('.btn-play');

playButton.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playButton.innerHTML = "Pause";
    } else {
        video.pause();
        playButton.innerHTML = "Play";
    }
});

function showModal(modalName) {
    const dialog = document.querySelector(`dialog[id=${modalName}]`);
    dialog.showModal();
}

function closeModal(modalName) {
    const dialog = document.querySelector(`dialog[id=${modalName}]`);
    dialog.close();
}

// Formulier
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const appointmentTime = document.getElementById('appointmentTime').value;
    alert(`Je hebt mij geboekt om de tijd: ${appointmentTime}`);
});
