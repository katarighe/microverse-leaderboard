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

}

export default Leaderboard;