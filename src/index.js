import './style.css';
import Leaderboard from './modules/leaderboard.js';

const addForm = document.querySelector('form');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const refresh = document.querySelector('button');
const list = document.querySelector('.list-score');

const leaderboard = new Leaderboard();

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

const addToUI = (arr) => {
    list.innerHTML = '';
    arr.forEach((el) => {
        list.innerHTML += `
        <li class="item">${el.user} : ${el.score}</li>
        `;
    });
};

const getScores = () => {
    leaderboard.getScores(gameId).then((response) => addToUI(response.result));
};

const postScore = (e) => {
    leaderboard.postScore(gameId, nameInput.value, scoreInput.value);

    nameInput.value =  '';
    scoreInput.value =  '';
    e.preventDefault();
}; 

document.addEventListener('DOMContentLoaded', startGame);
addForm.addEventListener('submit', postScore);
refresh.addEventListener('click', getScores); 