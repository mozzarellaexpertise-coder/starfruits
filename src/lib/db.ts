// src/lib/db.ts
import { neon } from "@neondatabase/serverless";
import { DATABASE_URL } from '$env/static/private';

if (!DATABASE_URL) throw new Error('DATABASE_URL not set!');
const sql = neon(DATABASE_URL);

export default sql;