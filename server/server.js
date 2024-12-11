const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./db/userModel'); // Ensure this path is correct

dotenv.config(); // Load environment variables from .env

const app = express();

// Middleware
app.use(cors({
    origin: 'https://getajobhere.netlify.app', // Ensure this matches your frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));
app.use(express.json());

// MongoDB Connection
const connectDB = require('./db');
connectDB();

// Routes
// Register a new user
app.post('/users', async (req, res) => {
    try {
        const { name, username, password } = req.body;

        // Check if the username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already taken' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({ name, username, password: hashedPassword });
        const result = await user.save();

        res.status(201).json({
            message: 'User successfully created',
            user: result,
        });
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({
            message: 'Internal Server Error - Failed to create user',
            error: error.message,
        });
    }
});

// Sign in an existing user
app.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'No user found' });
        }

        // Verify the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            token,
            user: { id: user._id,name: user.name, username: user.username },
        });
    } catch (error) {
        console.error('Error during sign-in:', error);
        res.status(500).json({
            message: 'Internal Server Error - Failed to sign in',
            error: error.message,
        });
    }
});

// Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({
            message: 'Internal Server Error - Failed to fetch users',
        });
    }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
