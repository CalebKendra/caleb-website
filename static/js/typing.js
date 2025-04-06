const sentences = [
    "Tech Enthusiast",
    "Full-Stack Developer",
    "50% Goalkeeper",
    "50% Bodybuilder"
];

let currentSentence = 0;
let currentChar = 0;
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter');
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenSentences = 1000;

function type() {
    const currentText = sentences[currentSentence];
    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, currentChar - 1);
        currentChar--;
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
