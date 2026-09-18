import { useState } from "react";

import { Save } from "lucide-react";

import { PageHeader } from "@/components/layout/PageHeader";
import { TextField } from "@/components/forms/TextField";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/shared/auth/useAuth";

export function ProfilePage() {
  const { session, updateUser } = useAuth();
  const [name, setName] = useState(session?.user.name ?? "");
  return (
    <div className="template-page">
      <PageHeader description="Dados básicos da sessão atual." title="Perfil" />
      <section className="template-panel template-profile">
        <TextField
          label="Nome"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <TextField disabled label="Usuário" value={session?.user.email ?? ""} />
        <Button icon={<Save />} onClick={() => updateUser({ name })}>
          Salvar alterações
        </Button>
      </section>
    </div>
  );
}
