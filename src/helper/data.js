const mongoose = require('mongoose');

let db = ( ) => {
    var mongoDB = 'mongodb://127.0.0.1:27017/book-shop';
    mongoose.connect(mongoDB);
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    console.log("DB conected");
}

module.exports = db