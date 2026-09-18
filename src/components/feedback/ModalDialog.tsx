import { useEffect, useId, type ReactNode } from "react";

import { X } from "lucide-react";

import { IconButton } from "@/components/ui/IconButton";

export function ModalDialog({
  children,
  description,
  footer,
  isOpen,
  onClose,
  title,
}: {
  children: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}) {
  const titleId = useId();
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div
      className="modal-dialog__backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        aria-labelledby={titleId}
        aria-modal="true"
        className="modal-dialog"
        role="dialog"
      >
        <header className="modal-dialog__header">
          <div>
            <h2 id={titleId}>{title}</h2>
            {description && <p>{description}</p>}
          </div>
          <IconButton
            icon={<X />}
            label="Fechar"
            onClick={onClose}
            variant="ghost"
          />
        </header>
        <div className="modal-dialog__body">{children}</div>
        {footer && <footer className="modal-dialog__footer">{footer}</footer>}
      </section>
    </div>
  );
}
