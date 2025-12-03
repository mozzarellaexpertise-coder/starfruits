// src/routes/+page.server.ts

// 🚨 FIX: Change the import to grab the default export directly 🚨
import sql from '$lib/db'; 

export async function load() {
    // You no longer need getSql(), just use the imported 'sql' object
    // const sql = getSql(); <--- DELETE THIS LINE!
    
    const fruits = await sql`SELECT * FROM fruits`;
    
    return { fruits };
}