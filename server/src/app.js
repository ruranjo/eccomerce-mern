// app.js
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config'; // Import the config function from dotenv
import UserRouter from './routes/UserRouter';
import CardRouter from './routes/CardRouter';
import ProductRouter from './routes/ProductRouter';
import AdminRouter from './routes/AdminRouter';

// Create an Express application
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(morgan('dev')); // Log HTTP requests to the console during development

// Routes
app.use("/api/v1/user",UserRouter)
app.use("/api/v1/card",CardRouter)
app.use("/api/v1/product",ProductRouter)
app.use("/api/v1/admin",AdminRouter)


// Export the Express application
export default app;