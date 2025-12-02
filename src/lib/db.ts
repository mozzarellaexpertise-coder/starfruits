import { neon } from '@neondatabase/serverless';
import { env } from '$env/dynamic/private';

export function getSql() {
    if (!env.DATABASE_URL) throw new Error('DATABASE_URL not set!');
    return neon(env.DATABASE_URL);
}