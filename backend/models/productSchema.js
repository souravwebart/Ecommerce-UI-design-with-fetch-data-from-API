const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        // required: true
    },
    image: {
        type: String,
        // required: true
    },
    price: {
        type: String,
        required: true
    },
    brand: {
        type: String,
    },
    rating: {
        type: String,
    },
    numReviews: {
        type: Number,
    },
    countInStock: {
        type: Number,
    },
    description: {
        type: String,
    },
    slug: {
        type: String,
    },
})

const Products = new mongoose.model("Products", productSchema)

module.exports = Products;