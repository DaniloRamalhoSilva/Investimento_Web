import { useEffect } from "react";

import { AlertTriangle, CheckCircle2, X } from "lucide-react";

import { IconButton } from "@/components/ui/IconButton";

export type ToastMessage = { message: string; type: "danger" | "success" };
export function Toast({
  duration = 3600,
  onClose,
  toast,
}: {
  duration?: number;
  onClose: () => void;
  toast: ToastMessage | null;
}) {
  useEffect(() => {
    if (!toast || toast.type === "danger") return;
    const timeout = window.setTimeout(onClose, duration);
    return () => window.clearTimeout(timeout);
  }, [duration, onClose, toast]);
  if (!toast) return null;
  return (
    <div className={`toast toast--${toast.type}`} role="status">
      {toast.type === "success" ? <CheckCircle2 /> : <AlertTriangle />}
      <span>{toast.message}</span>
      <IconButton
        icon={<X />}
        label="Fechar mensagem"
        onClick={onClose}
        variant="ghost"
      />
    </div>
  );
}
