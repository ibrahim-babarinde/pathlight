export function Field({ label, children, hint }) {
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-wide text-muted mb-1.5">
        {label}
      </span>
      {children}
      {hint && <span className="block text-xs text-muted mt-1">{hint}</span>}
    </label>
  );
}

export default function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-md bg-surface border border-border px-3.5 py-2.5 text-sm text-text placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
    />
  );
}
