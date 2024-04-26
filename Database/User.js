const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String
    }
});

module.exports = mongoose.model('Users', userSchema, 'users');