const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    slackName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        // TODO: Update role management
        // enum: ['user', 'reviewer', 'admin'],
        default: 'user'
    },
    subscriptionDate: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        default: 'avatar.jpg'
    }
});

module.exports = User = mongoose.model('user', UserSchema);