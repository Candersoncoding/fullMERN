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

module.exports.deleteSoccerCleats = (req,res) => {
    SoccerCleats.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json({deleted: deleteConfirmation}))
        .catch(err=> res.json({message: "didn't quite work out there", error: err}));
}

module.exports.findOneSoccerCleats = (req,res) => {
    SoccerCleats.findOne({_id: req.params.id})
        .then(oneSoccerCleats => res.json({soccerCleats: oneSoccerCleats}))
        .catch(err => res.json({message: "didn't quite work out there", error: err}))
}

module.exports.updateSoccerCleats = (req,res) => {
    SoccerCleats.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedSoccerCleats => res.json({soccerCleats: updatedSoccerCleats}))
        .catch(err => res.json({message: "didn't quite work out there", error: err}))
}