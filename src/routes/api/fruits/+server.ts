import type { RequestHandler } from '@sveltejs/kit';
import sql from '$lib/db';

// GET all fruits
export const GET: RequestHandler = async () => {
  const fruits = await sql`SELECT * FROM fruits ORDER BY id ASC`;
  return new Response(JSON.stringify(fruits), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

// CREATE fruit
export const POST: RequestHandler = async ({ request }) => {
  const { name } = await request.json();
  const [newFruit] = await sql`INSERT INTO fruits (name) VALUES (${name}) RETURNING *`;
  return new Response(JSON.stringify(newFruit), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
};

// UPDATE fruit
export const PUT: RequestHandler = async ({ request }) => {
  const { id, name } = await request.json();
  const [updatedFruit] = await sql`UPDATE fruits SET name = ${name} WHERE id = ${id} RETURNING *`;
  return new Response(JSON.stringify(updatedFruit), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

// DELETE fruit
export const DELETE: RequestHandler = async ({ request }) => {
  const { id } = await request.json();
  await sql`DELETE FROM fruits WHERE id = ${id}`;
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};