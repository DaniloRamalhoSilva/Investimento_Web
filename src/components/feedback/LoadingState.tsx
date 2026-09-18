import "./LoadingState.css";

export function LoadingState({
  label = "Carregando dados",
  rows = 5,
}: {
  label?: string;
  rows?: number;
}) {
  return (
    <div className="loading-state" role="status">
      <div className="loading-state__header">
        <span className="loading-state__spinner" aria-hidden="true" />
        {label}
      </div>
      <div className="loading-state__skeleton" aria-hidden="true">
        {Array.from({ length: rows }, (_, index) => (
          <span key={index} />
        ))}
      </div>
    </div>
  );
}
