import { useEffect, useState } from "react";
import { Bill } from "../types/Legislation";


export const LegislationListPage = () => {
  const [bills, setBills] = useState<Bill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadBills() {
      try {
        const response = await fetch("/api/bills");
        const data: any = await response.json();
        setBills(data.bills || []);
      } catch (err) {
        console.error("Failed to fetch bills from D1:", err);
      } finally {
        setLoading(false);
      }
    }

    loadBills();
  }, []);

  if (loading) return <div>Loading bills...</div>;

  return (
    <div>
      <h2>Legislation</h2>
      {bills.length === 0 ? (
        <p>No bills found. Run sync to populate data!</p>
      ) : (
        bills.map((bill) => (
          <div key={bill.id} style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
            <h3>{bill.bill_number}: {bill.title}</h3>
            <p><strong>Chamber:</strong> {bill.chamber} | <strong>Status:</strong> {bill.status}</p>
            <p>{bill.summary}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default LegislationListPage;