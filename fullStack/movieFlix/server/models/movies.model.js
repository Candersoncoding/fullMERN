const mongoose = require('mongoose');

const MoviesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You must enter the movie Title"],
        validate:{ 
            validator: (input) => {
            return input.length >= 3;
            },
            message: (input) => `${input} is not enough characters. 3 characters needed minimum.`
        }   
    },
    genre: {
        type: String,
        required: [true, "You must enter the Genre"],
        validate:{ 
            validator: (input) => {
            return input.length >= 3;
            },
            message: (input) => `${input} is not enough characters. 3 characters needed minimum.`
        }
    },
    rating: {
        type: String,
        required: [true, "You must enter the movie Rating"]
    },
    releaseDate: {
        type: Date,
        required: [true, "You must enter the Release Date"]
    },
    inTheaters: {
        type: Boolean,
        required: [true, "Is the movie out yet?"]
    },
    length: {
        type: Number,
        required: [true, "You must enter how long the movie is (in minutes)"]
    }
})

const Movies = mongoose.model("Movies", MoviesSchema);

module.exports = Movies;