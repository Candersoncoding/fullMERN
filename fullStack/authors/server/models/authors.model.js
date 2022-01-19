const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    careerLength: Number,
    penName: String,
    hairColor: String
})

const Authors = mongoose.model("Authors", AuthorsSchema);

module.exports = Authors;