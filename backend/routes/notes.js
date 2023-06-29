const express = require('express');
const router = express.Router();
const NotesSchema = require('../models/Notes')
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator')

// Route 1. Get all the notes using: GET "/api/notes/fetchallnotes", Login Required
router.get('/api/notes/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await NotesSchema.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server error")
    }
})

// Route 2. Create a new note using: POST "/api/notes/addnote", Login Required
router.post('/api/notes/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a valid description').isLength({ min: 5 })
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const note = new NotesSchema({
            title, description, tag, user: req.user.id
        })
        const saveNote = await note.save()

        res.json(saveNote)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server error")
    }
})

// Route 3. Update an existing note using: PUT "/api/notes/updatenote/:id", Login Required
router.put('/api/notes/updatenote/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // Create a newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find the note to be updated
        let note = await NotesSchema.findById(req.params.id)
        if (!note) { return res.status(404).send("Not Found") }
        if (note.user.toString() !== req.user.id) { return res.status(404).send("Not Allowed") }

        note = await NotesSchema.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server error")
    }
})

// Route 4. Delete an existing note using: DELETE "/api/notes/deletenote/:id", Login Required
router.delete('/api/notes/deletenote/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        // Find the note to be updated and delete it
        let note = await NotesSchema.findById(req.params.id)
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this note
        if (note.user.toString() !== req.user.id) { return res.status(404).send("Not Allowed") }

        note = await NotesSchema.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note});
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server error")
    }
})

module.exports = router