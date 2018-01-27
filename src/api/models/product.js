const restful = require('node-restful');
const mongoose = restful.mongoose;

const supplierSchema = new mongoose.Schema({
  supplier: {type:String, required: true},
  lat: {type: Number, required: true},
  lng: {type: Number, required: true}
});

const productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  coin: {type: String, required: true},
  supplier: supplierSchema
});

module.exports = restful.model('Product', productSchema);
