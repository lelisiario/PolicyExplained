const API_KEY = import.meta.env.VITE_CONGRESS_API_KEY;

export const fetchBills = async (query) => {
  console.log("Fetching bills for query:", query); // ✅ Debug
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

