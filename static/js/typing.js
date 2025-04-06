const sentences = [
    "Tech Enthusiast",
    "Full-Stack Developer",
    "50% Goalkeeper",
    "50% Bodybuilder"
];

const calebBridge = document.getElementById('Bridge');
const calebHat = document.getElementById('Hat');
const calebCatch = document.getElementById('Catch');
const calebWind = document.getElementById('Wind');

const images = [calebBridge, calebHat, calebCatch, calebWind];

let currentSentence = 0;
let currentChar = 0;
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter');
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenSentences = 1000;

function fadeIn(element, progress) {
    element.style.opacity = progress;
}

function fadeOut(element, progress) {
    element.style.opacity = progress;
}

function type() {
    const currentText = sentences[currentSentence];
    const currentImage = images[currentSentence];

    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, currentChar - 1);
        currentChar--;
        fadeOut(currentImage, + currentChar / (currentText.length - 5));
        if (currentChar === 0) {
            isDeleting = false;
            currentSentence = (currentSentence + 1) % sentences.length;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, deletingSpeed);
        }
    } else {
        typewriterElement.textContent = currentText.substring(0, currentChar + 1);
        currentChar++;
        fadeIn(currentImage, 0.2 + currentChar / currentText.length);
        if (currentChar === currentText.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenSentences);
        } else {
            setTimeout(type, typingSpeed);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, typingSpeed);
});
