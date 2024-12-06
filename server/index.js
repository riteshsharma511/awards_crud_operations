import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import route from './routes/awardRoute.js'; // Correct import path

dotenv.config(); // Load environment variables

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Get port and MongoDB connection URL from environment variables
const PORT = process.env.PORT || 8000; 
const URL = process.env.MONGO_URL;

// Connect to MongoDB
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch((err) => {
        console.error("DB connection failed", err);
    });

// Set up the server to listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});

// Use the routes for handling API requests
app.use("/api", route);