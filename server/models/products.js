const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    price: { type: Number, required: true },
    description: { type: String, required: true },
},{
    timestamps: true
})

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;