const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt')
const User = require('./db/userModel');  // Ensure this path is correct

dotenv.config();  // Loads environment variables from the .env file

const app = express();

// Enable CORS for frontend running on port 5173
app.use(cors({
    origin: 'http://localhost:5173',  // Ensure this is the correct frontend URL
    methods: ['GET', 'POST'],        // Allowed methods
    allowedHeaders: ['Content-Type'],// Allowed headers
}));

// MongoDB connection
const connectDB = require("./db");
connectDB();

app.use(express.json());

// Define routes

// POST /users - Create a new user
app.post("/users", async (req, res) => {
    try {
        console.log("Received data:", req.body);  // Log the incoming data

        const existingUser = await User.findOne({ username: req.body.username})

        if (existingUser) {
            return res.status(400).json({message: "Username already taken"})
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10)


        // Create a new user from request data
        const { name, username, password } = req.body;
        const user = new User({ name, username, password: hashedPassword });
        const result = await user.save();  // Save to MongoDB
        
        console.log("User created:", result);  // Log created user

        res.status(201).send({
            message: 'User successfully created',
            user: result,  // Optionally return the created user object
        });
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send({
            message: 'Internal Server Error - Failed to create user',
        });
    }
});

// GET /users - Get all users
app.get("/users", async (req, res) => {
    try {
       


        const users = await User.find();  // Fetch all users from MongoDB
        console.log("Users fetched:", users);  // Log fetched users
        res.json(users);  // Send users as JSON response
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send({
            message: 'Internal Server Error - Failed to fetch users',
        });
    }
});

// Start the server
app.listen(4000, () => {
    console.log("Server running on port 4000");
});
