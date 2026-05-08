import { useState } from "react";
import { supabase } from "../lib/supabaseClient.js";

export default function AuthModal({ initialMode = "login", onClose }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isLogin = mode === "login";

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      setMessage("Informe e-mail e senha.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (error) {
          setMessage("Não foi possível entrar. Verifique e-mail e senha.");
          return;
        }

        onClose();
        return;
      }

      const { error } = await supabase.auth.signUp({
        email,
        password
      });

      if (error) {
        setMessage("Não foi possível criar a conta. Tente outro e-mail ou senha.");
        return;
      }

      setMessage("Conta criada. Verifique seu e-mail para confirmar o cadastro.");
    } catch (error) {
      console.error(error);
      setMessage("Erro inesperado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <button className="auth-close" onClick={onClose}>
          ×
        </button>

        <span className="badge">PDF AGORA</span>

        <h2>{isLogin ? "Entrar na sua conta" : "Criar conta grátis"}</h2>

        <p>
          A conta será usada para liberar recursos Premium, limites maiores e
          benefícios exclusivos futuramente.
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            E-mail
            <input
              type="email"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <label>
            Senha
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          <button className="primary-button" type="submit" disabled={loading}>
            {loading ? "Aguarde..." : isLogin ? "Entrar" : "Criar conta"}
          </button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <button
          className="auth-switch"
          onClick={() => {
            setMode(isLogin ? "signup" : "login");
            setMessage("");
          }}
        >
          {isLogin
            ? "Ainda não tenho conta. Criar conta"
            : "Já tenho conta. Entrar"}
        </button>
      </div>
    </div>
  );
}