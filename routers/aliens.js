const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("GET /aliens");
    res.send("GET /aliens");
});

module.exports = router;