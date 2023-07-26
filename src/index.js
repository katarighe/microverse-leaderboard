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
    .startGame('Project Leaderboard')
    .then((response) => response.result.split(''))
    .then((res) => {
        [gameId] = [res[3]];
    });
};

const addtoUI = (arr) => {
    list.innerHTML = '';
    arr.for.Each((el) => {
        list.innerHTML += `
        <li class="item">${el.user} : ${el.score}</li>
        `;
    });
};

const getScores = () => {
    leaderboard.getScores(gameId).then((response) => addtoUI(response.result));
};