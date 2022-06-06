const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const notes = require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');
// Fetch all of the user notes 
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const note = await notes.find({ user: req.user.id });
    res.json(note);
})
// Add new note
router.post('/addnote', fetchuser, [
    body('title', 'Please enter a valid email').isLength({ min: 3 }),
    body('description', 'Please enter a valid name').isLength({ min: 10 }),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { title, description, tag } = req.body;
        const user = req.user.id;
        const note = new notes({
            title, description, tag, user
        })
        const saveNote = await note.save();
        res.json(saveNote);

    } catch (error) {
        res.status(500).send(error.message)
    }

})
router.post('/updatenote/:id', fetchuser, [
], async (req, res) => {
    try {
      const {title,description,tag} = req.body ;
      const newNote = new notes();
      if(title) {newNote.title = title} ;
      if(description) {newNote.description = description} ;
      if(tag) {newNote.tag = tag} ;


    } catch (error) {
        res.status(500).send(error.message)
    }

})
module.exports = router 