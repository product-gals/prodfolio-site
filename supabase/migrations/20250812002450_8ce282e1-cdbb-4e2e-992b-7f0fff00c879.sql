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
  resume_url text,
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
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'portfolios' AND policyname = 'Portfolios are selectable by owner only'
  ) THEN
    CREATE POLICY "Portfolios are selectable by owner only"
      ON public.portfolios FOR SELECT
      USING (auth.uid() = owner_id);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'portfolios' AND policyname = 'Owners can insert their portfolios'
  ) THEN
    CREATE POLICY "Owners can insert their portfolios"
      ON public.portfolios FOR INSERT
      WITH CHECK (auth.uid() = owner_id);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'portfolios' AND policyname = 'Owners can update their portfolios'
  ) THEN
    CREATE POLICY "Owners can update their portfolios"
      ON public.portfolios FOR UPDATE
      USING (auth.uid() = owner_id)
      WITH CHECK (auth.uid() = owner_id);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'portfolios' AND policyname = 'Owners can delete their portfolios'
  ) THEN
    CREATE POLICY "Owners can delete their portfolios"
      ON public.portfolios FOR DELETE
      USING (auth.uid() = owner_id);
  END IF;
END $$;

-- Trigger to maintain updated_at
create trigger if not exists portfolios_set_updated_at
before update on public.portfolios
for each row execute function public.update_updated_at_column();

-- Helpful index for owner lookups
create index if not exists idx_portfolios_owner on public.portfolios(owner_id);