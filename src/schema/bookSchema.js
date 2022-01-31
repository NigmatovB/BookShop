const mongoose = require('mongoose')
let Schema = mongoose.Schema;

var BookSchema = new Schema({
    title : { type: String, required: true,unique: true, max: 30 },
    pages: { type: String, required: true , max: 10 },
    year: { type: String, required: true , max : 4},
    price: { type: String, required: true, max: 15},
    country: { type: String, required: true, max: 20},
    author: { type: String, required: true, max: 30},
    description: { type: String, required: true, max: 1000},
    image: { type: String, required: true, unique: true }
});

module.exports  = mongoose.model('Book', BookSchema);