// src/lib/db.ts (Use DEFAULT export)
import { neon } from "@neondatabase/serverless";
import { DATABASE_URL } from '$env/static/private'; 

const sql = neon(DATABASE_URL); 

// 🚨 FIX: Use 'export default' 🚨
export default sql;