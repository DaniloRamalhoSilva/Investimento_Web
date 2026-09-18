import type { InputHTMLAttributes } from "react";

import "./TextField.css";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};
export function TextField({ error, id, label, ...props }: TextFieldProps) {
  const fieldId =
    id ?? `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return (
    <label className="field" htmlFor={fieldId}>
      <span>{label}</span>
      <input id={fieldId} {...props} />
      {error && <small>{error}</small>}
    </label>
  );
}
