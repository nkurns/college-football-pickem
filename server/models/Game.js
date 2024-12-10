const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  homeTeam: String,
  awayTeam: String,
  gameTime: Date,
  round: Number,
  winner: String,
  isComplete: Boolean,
});

module.exports = mongoose.model("Game", gameSchema);
