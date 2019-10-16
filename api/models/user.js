const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phone: String,
  location: String,
  about: String,
  highlight: [{ name: String }],
  skills: [{ name: String }],
  experience: [{ companyName: String, description: String }],
  awards: [{ title: String, description: String }],
  certifications: [{ title: String, description: String }]
});

module.exports = mongoose.model("User", userSchema);
