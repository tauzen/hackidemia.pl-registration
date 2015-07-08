'use strict';

var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var uniqueValidator = require('mongoose-unique-validator');

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: '{PATH} should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'matches',
    arguments: ['[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,50}'],
    message: 'Only letters allowed'
  })
];

var emailValidator = validate({
  validator: 'isEmail',
  message: 'Valid email required'
});

var registrationSchema = new mongoose.Schema({
  ObjectId: mongoose.Schema.ObjectId,
  date: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  child: {
    firstname: { type: String, required: true, validate: nameValidator },
    lastname: { type: String, required: true, validate: nameValidator },
    age: { type: Number, min: 1, max: 18 },
    info: { type: String, maxlength: 255 }
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: emailValidator
  },
  firstname: { type: String, required: true, validate: nameValidator },
  lastname: { type: String, required: true, validate: nameValidator },
  confirmed: { type: Boolean, default: false },
  waitingList: { type: Boolean, default: false },
  token: { type: String },
  location: { type: String, required: true }
});

// using message to distinguish unique violation from
// other validation errors
registrationSchema.plugin(uniqueValidator, { message: 'unique' });

registrationSchema.pre('save', function(next){
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Registration', registrationSchema);
