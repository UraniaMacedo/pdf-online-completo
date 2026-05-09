export default function UserMenu({ session, premiumStatus, onOpenAuth, onSignOut }) {
  if (session?.user) {
    return (
      <div className="user-menu">
        <span>{session.user.email}</span>

        <span className={premiumStatus?.isPremium ? "account-badge premium" : "account-badge"}>
          {premiumStatus?.isPremium ? "Premium" : "Grátis"}
        </span>

        <button onClick={onSignOut}>Sair</button>
      </div>
    );
  }

  return (
    <div className="user-menu">
      <button onClick={() => onOpenAuth("login")}>Entrar</button>
      <button className="user-menu-primary" onClick={() => onOpenAuth("signup")}>
        Criar conta
      </button>
    </div>
  );
}