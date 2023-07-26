class Leaderboard {
    constructor () {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  }

  // Start
  async startGame(gameName) {
    const responseStart = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        name: gameName,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

  const responseData = await responseStart.json();
  return responseData;
}

async getScores(gameId) {
  const responseStart = await fetch(`${this.url}${gameId}/scores/`);
  const responseData = await responseStart.json();
  return responseData;
}

async postScore (gameId, name, score) {
  if (name === '' || score === '') {
    alert('Incomplete, please provide all the information');
  }    
}
}

export default Leaderboard;