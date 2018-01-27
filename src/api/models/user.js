const restful = require('node-restful');
const mongoose = restful.mongoose;

const locationSchema = new mongoose.Schema({
  lat: {type: Number, required: true},
  lng: {type: Number, required: true}
});

const preferenceSchema = new mongoose.Schema({
  product: {type: String, required: true},
  distance: {type: Number, min: 1, max: 30, required:true}
});

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  birthdate: {type: Date, required: true},
  occupation: {type: String, required: false},
  location:locationSchema,
  preference: [preferenceSchema]
});

module.exports = restful.model('User', userSchema);
