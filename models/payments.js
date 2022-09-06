const mongoose = require('mongoose');

const payment_schema = new mongoose.Schema({
    razorpay_payment_id: 
    {
        type: String,
        required: true
    },
    razorpay_order_id: {
        type: String,
        required: true
    },
    razorpay_signature: {
        type: String,
        required: true
    },

    payment_status: {
        type: String
    }
});

const payment = mongoose.model('payment', payment_schema);

module.exports = payment;