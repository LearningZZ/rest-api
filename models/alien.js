const mongoose = require('mongoose');

const alienScheam = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    tech : {
        type : String,
        require : true
    },
    advanceInTech : {
        type : Boolean,
        require : true,
        default : true
    }
});

module.exports = mongoose.model('Alien', alienScheam);