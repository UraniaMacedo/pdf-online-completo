export default function UserMenu({ session, onOpenAuth, onSignOut }) {
  if (session?.user) {
    return (
      <div className="user-menu">
        <span>{session.user.email}</span>
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