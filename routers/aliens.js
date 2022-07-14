const { ObjectID } = require('bson');
const e = require('express');
const express = require('express');
const router = express.Router();

// getting alien schema from models...
const alien = require('../models/alien');

router.get('/', async(req, res) => {
    try {
        // for debugging...
        // console.log("GET /aliens");
        // res.send("GET /aliens");

        // actual work...
        const aliens = await alien.find();
        res.json(aliens);

    } catch(err) {
        res.send("Error "+err);
    }
});

router.get('/:someText', async(req, res) => {
    try {
        const aliens = await alien.findById(req.params.someText);
        res.json(aliens);

    } catch(err) {
        res.send("Error "+err);
    }
});

router.post("/",async(req,res) => {
    const newAlien = new alien({
        name: req.body.name,
        tech: req.body.tech,
        advanceInTech : req.body.advanceInTech
    });
    
    try {
        const result = await newAlien.save();
        res.json(result);
    } catch(err) {
        res.send("Error "+err);
    }
});

router.patch('/:someText', async(req, res) => {
    try {
        const aliens = await alien.findById(req.params.someText);
        if(alien == null) {
            res.send("Alien not found associated with id");
        } else {
            for(let key in req.body) {
                aliens[key] = req.body[key];
            }
            const result = await aliens.save();
            res.json(result);
        }

    } catch(err) {
        res.send("Error "+err);
    }
});

router.delete("/:someText",async(req, res) => {
    try {
        const result = await alien.findByIdAndDelete(req.params.someText);
        res.json(result);
    } catch(err) {
        res.send("Error "+err);
    }
});


module.exports = router;