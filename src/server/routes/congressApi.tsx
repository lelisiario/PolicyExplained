const API_BASE_URL = "https://api.congress.gov/v3";
const API_KEY = import.meta.env.VITE_CONGRESS_API_KEY;

export const fetchBills = async (query: string) => {
  console.log("Fetching bills for query:", query);
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