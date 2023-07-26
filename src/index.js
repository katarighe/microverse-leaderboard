import './style.css';
import Leaderboard from './modules/leaderboard.js';

const addForm = document.querySelector('form');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const refresh = document.querySelector('button');
const list = document.querySelector('.-list-score');

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