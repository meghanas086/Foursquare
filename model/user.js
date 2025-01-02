const mangoose = require("mongoose");

const userSchema = new mangoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

module.exports = mangoose.model("user", userSchema);
