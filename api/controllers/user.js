const User = require("../models/user");

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 5;

exports.signUp = (req, res, next) => {
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      if (err) return err;
      let { password } = req.body;
      password = hash;
      req.body.password = password;
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        ...req.body
      });
      user
        .save()
        .then(data => res.json(data))
        .catch(err => console.log(err.message));
      return hash;
    });
  });
};

//   const user = new User({
//     _id: new mongoose.Types.ObjectId(),
//     ...req.body
//   });
//   user
//     .save()
//     .then(data => res.json(data))
//     .catch(err => console.log(err.message));
// };

// exports.getUsers = (req, res, next) => {
//   User.find()
//     .then(data => res.json(data))
//     .catch(err => console.log(err.message));
// };

exports.getUser = (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => res.json(user))
    .catch(err => console.log(err.message));
};

exports.editHighlight = (req, res, next) => {
  const updatedHighlight = req.body;
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $push: { highlight: updatedHighlight } }
  )
    .exec()
    .then(() => {
      User.findById(req.params.userId)
        .then(data => res.json(data.highlight))
        .catch(err => console.log(err.message));
    })
    .catch(err => res.json(err.message));
};

exports.editAwards = (req, res, next) => {
  const award = req.body;
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $push: { awards: award } }
  )
    .exec()
    .then(() => {
      User.findById(req.params.userId)
        .then(data => res.json(data.awards))
        .catch(err => console.log(err.message));
    })
    .catch(err => res.json(err.message));
};

exports.editSkills = (req, res, next) => {
  const skill = req.body;
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $push: { skills: skill } }
  )
    .exec()
    .then(() => {
      User.findById(req.params.userId)
        .then(data => res.json(data.skills))
        .catch(err => console.log(err.message));
    })
    .catch(err => res.json(err.message));
};

exports.editExperience = (req, res, next) => {
  const updatedExp = req.body;
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $push: { experience: updatedExp } }
  )
    .exec()
    .then(() => {
      User.findById(req.params.userId)
        .then(data => res.json(data.experience))
        .catch(err => console.log(err.message));
    })
    .catch(err => res.json(err.message));
};

exports.editOverview = (req, res, next) => {
  overview = req.body;
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $set: { about: overview.about } }
  )
    .exec()
    .then(() => {
      User.findById(req.params.userId)
        .then(data => res.json(data.about))
        .catch(err => console.log(err.message));
    })
    .catch(err => res.json(err.message));
};

exports.editCertifications = (req, res, next) => {
  certification = req.body;
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $push: { certifications: certification } }
  )
    .exec()
    .then(() => {
      User.findById(req.params.userId)
        .then(data => res.json(data.certifications))
        .catch(err => console.log(err.message));
    })
    .catch(err => res.json(err.message));
};
