const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const { body, validationResult } = require('express-validator');


// creating a user using post request api/auth/createuser:: NO login required 
router.post('/createuser', [
    body('email', 'Please enter a vlaid email').isEmail(),
    body('name', 'Please enter a valid name').isLength({ min: 3 }),
    body('password', 'Please enter a valid password').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // checking if user with same exits
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            res.status(400).json({ error: "user with same email alreay exists" })
        }
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })
            .then(user => res.json(user));

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error has been occured")
    }
})
module.exports = router
