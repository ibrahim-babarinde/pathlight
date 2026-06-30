import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-bg">
      <div className="hidden lg:flex flex-col justify-between p-12 bg-surface border-r border-border contour-bg relative overflow-hidden">
        <Link to="/" className="flex items-center gap-2 font-display font-semibold text-xl relative z-10">
          <Compass size={24} className="text-accent" />
          Pathlight
        </Link>
        <div className="relative z-10">
          <p className="font-display text-3xl leading-snug max-w-md">
            Every learner's route through AI looks different.
            <span className="text-accent"> Yours starts here.</span>
          </p>
          <p className="text-muted mt-4 max-w-sm text-sm">
            Pathlight turns a short assessment into a structured, paced
            roadmap — from your first line of Python to a portfolio that
            gets you hired.
          </p>
        </div>
        <p className="text-xs text-muted font-mono relative z-10">v0.1 — demo build</p>
      </div>

      <div className="flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="lg:hidden flex items-center gap-2 font-display font-semibold text-xl mb-8">
            <Compass size={22} className="text-accent" />
            Pathlight
          </div>
          <h1 className="font-display text-2xl font-semibold">{title}</h1>
          {subtitle && <p className="text-muted text-sm mt-1.5">{subtitle}</p>}
          <div className="mt-8">{children}</div>
          {footer && <div className="mt-6 text-sm text-muted">{footer}</div>}
        </div>
      </div>
    </div>
  );
}
