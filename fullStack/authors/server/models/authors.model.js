const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    name: String, required:[true, "Style Name is required"],
    color: String, required:[true, "Color is required"],
    material: String, required:[true, "Material is required"],
    weight: Number, required:[true, "Weight is required"],
    price: String, required:[true, "Price is required"]
})

const Authors = mongoose.model("Authors", AuthorsSchema);

module.exports = Authors;