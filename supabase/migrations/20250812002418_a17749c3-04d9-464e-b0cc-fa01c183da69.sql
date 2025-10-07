-- Create portfolios table with strict schema per requirements
create table if not exists public.portfolios (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  tldr text not null check (char_length(tldr) <= 500),
  case_problem text not null check (char_length(case_problem) <= 1200),
  case_approach text not null check (char_length(case_approach) <= 1200),
  case_outcome text not null check (char_length(case_outcome) <= 1200),
  optional_extra text,
  resume_url text, -- URL only, no binary storage
  contact_email text,
  contact_linkedin text,
  theme text not null default 'default',
  is_published boolean not null default false,
  slug text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.portfolios enable row level security;

-- Policies: owner-only access on all operations
create policy if not exists "Portfolios are selectable by owner only"
  on public.portfolios for select
  using (auth.uid() = owner_id);

create policy if not exists "Owners can insert their portfolios"
  on public.portfolios for insert
  with check (auth.uid() = owner_id);

create policy if not exists "Owners can update their portfolios"
  on public.portfolios for update
  using (auth.uid() = owner_id)
  with check (auth.uid() = owner_id);

create policy if not exists "Owners can delete their portfolios"
  on public.portfolios for delete
  using (auth.uid() = owner_id);

-- Trigger to maintain updated_at
create trigger if not exists portfolios_set_updated_at
before update on public.portfolios
for each row execute function public.update_updated_at_column();

-- Helpful index for owner lookups
create index if not exists idx_portfolios_owner on public.portfolios(owner_id);