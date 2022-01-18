const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/authors_db", {
    useNewUrlParser: true,
    useUnifiedTopology:  true,
})
    .then(() => console.log("Established a connection to the authors database"))
    .catch(err => console.log("beep boop bop, db connection was a flop", err));