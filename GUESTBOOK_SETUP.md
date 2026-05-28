# Guestbook setup (Supabase — instant, no approval)

One-time, ~5 minutes. Free.

## 1. Create a project
1. Go to https://supabase.com and sign up (free).
2. Click **New project**. Give it a name, set a database password (save it
   somewhere), pick the closest region, and create it. Wait ~1 min for it to spin up.

## 2. Create the guestbook table
Open the project → **SQL Editor** (left sidebar) → **New query** → paste this and
click **Run**:

```sql
create table if not exists guestbook (
  id          bigint generated always as identity primary key,
  created_at  timestamptz default now(),
  name        text not null check (char_length(name) between 1 and 60),
  website     text check (website is null or char_length(website) <= 200),
  message     text not null check (char_length(message) between 1 and 1000)
);

-- lock the table down, then allow anonymous read + insert (no moderation)
alter table guestbook enable row level security;

create policy "public can read"   on guestbook for select to anon using (true);
create policy "public can insert" on guestbook for insert to anon with check (true);
```

## 3. Grab your keys
Project → **Settings** (gear) → **API**. Copy:
- **Project URL** (e.g. `https://abcd1234.supabase.co`)
- **anon public** key (a long `eyJ...` string — this one is safe to ship publicly;
  the table is protected by the policies above)

## 4. Hand them over
Either paste them into `src/config.ts`:
```ts
supabase: { url: 'https://abcd1234.supabase.co', anonKey: 'eyJ...' },
```
…or just send both to me and I'll wire them in and push.

That's it — messages then appear on the guestbook instantly, no approval needed.
