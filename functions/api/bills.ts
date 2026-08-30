import type { D1Database, PagesFunction, Response as CFResponse } from '@cloudflare/workers-types';

interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context): Promise<CFResponse> => {
  const url = new URL(context.request.url);
  const search = url.searchParams.get("search") || "";
  const chamber = url.searchParams.get("chamber") || "";
  const status = url.searchParams.get("status") || "";

  let query = "SELECT * FROM bills WHERE 1=1";
  const params: string[] = [];

  if (search) {
    query += " AND (title LIKE ? OR summary LIKE ?)";
    params.push(`%${search}%`, `%${search}%`);
  }
  if (chamber) {
    query += " AND chamber = ?";
    params.push(chamber);
  }
  if (status) {
    query += " AND status = ?";
    params.push(status);
  }

  query += " ORDER BY introduced_date DESC LIMIT 50";

  try {
    const stmt = context.env.DB.prepare(query);
    const { results } = await stmt.bind(...params).all();

    return new Response(JSON.stringify({ bills: results }), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
      },
    }) as unknown as CFResponse;
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }) as unknown as CFResponse;
  }
};