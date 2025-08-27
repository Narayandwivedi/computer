const mongoose = require("mongoose");

const connectToDb = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/computer-store';
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectToDb;