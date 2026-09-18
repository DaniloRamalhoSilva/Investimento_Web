import { useState, type FormEvent } from "react";

import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { TextField } from "@/components/forms/TextField";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/shared/auth/useAuth";

import "./LoginPage.css";

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!email.trim() || !password.trim()) {
      setError("Informe usuário e senha para continuar.");
      return;
    }
    setIsSubmitting(true);
    try {
      await login({ email: email.trim(), password });
      navigate("/", { replace: true });
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Não foi possível concluir o login.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <main className="login-page">
      <section className="login-panel" aria-labelledby="login-title">
        <div className="login-panel__brand">
          <span className="login-panel__mark">T</span>
          <div>
            <strong>Template Web</strong>
            <span>Base para novos projetos</span>
          </div>
        </div>
        <div className="login-panel__heading">
          <h1 id="login-title">Entrar</h1>
          <p>Use seu acesso para continuar.</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <TextField
            autoComplete="username"
            label="Usuário ou e-mail"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="admin"
            value={email}
          />
          <TextField
            autoComplete="current-password"
            label="Senha"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Sua senha"
            type="password"
            value={password}
          />
          {error && (
            <div className="login-form__error" role="alert">
              {error}
            </div>
          )}
          <Button icon={<LogIn />} isLoading={isSubmitting} type="submit">
            Entrar
          </Button>
        </form>
      </section>
    </main>
  );
}
