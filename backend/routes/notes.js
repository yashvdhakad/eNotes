const express = require('express');
const router = express.Router();
const NotesSchema = require('../models/Notes')

router.get('/api/notes', (req, res)=>{
    NotesSchema(req.body).save()
    res.send("Notes added to db successfully")
})

module.exports = router