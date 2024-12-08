const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    const uri = process.env.MONGO_URI;
    console.log("Connecting to MongoDB with URI:", uri);
    try {
        // Remove deprecated options
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process if connection fails
    }
};

module.exports = connectDB;
