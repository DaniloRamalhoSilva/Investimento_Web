import { Activity, FileText, Plus, RefreshCw, Users } from "lucide-react";

import { Badge } from "@/components/data-display/Badge";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";

export function DashboardPage() {
  return (
    <div className="template-page">
      <PageHeader
        actions={
          <Button icon={<RefreshCw />} onClick={() => window.location.reload()}>
            Atualizar
          </Button>
        }
        description="Visão inicial para orientar a construção do seu produto."
        title="Dashboard"
      />
      <section
        className="template-kpi-grid"
        aria-label="Indicadores principais"
      >
        <article className="template-kpi">
          <Users />
          <div>
            <span>Usuários</span>
            <strong>0</strong>
          </div>
        </article>
        <article className="template-kpi">
          <FileText />
          <div>
            <span>Registros</span>
            <strong>0</strong>
          </div>
        </article>
        <article className="template-kpi">
          <Activity />
          <div>
            <span>Status</span>
            <strong>
              <Badge variant="success">Operacional</Badge>
            </strong>
          </div>
        </article>
      </section>
      <div className="template-grid">
        <section className="template-panel">
          <header>
            <div>
              <h2>Próximos passos</h2>
              <p>Uma superfície neutra para iniciar uma nova feature.</p>
            </div>
            <Plus />
          </header>
          <ul className="template-list">
            <li>Defina os modelos do domínio em `src/types`.</li>
            <li>Adicione serviços tipados em `src/shared/api`.</li>
            <li>Crie a feature em `src/features` e registre sua rota.</li>
          </ul>
        </section>
        <section className="template-panel">
          <header>
            <div>
              <h2>Integrações</h2>
              <p>Conecte a API quando o backend estiver disponível.</p>
            </div>
          </header>
          <div className="template-empty">Nenhuma integração configurada.</div>
        </section>
      </div>
    </div>
  );
}
