class PickEmGame {
  constructor() {
    this.availablePoints = Array.from({ length: 11 }, (_, i) => i + 1);
    this.userPicks = new Map();
  }

  async loadGames() {
    try {
      const response = await fetch("/api/games");
      const games = await response.json();
      this.renderGames(games);
    } catch (error) {
      console.error("Error loading games:", error);
    }
  }

  renderGames(games) {
    const container = document.getElementById("main-content");
    const gameGrid = document.createElement("div");
    gameGrid.className = "game-grid";

    games.forEach((game) => {
      const gameCard = this.createGameCard(game);
      gameGrid.appendChild(gameCard);
    });

    container.appendChild(gameGrid);
  }

  createGameCard(game) {
    const card = document.createElement("div");
    card.className = "game-card";
    // Add game details and pick selection UI
    return card;
  }
}

// Initialize the game when the DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const game = new PickEmGame();
  game.loadGames();
});
