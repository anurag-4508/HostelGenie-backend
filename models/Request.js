const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    cms_id: {
        type: String,//changed from Number to string
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Request = mongoose.model('request', RequestSchema);