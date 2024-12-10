const mongoose = require("mongoose");

const pickSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  gameId: mongoose.Schema.Types.ObjectId,
  selectedTeam: String,
  confidencePoints: Number,
  round: Number,
  isCorrect: Boolean,
});

module.exports = mongoose.model("Pick", pickSchema);
