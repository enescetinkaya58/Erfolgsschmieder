-- funnel-v2: additive Schema-Erweiterung für Funnel-Pfade und DSGVO-Consent
--
-- WICHTIG: Diese Migration ist rein additiv. Bestehende Leads bleiben
-- vollständig gültig. Die Funnel-API schreibt _path und _consent_given_at
-- bereits in das jsonb-Feld funnel_answers — die neuen Spalten werden
-- per Trigger automatisch synchronisiert (kein Code-Update nötig).

-- 1. Neue Spalten (nullable, idempotent)
alter table leads
  add column if not exists funnel_path text
    check (funnel_path is null or funnel_path in ('strategy', 'process', 'founding', 'scaling'));

alter table leads
  add column if not exists dsgvo_consent_at timestamptz;

-- 2. Index für Reporting nach Pfad
create index if not exists idx_leads_funnel_path on leads(funnel_path);

-- 3. Trigger: Spalten aus funnel_answers jsonb spiegeln
--    Bei jedem INSERT oder UPDATE werden funnel_path und
--    dsgvo_consent_at aus den jsonb-Meta-Feldern abgeleitet.
create or replace function sync_funnel_meta_columns()
returns trigger as $$
begin
  new.funnel_path = nullif(new.funnel_answers->>'_path', '');

  begin
    new.dsgvo_consent_at = (new.funnel_answers->>'_consent_given_at')::timestamptz;
  exception when others then
    new.dsgvo_consent_at = null;
  end;

  return new;
end;
$$ language plpgsql;

drop trigger if exists sync_funnel_meta_on_leads on leads;
create trigger sync_funnel_meta_on_leads
  before insert or update of funnel_answers on leads
  for each row execute function sync_funnel_meta_columns();

-- 4. Backfill für bereits bestehende Leads
update leads
set funnel_answers = funnel_answers
where funnel_answers ? '_path' or funnel_answers ? '_consent_given_at';
