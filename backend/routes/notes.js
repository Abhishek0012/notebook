const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const notes = require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');
const { findByIdAndUpdate } = require('../models/Notes');
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
      const newNote = {};
      if(title) {newNote.title = title} ;
      if(description) {newNote.description = description} ;
      if(tag) {newNote.tag = tag} ;
      let note = await notes.findById(req.params.id);
      if(!note) res.status('401').send("Note not found");
      if(note.user.toString()!== req.user.id)  res.status('401').send("Not Allowed");
      note = await notes.findByIdAndUpdate(req.params.id,{$set : newNote} , {new: true});
      res.json({note});

    } catch (error) {
        res.status(500).send(error.message);
    }

})
module.exports = router 