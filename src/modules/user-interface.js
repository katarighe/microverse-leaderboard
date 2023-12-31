class UI {
  constructor() {
    this.list = document.querySelector('.list-score');
    this.nameInput = document.querySelector('#name');
    this.scoreInput = document.querySelector('#score');
  }

addToUI = (arr) => {
  this.list.innerHTML = '';
  arr.forEach((el) => {
    this.list.innerHTML += `
    <li class="item">${el.user} : ${el.score}</li>
    `;
  });
}

cleanInputs() {
  this.nameInput.value = '';
  this.scoreInput.value = '';
}
}

export default UI;