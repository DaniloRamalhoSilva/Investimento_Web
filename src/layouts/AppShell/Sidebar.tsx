import { useState } from "react";

import { ChevronRight } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import { cn } from "@/lib/cn";
import type { NavigationGroup, NavigationItem } from "@/types/navigation";

type SidebarProps = {
  brandLabel: string;
  groups: NavigationGroup[];
  isCollapsed: boolean;
  onToggle: () => void;
};

function SidebarItem({ item }: { item: NavigationItem }) {
  const location = useLocation();
  const hasChildren = Boolean(item.children?.length);
  const [isOpen, setIsOpen] = useState(
    hasChildren && location.pathname.startsWith(item.href),
  );
  const Icon = item.icon;
  if (!hasChildren)
    return (
      <NavLink
        className={({ isActive }) =>
          cn("sidebar__item", isActive && "is-active")
        }
        to={item.href}
      >
        <Icon aria-hidden="true" />
        <span>{item.label}</span>
      </NavLink>
    );
  return (
    <div className={cn("sidebar__tree", isOpen && "is-open")}>
      <div className="sidebar__parent-row">
        <NavLink
          className="sidebar__item"
          onClick={() => setIsOpen(true)}
          to={item.href}
        >
          <Icon aria-hidden="true" />
          <span>{item.label}</span>
        </NavLink>
        <button
          aria-expanded={isOpen}
          aria-label={`${isOpen ? "Recolher" : "Expandir"} ${item.label}`}
          className="sidebar__submenu-toggle"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <ChevronRight className="sidebar__chevron" />
        </button>
      </div>
      {isOpen && (
        <div className="sidebar__subnav">
          {item.children?.map((child) => (
            <NavLink
              className={({ isActive }) =>
                cn("sidebar__subitem", isActive && "is-active")
              }
              key={child.href}
              to={child.href}
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar({
  brandLabel,
  groups,
  isCollapsed,
  onToggle,
}: SidebarProps) {
  return (
    <aside
      aria-hidden={isCollapsed}
      aria-label="Navegação principal"
      className="sidebar"
    >
      <div className="sidebar__brand-row">
        <NavLink className="sidebar__brand" to="/">
          {brandLabel}
        </NavLink>
        <button
          aria-label="Esconder menu lateral"
          className="menu-button"
          onClick={onToggle}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav className="sidebar__nav">
        {groups.map((group) => (
          <section className="sidebar__group" key={group.title}>
            <p className="sidebar__title">{group.title}</p>
            {group.items.map((item) => (
              <SidebarItem item={item} key={item.href} />
            ))}
          </section>
        ))}
      </nav>
    </aside>
  );
}
