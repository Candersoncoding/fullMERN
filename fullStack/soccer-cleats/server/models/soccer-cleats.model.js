const mongoose = require('mongoose');

const SoccerCleatsSchema = new mongoose.Schema({
    name: String,
    color: String,
    material: String,
    weight: Number,
    Price: String
})

const SoccerCleats = mongoose.model("SoccerCleats", SoccerCleatsSchema);

module.exports = SoccerCleats;