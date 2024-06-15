const wordContainer = document.getElementById('word-container');
const input = document.getElementById('input');
const scoreDisplay = document.getElementById('score');
const errorDisplay = document.getElementById('errors');
const nextBtn = document.getElementById('next-btn');

const levels = [
    { words: ['refrigerador', 'computadora', 'casa'] },
    { words: ['Marco', 'Tatiana', 'Fernanda'] },
    { words: ['A', 'B', 'C', 'D', 'E'] },
    { words: ['coche', 'bicicleta', 'pata', 'mano'] },
    { words: ['f', 'g', 'h', 'i', 'j'] },
    
];

let currentLevel = 0;
let currentIndex = 0;
let score = 0;
let errors = 0;

function displayWord() {
    wordContainer.textContent = levels[currentLevel].words[currentIndex];
}

function updateScore() {
    scoreDisplay.textContent = `Puntuación: ${score}`;
}

function updateErrors() {
    errorDisplay.textContent = `Errores: ${errors}`;
}

function checkWord(e) {
    if (e.key === 'Enter') {
        const typedWord = input.value.trim().toLowerCase(); // Convertir a minúsculas y quitar espacios en blanco
        const currentWord = levels[currentLevel].words[currentIndex].toLowerCase(); // Convertir la palabra actual a minúsculas
    
  
        if (typedWord === currentWord) {
            score++;
        } else {
            errors++;
        }
        
        currentIndex++;
        input.value = ''; // Limpiar la entrada
        
        if (currentIndex < levels[currentLevel].words.length) {
            displayWord();
        } else {
            if (currentLevel < levels.length - 1) {
                nextBtn.style.display = 'inline'; // Mostrar el botón para pasar al siguiente nivel
                input.disabled = true; // Deshabilitar el campo de entrada
            } else {
                wordContainer.textContent = '¡Felicidades! Has completado todos los niveles.';
                input.disabled = true;
            }
        }
        updateScore();
        updateErrors();
    }
}

function goToNextLevel() {
    currentLevel++;
    currentIndex = 0;
    if (currentLevel < levels.length) {
        displayWord();
        nextBtn.style.display = 'none'; // Ocultar el botón
        input.disabled = false; // Habilitar el campo de entrada
        input.focus(); 
    } else {
        wordContainer.textContent = '¡Felicidades! Has completado todos los niveles.';
        input.disabled = true;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var app = document.getElementById('app');
    app.classList.add('show');
});

input.addEventListener('keydown', checkWord);
nextBtn.addEventListener('click', goToNextLevel);

displayWord();
updateScore();
updateErrors();

