const Authors = require("../models/authors.model");

module.exports.findAllAuthors = (req, res) => {
    Authors.find()
        .then(allAuthors => res.json({Author: allAuthors}))
        .catch(err => res.json({message: "didn't quite work out there", error: err}));
}

module.exports.createAuthor = (req,res) => {
    Authors.create(req.body)
        .then(newAuthor => res.json({newAuthor: newAuthor}))
        .catch(err => res.json({message: "didn't quite work out there", error: err}));
}

module.exports.deleteAuthor = (req,res) => {
    Authors.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json({deleted: deleteConfirmation}))
        .catch(err=> res.json({message: "didn't quite work out there", error: err}));
}

module.exports.findOneAuthor = (req,res) => {
    Authors.findOne({_id: req.params.id})
        .then(oneAuthor => res.json({Author: oneAuthor}))
        .catch(err => res.json({message: "didn't quite work out there", error: err}))
}

module.exports.updateAuthor = (req,res) => {
   Authors.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedAuthor => res.json({Author: updatedAuthor}))
        .catch(err => res.json({message: "didn't quite work out there", error: err}))
}