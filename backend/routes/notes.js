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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
})
module.exports = router 