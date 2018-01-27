const restful = require('node-restful');
const mongoose = restful.mongoose;

const locationSchema = new mongoose.Schema({
  lat: {type: Number, required: true},
  lng: {type: Number, required: true}
});

const preferenceSchema = new mongoose.Schema({
  product: {type: String, required: [true, 'please choose product name.']},
  distance: {type: Number, min: 1, max: 30, required:[true, 'Type the distance']}
});

const userSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'please type your name.']},
  email: {type: String, unique: true, required: [true, 'please type your email.']},
  birthdate: {type: Date, required: [true, 'please type your birth date.']},
  occupation: {type: String, required: false},
  location:locationSchema,
  preference: [preferenceSchema]
});

module.exports = restful.model('User', userSchema);
