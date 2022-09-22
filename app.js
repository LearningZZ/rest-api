const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://0.0.0.0:9000/AlienDB';

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const conn = mongoose.connection;

conn.on('open', () => {
    console.log("Connected With Aliens...");
});

app.use(express.json());    

const alienRouter = require('./routers/aliens');
app.use('/aliens', alienRouter);

app.listen(9000,() => {
    console.log("Server is running on port 9000");
});
