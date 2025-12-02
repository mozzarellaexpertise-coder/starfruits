// src/lib/db.ts
import { neon } from '@neondatabase/serverless';
import { env } from '$env/dynamic/private';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL not set!');
const sql = neon(env.DATABASE_URL);

export default sql;