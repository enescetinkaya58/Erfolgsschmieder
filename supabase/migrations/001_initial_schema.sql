-- Leads Tabelle
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  updated_at timestamptz default now(),

  -- Kontaktdaten aus Funnel
  name text not null,
  unternehmen text,
  email text not null,
  telefon text,
  nachricht text,

  -- Funnel-Antworten (JSON)
  funnel_answers jsonb not null,

  -- Agent-Status
  status text default 'new' check (status in ('new', 'in_progress', 'awaiting_human', 'scheduled', 'closed')),

  -- Notizen / Zusammenfassung
  summary text,

  -- Letzte Aktivität
  last_activity_at timestamptz default now()
);

-- Konversationen (jede E-Mail hin und her)
create table if not exists conversations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  lead_id uuid references leads(id) on delete cascade,

  direction text not null check (direction in ('outbound', 'inbound')),
  sender text not null,
  recipient text not null,
  subject text,
  body text not null,

  -- Von wem: Agent oder Mensch
  author text not null check (author in ('agent', 'human', 'lead')),

  -- Resend Message ID (für Threading)
  message_id text,
  in_reply_to text
);

-- Indizes
create index if not exists idx_leads_status on leads(status);
create index if not exists idx_leads_email on leads(email);
create index if not exists idx_conversations_lead on conversations(lead_id);

-- Update trigger für leads.updated_at
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_leads_updated_at before update on leads
  for each row execute function update_updated_at_column();

-- RLS erstmal aus (Server-only Zugriff via service_role)
alter table leads enable row level security;
alter table conversations enable row level security;
