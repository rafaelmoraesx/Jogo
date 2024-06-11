let playerName;
let targetNumber;
let attempts = 0;

document.getElementById('start-form').addEventListener('submit', startGame);
document.getElementById('guess-form').addEventListener('submit', function(event) {
    event.preventDefault();
    checkGuess();
});
document.getElementById('play-again-button').addEventListener('click', playAgain);
document.getElementById('restart-button').addEventListener('click', restartGame);

function startGame(event) {
    event.preventDefault();
    playerName = document.getElementById('playerName').value;
    if (playerName.trim() === '') {
        alert('Por favor, insira seu nome.');
        return;
    }
    document.getElementById('welcomeMessage').innerText = `Olá, ${playerName}! Adivinhe o número entre 1 e 100:`;
    document.getElementById('start-form').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    targetNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
    let guessInput = document.getElementById('guessInput').value;
    let guess = parseInt(guessInput);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Por favor, insira um número válido entre 1 e 100.');
        return;
    }
    attempts++;
    if (guess === targetNumber) {
        document.getElementById('feedback').innerText = '';
        document.getElementById('game-container').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';
        document.getElementById('congratsMessage').innerText = `Parabéns, ${playerName}! Você acertou o número em ${attempts} tentativas.`;
        document.getElementById('correctNumber').innerText = targetNumber;
        document.getElementById('score').innerText = attempts;
    } else if (guess < targetNumber) {
        document.getElementById('feedback').innerText = 'O número é maior. Tente novamente!';
    } else {
        document.getElementById('feedback').innerText = 'O número é menor. Tente novamente!';
    }
}

function playAgain() {
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('feedback').innerText = '';
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    targetNumber = Math.floor(Math.random() * 100) + 1;
}

function restartGame() {
    attempts = 0;
    document.getElementById('playerName').value = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('feedback').innerText = '';
    document.getElementById('start-form').style.display = 'block';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'none';
}
