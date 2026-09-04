import type { D1Database, PagesFunction, Response as CFResponse } from '@cloudflare/workers-types';

interface Env {
  DB: D1Database;
  CONGRESS_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context): Promise<CFResponse> => {
  const apiKey = context.env.CONGRESS_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Missing CONGRESS_API_KEY environment variable" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }) as unknown as CFResponse;
  }

  try {
    const congressRes = await fetch(
      `https://api.congress.gov/v3/bill?api_key=${apiKey}&limit=20&format=json`
    );

    if (!congressRes.ok) {
      throw new Error(`Congress API returned status ${congressRes.status}`);
    }

    const data: any = await congressRes.json();
    const rawBills = data.bills || [];

    const stmt = context.env.DB.prepare(`
      INSERT INTO bills (id, bill_number, congress, title, summary, chamber, status, introduced_date, update_date)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        title=excluded.title,
        status=excluded.status,
        update_date=excluded.update_date
    `);

    const statements = rawBills.map((b: any) => {
      const id = `${b.congress}-${b.type.toLowerCase()}-${b.number}`;
      const billNumber = `${b.type.toUpperCase()} ${b.number}`;
      return stmt.bind(
        id,
        billNumber,
        b.congress,
        b.title || "No title provided",
        b.latestAction?.text || "No recent summary available",
        b.originChamber || "Unknown",
        b.latestAction?.text || "Introduced",
        b.introducedDate || new Date().toISOString().split("T")[0],
        b.updateDate || new Date().toISOString().split("T")[0]
      );
    });

    if (statements.length > 0) {
      await context.env.DB.batch(statements);
    }

    return new Response(
      JSON.stringify({ success: true, count: statements.length }),
      { headers: { "Content-Type": "application/json" } }
    ) as unknown as CFResponse;

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }) as unknown as CFResponse;
  }
};