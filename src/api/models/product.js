const restful = require('node-restful');
const mongoose = restful.mongoose;

const supplierSchema = new mongoose.Schema({
  supplier: {type:String, required: true},
  lat: {type: Number, required: true},
  lng: {type: Number, required: true}
});

const productSchema = new mongoose.Schema({
  name: {type: String, unique: true, required: [true, 'please type product name.']},
  description: {type: String, required: [true, 'please type product description.']},
  price: {type: Number, required: [true, 'please type product price.']},
  coin: {type: String, required: [true, 'please type money coin.']},
  supplier: supplierSchema
});

module.exports = restful.model('Product', productSchema);
