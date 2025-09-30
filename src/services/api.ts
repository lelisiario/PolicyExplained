// server/routes/api.ts

import express, { Request, Response } from 'express';

// Ensure this key is available from server/index.ts where dotenv was configured
const CONGRESS_API_KEY = process.env.CONGRESS_API_KEY;

// Create an Express Router instance
const router = express.Router();

/**
 * @route GET /api/legislation/search
 * @desc Secure proxy to fetch legislation data from the Congress.gov API.
 * @access Public (for now, will be Private after user auth is added)
 *
 * @tutor_note This is the core of the secure proxy pattern.
 * The React frontend calls this endpoint, and this server
 * endpoint securely calls Congress.gov using the hidden API key.
 */
router.get('/legislation/search', async (req: Request, res: Response) => {
    // 1. Get the search query from the frontend request
    const searchQuery = req.query.query as string;

    if (!searchQuery) {
        return res.status(400).json({ error: 'Search query parameter is required.' });
    }

    if (!CONGRESS_API_KEY) {
         // Should not happen if index.ts check is working, but a good safety check
        return res.status(500).json({ error: 'Server configuration error: API Key missing.' });
    }

    // 2. Construct the Congress.gov API URL
    // We use the 'text' parameter for keyword search (example URL: /bill?q=health+care)
    // NOTE: You may need to adjust the specific endpoint and parameters based on the actual Congress.gov API documentation you are using.
    const congressUrl = `https://api.congress.gov/v3/bill?q=${encodeURIComponent(searchQuery)}&api_key=${CONGRESS_API_KEY}&format=json`;

    console.log(`Proxying request for query: ${searchQuery}`);

    try {
        // 3. Use the native 'fetch' API to securely call the external API
        const response = await fetch(congressUrl, {
            method: 'GET',
            headers: {
                // Add any necessary headers for Congress.gov, often just the API key is needed.
                'Accept': 'application/json',
            },
        });

        // 4. Handle non-200 responses from the external API (e.g., rate limit, server error)
        if (!response.ok) {
            console.error(`External API error: ${response.status} ${response.statusText}`);
            // Forward the error status and message back to the frontend
            return res.status(response.status).json({
                error: `External API failed with status ${response.status}`,
                details: response.statusText,
            });
        }

        // 5. Parse the JSON response from the external API
        const data = await response.json();

        // 6. Send the cleaned or raw data back to the React frontend
        // TODO: In the future, clean and format this data before sending.
        return res.status(200).json(data);

    } catch (error) {
        // 7. Handle network errors (e.g., server down, connectivity issues)
        console.error('Network or Proxy Error:', error);
        return res.status(500).json({ error: 'Failed to connect to external data source.' });
    }
});

// Export the router so it can be used in server/index.ts
export default router;