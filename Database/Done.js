const mongoose = require('mongoose');

const DoneSchema = new mongoose.Schema({
    task: {
        type: String
    }
})

module.exports = mongoose.model('Done', DoneSchema);