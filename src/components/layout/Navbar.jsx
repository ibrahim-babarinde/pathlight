import { Link, useNavigate } from "react-router-dom";
import { Compass, LogOut, LayoutDashboard, BookOpen, User, FileBarChart, ShieldCheck } from "lucide-react";
import { useApp } from "../../context/AppContext";

export default function Navbar() {
  const { user, logout } = useApp();
  const navigate = useNavigate();

  const links = [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/courses", label: "Courses", icon: BookOpen },
    { to: "/reports", label: "Reports", icon: FileBarChart },
    { to: "/profile", label: "Profile", icon: User },
  ];

  if (user?.role === "admin") {
    links.push({ to: "/admin", label: "Admin", icon: ShieldCheck });
  }

  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/dashboard" className="flex items-center gap-2 font-display font-semibold text-lg">
          <Compass size={22} className="text-accent" />
          Pathlight
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm text-muted hover:text-text hover:bg-surface-raised transition-colors"
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:block text-sm text-muted font-mono">{user?.email}</span>
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Sign out</span>
          </button>
        </div>
      </div>
    </header>
  );
}
