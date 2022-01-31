const mongoose = require('mongoose')
let Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName : { type: String, required: true, max: 12},
    lastName: { type: String, required: true , max: 12},
    phone: { type: String, required: true, unique: true , max:12},
    email: { type: String, required: true, unique: true , max:30},
    password: { type: String, required: true, max: 16, min: 8 },
    image: { type: String, unique: true }
});

module.exports  = mongoose.model('User', UserSchema);