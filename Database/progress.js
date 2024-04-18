const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    task: {
        type: String
    }
})

module.exports = mongoose.model('progress', progressSchema);