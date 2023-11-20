const express = require('express');
const router = express.Router();

const table = require('../models/tables');

router.get("/getalltables", async(req,res) =>{

    try {
        const rooms = await table.find({})
        res.send(rooms)
    } catch (error) {
        return res.status(400).json({message: error});
    }
});

router.post("/gettablebyid", async(req,res) =>{
    const tableid = req.body.tableid 

    try {
        const room = await table.findOne({_id: tableid})
        res.send(room)
    } catch (error) {
        return res.status(400).json({message: error});
    }
});


router.post("/addtable", async(req,res) =>{

    try {
        const newtable = new table(req.body)
        await newtable.save() 

        res.send("New room added successfully")
    } catch (error) {
        return res.status(400).json({error});
    }
})


module.exports = router;