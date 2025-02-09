const API_BASE_URL = "https://gpo.congress.gov/";
const API_KEY = process.env.REACT_APP_CONGRESS_API_KEY;

/**
 * Fetch recent bills from Congress.gov API.
 * @param {string} query - Search term for legislation.
 * @returns {Promise<object>} - API response data.
 */
export const fetchBills = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/bills?q=${query}&api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Failed to fetch bills.");
    }
    return await response.json();
  } catch (error) {
    console.error("Congress API Error:", error);
    return null;
  }
};
