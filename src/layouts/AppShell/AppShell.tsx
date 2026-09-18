import { useEffect, useState, type ReactNode } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import { useAuth } from "@/shared/auth/useAuth";
import { THEME_UPDATED_EVENT } from "@/shared/events";

import { navigationGroups } from "./navigation";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import "./AppShell.css";

const THEME_STORAGE_KEY = "template-web-theme";
const SIDEBAR_STORAGE_KEY = "template-web-sidebar";
type Theme = "dark" | "light";
function getStoredTheme(): Theme {
  return window.localStorage.getItem(THEME_STORAGE_KEY) === "light"
    ? "light"
    : "dark";
}
function getStoredSidebarState() {
  return window.localStorage.getItem(SIDEBAR_STORAGE_KEY) === "collapsed";
}

export function AppShell({ children }: { children?: ReactNode }) {
  const { logout, session } = useAuth();
  const navigate = useNavigate();
  const [theme, setTheme] = useState<Theme>(
    () => session?.user.theme ?? getStoredTheme(),
  );
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(
    getStoredSidebarState,
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);
  useEffect(() => {
    window.localStorage.setItem(
      SIDEBAR_STORAGE_KEY,
      isSidebarCollapsed ? "collapsed" : "open",
    );
  }, [isSidebarCollapsed]);
  useEffect(() => {
    const handler = (event: Event) => {
      const value = (event as CustomEvent<Theme>).detail;
      if (value === "dark" || value === "light") setTheme(value);
    };
    window.addEventListener(THEME_UPDATED_EVENT, handler);
    return () => window.removeEventListener(THEME_UPDATED_EVENT, handler);
  }, []);
  const brandLabel = "Template Web";
  const userName = session?.user.name ?? "Usuário";
  return (
    <div className="app-page">
      <div
        className={
          isSidebarCollapsed ? "app-shell is-sidebar-collapsed" : "app-shell"
        }
      >
        <Sidebar
          brandLabel={brandLabel}
          groups={navigationGroups}
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed((current) => !current)}
        />
        <main className="app-shell__main">
          <Topbar
            brandLabel={brandLabel}
            isSidebarCollapsed={isSidebarCollapsed}
            onLogout={logout}
            onOpenProfile={() => navigate("/perfil")}
            onToggleSidebar={() => setIsSidebarCollapsed((current) => !current)}
            onToggleTheme={() =>
              setTheme((current) => (current === "dark" ? "light" : "dark"))
            }
            profilePhoto={session?.user.avatarUrl}
            roleLabel={session?.user.role ?? "Usuário"}
            theme={theme}
            userName={userName}
          />
          <div className="app-shell__content">{children ?? <Outlet />}</div>
          <footer className="app-shell__footer">
            <div>
              <strong>Template Web</strong>
              <span>
                © {new Date().getFullYear()} Todos os direitos reservados.
              </span>
            </div>
            <div className="app-shell__footer-context">
              <span>Versão {__APP_VERSION__}</span>
              <span>{userName}</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
