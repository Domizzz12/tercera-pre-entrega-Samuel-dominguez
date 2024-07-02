// app.js
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('guessForm').style.display = 'block';
    document.getElementById('result').textContent = '¡Bienvenido! Adivina el número entre 1 y 100:';
});

document.getElementById('guessForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const userGuess = parseInt(document.getElementById('userGuess').value);

    if (userGuess === randomNumber) {
        document.getElementById('result').textContent = `¡Correcto! Has adivinado el número en ${attempts} intentos.`;
    } else {
        attempts++;
        const hint = userGuess < randomNumber ? 'mayor' : 'menor';
        document.getElementById('result').textContent = `Intento ${attempts}: El número es ${hint}.`;
    }
});
