const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const jwt_key = 'AbhishekTyagi'
const fetchuser = require('../middleware/fetchuser')


// creating a user using post request api/auth/createuser:: NO login required 
router.post('/createuser', [
    body('email', 'Please enter a valid email').isEmail(),
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
        const salt = bcrypt.genSaltSync(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, jwt_key);
        res.json({authToken});
        

    } catch (error) {
        // console.error(error.message);
        res.json(error.message);
        res.status(500).send("Some error has been occured")
    }
})
// User login : No login required 
router.post('/login', [
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Please enter a valid password').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // checking if user with same exits
        let {email,password} = req.body;
        let user = await User.findOne({email})
        if (!user) {
            res.status(400).json({ error: "Enter valid credentials" })
        }
        const passCompare = bcrypt.compare(password,user.password);
        if(!passCompare)
        {
            res.status(400).json({"error" : "Enter valid credentials"});
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, jwt_key);
        res.json({authToken});
    }
    catch(error){

        // console.error(error.message);
        res.status(500).send("Some error has been occured")
    }
})
// Get user information :: Login required
router.post('/getuser' , fetchuser , async (req, res) => {
    try {
       
          const user = await User.findById(req.user.id).select('-password');
          res.send(user);
    }
    catch(error){

        // console.error(error.message);
        res.status(500).send("Some error has been occured")
    }
})

module.exports = router
