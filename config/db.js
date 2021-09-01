const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MONGODB_URI');

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('Yay you\'re connected to the database ! ＼(^◇^)／ ');
    } catch(err){
        console.log("Warning ! ಠ╭╮ಠ " + err.message);
        // Exit process with failure. (if = O : success)
        process.exit(1);
    }
}

module.exports = connectDB;