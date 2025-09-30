import { useEffect, useState } from "react";
import { fetchBills } from "../utils/congressApi";

const LegislationList = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBills = async () => {
      const data = await fetchBills("climate"); // sample search
      if (data) setBills(data.bills || []);
      setLoading(false);
    };
    loadBills();
  }, []);

  if (loading) return <p>Loading bills...</p>;

  return (
    <div>
      <h2>Recent Legislation</h2>
      <ul>
        {bills.map((bill, index) => (
          <li key={index}>{bill.title || "No Title"}</li>
        ))}
      </ul>
    </div>
  );
};

export default LegislationList;
