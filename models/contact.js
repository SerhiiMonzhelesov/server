const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conctactForm = new Schema({
    name: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: Object
    },
    message: {
        required: false,
        type: String
    }
});

module.exports = mongoose.model('Data', conctactForm)