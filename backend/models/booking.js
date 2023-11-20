const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    table: {
        type: String,
        required: true
    },
    tableid:{
        type: String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    date: {
        type: String,
        required: true
    },
    members:{
        type: Number,
        default: 1
    },
    totalamount:{
        type: Number,
        required: true
    },
    transactionid:{
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'booked'
    }
    
},{
    timestamps: true,
})

const bookingModel = mongoose.model("bookings", bookingSchema);

module.exports = bookingModel;
