const mongoose = require('mongoose');
const validator = require('validator');

// to validate, npm install validator
const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 1,
    trim: true,
    validate: {
      validator: (value) => {
        return validator.isEmail(value);
      },
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    tokens: {
      type: String,
      required: true
    }
  }]
});

module.exports = { User };
