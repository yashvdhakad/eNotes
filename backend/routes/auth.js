const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.post('/api/auth', (req, res)=>{
    User(req.body).save()
    res.send("User added to db successfully")
})

module.exports = router