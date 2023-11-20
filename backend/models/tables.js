const mongoose = require('mongoose');

const tableSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    maxcount :{
        type: Number,
        required: true
    },
    phonenumber :{
        type: Number,
        required: true
    },
    cost :{
        type: Number,
        required: true
    },
    imgUrls :[],
    currentBookings :[],
    type :{
        type: String,
        required: true
    },
    features:{
        type: String,
        required: true
    },
    desc :{
        type: String,
        required: true
    }
},{
    timestamps: true,
});

const tableModel = mongoose.model('table', tableSchema);

module.exports = tableModel
