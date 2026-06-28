// server/index.ts
import 'dotenv/config'; // Loads variables from your .env file
import express from 'express';
import cors from 'cors';
import path from 'path'; // <-- 1. ADD THIS IMPORT
import { fileURLToPath } from 'url'; // <-- 2. ADD THIS IMPORT TO HELP WITH ES MODULES
const API_KEY = process.env.VITE_CONGRESS_API_KEY;
// --- 2. Express Server Setup ---
const app = express();
const PORT = process.env.PORT || 3000; // Adjusted to 3000 to match your terminal setup
// Recreate __dirname for ES Modules so the server knows where it is running from
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Existing Middleware
app.use(cors());
app.use(express.json());
// 3. NEW: Serve your static frontend files directly from the dist folder
// Since your server compiles right into /dist, its assets are its neighbors!
app.use(express.static(__dirname));
// --- 4. Simple Test Route (API Sanity Check) ---
app.get('/api/test', (_req, res) => {
    res.json({
        message: "PolicyExplained Backend is running!",
        keyStatus: API_KEY ? 'Key Found' : 'Key Missing'
    });
});
// 1. Serve static assets first
app.use(express.static(__dirname));
// 2. Fallback: If a request doesn't match an actual file or API route, send index.html
app.use((req, res, next) => {
    // If it's an API route request that failed, don't serve HTML, let it 404 naturally
    if (req.url.startsWith('/api')) {
        return next();
    }
    res.sendFile(path.join(__dirname, 'index.html'));
});
// --- 6. Start Server ---
app.listen(PORT, () => {
    console.log(`\nServer is running on http://localhost:${PORT}`);
    console.log('API Key Status:', API_KEY ? 'Ready' : 'FATAL: Missing');
});
