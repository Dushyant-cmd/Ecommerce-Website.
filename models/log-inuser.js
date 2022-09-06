const mongoose = require('mongoose');

const loginuserschema = mongoose.Schema({
    username: {
        type: String,
    },
    pass: {
        type: String,
    }
})

const loginuser = mongoose.model('loginuser', loginuserschema);

module.exports = loginuser;