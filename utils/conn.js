require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI ="mongodb+srv://anurag30:anurag1234@cluster0.aqb5qzi.mongodb.net/hostel?retryWrites=true";
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log('MongoDB connection SUCCESS');
    } catch (error) {
        console.error('MongoDB connection FAIL');
        process.exit(1);
    }
    };

module.exports = connectDB;