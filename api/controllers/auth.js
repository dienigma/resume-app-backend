const bcrypt = require("bcrypt");
const User = require("../models/user");

exports.logIn = (req, response, next) => {
  User.findOne({ email: req.body.email })
    .then(data => {
      if (data) {
        console.log(data.password);
        bcrypt
          .compare(req.body.password, data.password)
          .then(res => response.json({ status: res }))
          .catch(err => console.log(err.message));
      }
    })
    .catch(err => console.log(err.message));
};

exports.logOut = (req, res, next) => {
  res.json({ status: false });
};
