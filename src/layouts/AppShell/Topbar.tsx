import { useEffect, useRef, useState } from "react";

import { Bell, LogOut, Moon, Sun, UserRound } from "lucide-react";

import { IconButton } from "@/components/ui/IconButton";

type TopbarProps = {
  brandLabel: string;
  isSidebarCollapsed: boolean;
  onLogout: () => void;
  onOpenProfile: () => void;
  onToggleSidebar: () => void;
  onToggleTheme: () => void;
  profilePhoto?: string | null;
  roleLabel: string;
  theme: "dark" | "light";
  userName: string;
};

function getInitials(value: string) {
  return (
    value
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "U"
  );
}

export function Topbar({
  brandLabel,
  isSidebarCollapsed,
  onLogout,
  onOpenProfile,
  onToggleSidebar,
  onToggleTheme,
  profilePhoto,
  roleLabel,
  theme,
  userName,
}: TopbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const initials = getInitials(userName);
  useEffect(() => {
    if (!isOpen) return;
    const close = (event: PointerEvent) => {
      if (!profileRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);
  return (
    <header className="topbar">
      <div className="topbar__start">
        {isSidebarCollapsed && (
          <>
            <button
              aria-label="Mostrar menu lateral"
              className="menu-button"
              onClick={onToggleSidebar}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
            <strong className="topbar__brand">{brandLabel}</strong>
          </>
        )}
      </div>
      <div className="topbar__actions">
        <IconButton icon={<Bell />} label="Notificações" />
        <IconButton
          icon={theme === "dark" ? <Sun /> : <Moon />}
          label={
            theme === "dark"
              ? "Alternar para modo claro"
              : "Alternar para modo escuro"
          }
          onClick={onToggleTheme}
        />
        <div className="topbar__profile" ref={profileRef}>
          <button
            aria-expanded={isOpen}
            aria-haspopup="menu"
            aria-label="Abrir menu do usuário"
            className="topbar__avatar"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {profilePhoto ? <img alt="" src={profilePhoto} /> : initials}
          </button>
          {isOpen && (
            <div className="topbar-profile-menu" role="menu">
              <div className="topbar-profile-menu__header">
                <span className="topbar-profile-menu__avatar">{initials}</span>
                <div>
                  <strong>{userName}</strong>
                  <span>{roleLabel}</span>
                </div>
              </div>
              <button
                className="topbar-profile-menu__item"
                onClick={() => {
                  setIsOpen(false);
                  onOpenProfile();
                }}
                role="menuitem"
                type="button"
              >
                <UserRound /> Perfil
              </button>
              <button
                className="topbar-profile-menu__item"
                onClick={onLogout}
                role="menuitem"
                type="button"
              >
                <LogOut /> Sair
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
