const mongoose = require('mongoose');

const MoviesSchema = new mongoose.Schema({
    title: String,
    genre: String,
    rating: String,
    releaseDate: Date(),
    length: String
})

const Movies = mongoose.model("Movies", MoviesSchema);

module.exports = Movies;