const SoccerCleats = require("../models/soccer-cleats.model");

module.exports.findAllSoccerCleats = (req, res) => {
    SoccerCleats.find()
        .then(allSoccerCleats => res.json({soccerCleats: allSoccerCleats}))
        .catch(err => res.json({message: "didn't quite work out there", error: err}));
}

module.exports.createSoccerCleats = (req,res) => {
    SoccerCleats.create(req.body)
        .then(newSoccerCleats => res.json({soccerCleats: newSoccerCleats}))
        .catch(err => res.json({message: "didn't quite work out there", error: err}));
}