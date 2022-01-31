const mongoose = require('mongoose')
let Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    firstName : { type: String, required: true, max: 12},
    lastName: { type: String, required: true , max: 12},
    birthData: { type: String, required: true, max:15},
    deathData: { type: String, required: true, max:15},
    cauntry: { type: String, required: true, max: 20 },
    bio: { type: String, required: true, max: 3000},
    image: { type: String, unique: true }
});

module.exports  = mongoose.model('Author', AuthorSchema);