const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, maxlength: 12, minlength: 3 },
  email: { type: String, required: true, unique: true },
  resetToken: String,
  resetTokenExpiredAt: Date,
  password: { type: String, required: true },
  firstname: { type: String, required: true, maxlength: 50 },
  lastname: { type: String, required: true, maxlength: 50 },
  gender: { type: String, required: true },
  country: { type: String, required: false },
});

module.exports = mongoose.model("User", userSchema);