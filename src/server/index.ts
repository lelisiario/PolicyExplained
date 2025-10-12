// server/index.ts

import 'dotenv/config'; // Loads variables from your .env file
import express, { Request, Response } from 'express';
import cors from 'cors';

// --- 1. Security Check ---
// We use an environment variable (set in your .env file) to store the API Key.
// This prevents exposing the key in client-side code (the secure proxy pattern).
if (!process.env.CONGRESS_API_KEY) {
    // If the key is missing, throw a fatal error during startup.
    throw new Error("FATAL: CONGRESS_API_KEY is not defined in your .env file.");
}
const API_KEY = process.env.CONGRESS_API_KEY;


// --- 2. Express Server Setup ---
const app = express();
const PORT = process.env.PORT || 5000; // Use port 5000 for the backend

// Middleware
app.use(cors()); // Allows your React frontend to talk to this Node backend
app.use(express.json()); // Allows server to parse JSON bodies


// --- 3. Simple Test Route (API Sanity Check) ---
// This route just confirms the server is running and can access the key.
app.get('/api/test', (_req: Request, res: Response) => {
    res.json({
        message: "PolicyExplained Backend is running!",
        keyStatus: API_KEY ? 'Key Found' : 'Key Missing'
    });
});


// --- 4. Start Server ---
app.listen(PORT, () => {
    console.log(`\nServer is running on http://localhost:${PORT}`);
    console.log('API Key Status:', API_KEY ? 'Ready' : 'FATAL: Missing');
});