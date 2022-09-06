const mongoose = require('mongoose');

const askme_schema = new mongoose.Schema({
    full_name: 
    {
        type: String,
        required: true
    },
    e_mail: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date_time: {
        type: String,
        required: true
    }
});

const askmecontact = mongoose.model('askmecontact', askme_schema);

module.exports = askmecontact;