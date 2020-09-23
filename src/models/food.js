const { Schema ,model } = require('mongoose');

const foodSchema = new Schema({
    name: String,
    description: String
});

module.exports = model('Foods', foodSchema);