const mongoose = require('mongoose');

const SoccerCleatsSchema = new mongoose.Schema({
    styleName: String,
    color: String,
    material: String,
    weight: Number,
    price: String
})

const SoccerCleats = mongoose.model("SoccerCleats", SoccerCleatsSchema);

module.exports = SoccerCleats;