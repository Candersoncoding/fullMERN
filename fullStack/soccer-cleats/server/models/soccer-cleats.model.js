const mongoose = require('mongoose');

const SoccerCleatsSchema = new mongoose.Schema({
    styleName: String, required:[true, "Style Name is required"],
    color: String, required:[true, "Color is required"],
    material: String, required:[true, "Material is required"],
    weight: Number, required:[true, "Weight is required"],
    price: String, required:[true, "Price is required"]
})

const SoccerCleats = mongoose.model("SoccerCleats", SoccerCleatsSchema);

module.exports = SoccerCleats;