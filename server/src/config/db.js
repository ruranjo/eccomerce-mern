// config/db.js
import mongoose from 'mongoose';
import 'dotenv/config'; // Import the config function from dotenv
import { MONGO_URI } from './constants.js';


//console.log(MONGO_URI);
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;