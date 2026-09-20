import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "@/features/auth/LoginPage";
import { DashboardPage } from "@/features/dashboard/DashboardPage";
import { ProfilePage } from "@/features/profile/ProfilePage";
import { SentinelaLandingPage } from "@/features/sentinela/SentinelaLandingPage";
import { AppShell } from "@/layouts/AppShell/AppShell";
import { ProtectedRoute, PublicRoute } from "@/shared/auth/ProtectedRoute";

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="template-page">
      <header className="page-header">
        <div>
          <h1>{title}</h1>
          <p>Área pronta para receber a próxima funcionalidade do projeto.</p>
        </div>
      </header>
      <section className="template-panel">
        <h2>Comece por aqui</h2>
        <p>
          Substitua este exemplo por uma feature, serviço e modelo específicos
          do seu produto.
        </p>
      </section>
    </div>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SentinelaLandingPage />} path="/sentinela" />
      <Route element={<PublicRoute />}>
        <Route element={<LoginPage />} path="/login" />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<AppShell />}>
          <Route element={<DashboardPage />} index />
          <Route
            element={<PlaceholderPage title="Registros" />}
            path="/registros"
          />
          <Route element={<PlaceholderPage title="Status" />} path="/status" />
          <Route
            element={<PlaceholderPage title="Configurações" />}
            path="/configuracoes"
          />
          <Route element={<ProfilePage />} path="/perfil" />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Route>
      </Route>
    </Routes>
  );
}
