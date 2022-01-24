const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const emailSchema = new Schema({
  email: {
    type: String,
  },
  code: {
    type: String,
  },
  verify: { type: Boolean, default: false },
});

const email = mongoose.model("email", emailSchema);

module.exports = email;
