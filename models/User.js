const mongoose = require("mongoose");
//model of the user 
const userSchema = mongoose.Schema({
  password: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
  

module.exports = mongoose.model('User', userSchema);