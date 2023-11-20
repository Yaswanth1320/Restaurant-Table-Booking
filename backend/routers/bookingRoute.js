const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51ODMqYSDkfp2vYdi9zMBScibHMxD1sOUEVhyGBdHOW6vOqelj67qqz42a8VI7sHXXpna1xbyoqnfk0aVUQocx6lb00sHni7pNa')
const { v4: uuidv4 } = require('uuid');
const Booking = require("../models/booking") 
const Table = require("../models/tables")

router.post("/booktable", async(req,res) =>{

    const {table,userid,date,members,totalamount,token} = req.body;

        try {
            const newbooking = new Booking({
                table: table.name,
                tableid: table._id,
                userid,
                date,
                totalamount,
                members,
                transactionid: '1234'
            })
            const booking =await newbooking.save()

            const tabletemp = await Table.findOne({_id: table._id})
            tabletemp.currentBookings.push({
                bookingid: booking._id,
                date: date,
                userid: userid,
                status: booking.status
            });

            await tabletemp.save()

            res.send('Room booked successfully')
        } catch (error) {
            return res.status(400).json({message: error});
        }
});

router.post("/getbookingsbyuserid", async(req,res) =>{
    const userid = req.body.userid

    try {
        const bookings =await Booking.find({userid : userid})
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({error})
    }
})

router.post("/cancelbooking", async(req,res) =>{

    const {bookingid,tableid} = req.body

    try {
        const bookingitem = await Booking.findOne({_id:bookingid})
        bookingitem.status = 'Cancelled';
        await bookingitem.save()
        const table = await Table.findOne({_id:tableid})
        const bookings = table.currentBookings
        const temp = bookings.filter(booking => booking.bookingid.toString() !== bookingid)
        table.currentBookings = temp;

        await table.save()

        res.send("booking cancelled successfully")
    } catch (error) {
        return res.status(400).json({error})
    }

})

router.get("/getallbookings", async(req,res) =>{

    try {
        const bookings = await Booking.find({})
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({error})
    }

})

   

module.exports = router