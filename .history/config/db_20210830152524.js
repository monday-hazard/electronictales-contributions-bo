const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('mongoose a mangé la couleuvre ! ...');
    } catch(err){
        console.log("warning !!!!! : " + err.message);
        // Exit process with failure. (if = O : se)
        process.exit(1);
    }
}
