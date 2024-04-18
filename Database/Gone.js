const mongoose = require('mongoose');

const GoneSchema = new mongoose.Schema({
    task: {
        type: String
    }
})

module.exports = mongoose.model('GoneList', GoneSchema, 'Gone');