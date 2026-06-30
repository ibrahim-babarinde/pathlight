import { Link } from "react-router-dom";
import { Users, TrendingUp, ArrowRight } from "lucide-react";
import AppShell from "../components/layout/AppShell";
import Card from "../components/ui/Card";
import { MOCK_STUDENTS } from "../data/mockData";

export default function AdminDashboard() {
  const avgProgress = Math.round(
    MOCK_STUDENTS.reduce((s, st) => s + st.progress, 0) / MOCK_STUDENTS.length
  );

  return (
    <AppShell>
      <h1 className="font-display text-2xl font-semibold">Admin dashboard</h1>
      <p className="text-muted text-sm mt-1">Sample learner data for this demo build.</p>

      <div className="grid sm:grid-cols-2 gap-4 mt-8 mb-8">
        <Card>
          <Users className="text-accent mb-2" size={20} />
          <p className="text-2xl font-display font-semibold">{MOCK_STUDENTS.length}</p>
          <p className="text-xs text-muted">Active learners</p>
        </Card>
        <Card>
          <TrendingUp className="text-accent mb-2" size={20} />
          <p className="text-2xl font-display font-semibold">{avgProgress}%</p>
          <p className="text-xs text-muted">Average roadmap progress</p>
        </Card>
      </div>

      <div className="grid gap-2.5">
        {MOCK_STUDENTS.map((s) => (
          <Link key={s.id} to={`/admin/students/${s.id}`}>
            <Card className="flex items-center justify-between hover:border-accent-dim transition-colors">
              <div>
                <p className="font-display">{s.name}</p>
                <p className="text-xs text-muted mt-0.5">{s.email} · {s.track}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm text-muted">{s.progress}%</span>
                <ArrowRight size={16} className="text-muted" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
