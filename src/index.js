import './style.css';
import UI from './modules/user-interface.js'
import Leaderboard from './modules/leaderboard.js';

const addForm = document.querySelector('form');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const refresh = document.querySelector('button');

const leaderboard = new Leaderboard();
const ui = new UI();

// Start
let gameId;
const startGame = () => {
  leaderboard
    .startGame('Term Project')
    .then((response) => response.result.split(' '))
    .then((res) => {
      [gameId] = [res[3]];
    });
};

const getScores = () => {
  leaderboard.getScores(gameId).then((response) => ui.addToUI(response.result));
};

const postScore = (e) => {
  leaderboard.postScore(gameId, nameInput.value, scoreInput.value);
  ui.cleanInputs();

  nameInput.value = '';
  scoreInput.value = '';
  e.preventDefault();
};

document.addEventListener('DOMContentLoaded', startGame);
addForm.addEventListener('submit', postScore);
refresh.addEventListener('click', getScores);