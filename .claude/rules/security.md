# Security Rules

- All secrets in `.env.local` — never commit
- Server-side Supabase client for sensitive operations
- Never expose `service_role` key in frontend code
- RLS must be enabled on every Supabase table
- Validate all user input server-side before DB operations
- Use signed URLs for file/video storage access
