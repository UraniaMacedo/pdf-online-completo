-- Execute este SQL no Supabase para o app reconhecer assinaturas Premium pagas via Stripe.
-- O webhook usa SUPABASE_SERVICE_ROLE_KEY para gravar nesta tabela.
-- O usuário logado consegue ler apenas a própria assinatura pelo e-mail da conta.

create table if not exists public.premium_subscriptions (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  status text not null default 'active',
  plan text not null default 'monthly',
  stripe_customer_id text,
  stripe_subscription_id text,
  stripe_checkout_session_id text,
  current_period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists premium_subscriptions_email_idx
  on public.premium_subscriptions (lower(email));

alter table public.premium_subscriptions enable row level security;

drop policy if exists "Users can read own premium subscription" on public.premium_subscriptions;

create policy "Users can read own premium subscription"
  on public.premium_subscriptions
  for select
  to authenticated
  using (lower(email) = lower(auth.jwt() ->> 'email'));
