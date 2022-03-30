// File: ./models/pizzainfo.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var PizzainfoSchema = new Schema({
  code: Number,
  name: String,
  price: Number
});

//Export function to create "ProductSchema" model class
module.exports = mongoose.model('Pizzainfo', PizzainfoSchema);