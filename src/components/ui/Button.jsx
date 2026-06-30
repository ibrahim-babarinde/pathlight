export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 font-display font-medium text-sm transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-accent text-bg hover:bg-accent-dim",
    secondary: "bg-surface-raised text-text border border-border hover:border-accent",
    ghost: "text-muted hover:text-text",
    danger: "bg-transparent border border-red-900 text-red-400 hover:bg-red-950",
  };

  return (
    <button type={type} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
