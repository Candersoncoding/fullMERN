const mongoose = requires("mongoose");

mongoose.connect("mongodb://localhost/soccer_cleats_db", {
    useNewUrlParser: true,
    useUnifiedTopolgy:  true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("beep boop bop, db connection was a flop", err));