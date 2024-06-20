const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  username: { type: String, required: true, unique: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  profile: {
    age: { type: Number },
    gender: {
      type: String,
      enum: ['male', 'female', 'non-binary', 'other'], // List of acceptable values
      default: 'other'
    },
    location: { type: String },
    bio: { type: String }
  }
})
const userModel = mongoose.model('user', userSchema)

module.exports = {
    userModel
}

