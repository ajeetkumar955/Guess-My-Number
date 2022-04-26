'use strict';

let secretNumber = Math.floor(Math.random() * (1, 20) + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);

  if (!guessedNumber) {
    document.querySelector('.message').textContent = '❌ No Number';
  } else if (secretNumber > guessedNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬇ Too Low';
      document.body.style.backgroundColor = 'red';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('.score').textContent = 0;
    }
  } else if (secretNumber < guessedNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬆ Too High';
      document.body.style.backgroundColor = 'red';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('.score').textContent = 0;
    }
  } else if ((secretNumber = guessedNumber)) {
    document.querySelector('.message').textContent = '☑ Correct Number';
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * (1, 20) + 1);
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 0;
  document.querySelector('.guess').value = '';
});
