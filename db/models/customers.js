// File: ./models/products.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var CustomersSchema = new Schema({
  phone: String,
  item: String,
  ing: String,
  price: Number,
  qty: Number,
  adress: String,
  date: {type: Date, default: Date.now},
  status: String
});

//Export function to create "ProductSchema" model class
module.exports = mongoose.model('Customers', CustomersSchema);