'use strict';

var mongoose = require('mongoose');
 
var registrationSchema = new mongoose.Schema({
  ObjectId: mongoose.Schema.ObjectId,
  date: { type: Date, default: Date.now },
  child: {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, min: 1, max: 18 },
    info: { type: String }
  },
  email: { 
    type: String,
    unique: true,
    required: true
  },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String },
  confirmed: { type: Boolean, default: false },
  token: { type: String }
});
 
module.exports = mongoose.model('Registration', registrationSchema);