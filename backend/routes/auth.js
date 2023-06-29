const express = require('express');
const router = express.Router();
const UserSchema = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = 'UVisabadB$Y'

// Create a user using: POST "/api/auth/createuser". No login required
router.post('/api/auth/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 6 char').isLength({ min: 6 })
], async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // Check whether the user with this email already exists
    try {
        let user = await UserSchema.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ errors: "Sorry a user with this email already exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        // Create a new user
        user = await UserSchema.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)

        res.json({ authToken })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error occured")
    }
})

// Authenticate a user using: POST "/api/auth/login". No login required
router.post('/api/auth/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body
    try {
        let user = await UserSchema.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "Sorry please try to login with correct credentials: Email" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: "Sorry please try to login with correct credentials: Password" })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)

        res.json({ authToken })
    } catch (error) {
        res.status(500).send("Internal Server error")
        console.error(error.message)
    }
})

// Get logged-in User details using: POST "/api/auth/login". No login required
router.post('/api/auth/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id
        const user = await UserSchema.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        res.status(500).send("Internal Server error")
        console.error(error.message)
    }
})

module.exports = router