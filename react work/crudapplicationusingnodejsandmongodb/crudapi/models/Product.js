const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    product_name: {type: String, required: true},
    product_price: {type: Number, required: true},
    product_description: {type: String, required: false},
    product_category: {type: String, required: false},
    product_subcategory: {type: String, required: false},
    product_size : {type: [String], required: false},
    product_color: {type: [String], required: false},
    mainPhoto: {contentType: String, data: Buffer},
  sub1Photo: {contentType: String, data: Buffer},
  sub2Photo: {contentType: String, data: Buffer},
  sub3Photo: {contentType: String, data: Buffer},  
  product_date: { type: Date, default: Date.now },
  product_type : {type : String , required : false},
  total_stock : {type : Number , default : 1},
  brand : String,

  
});
const ProductModel = mongoose.model('Product', productSchema);
module.exports = ProductModel;


