import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AppShell from "../components/layout/AppShell";
import Card from "../components/ui/Card";
import { MOCK_STUDENTS, COURSES } from "../data/mockData";

export default function StudentDetail() {
  const { id } = useParams();
  const student = MOCK_STUDENTS.find((s) => s.id === id);

  if (!student) {
    return (
      <AppShell>
        <Card className="text-center py-14 text-muted text-sm">Student not found.</Card>
      </AppShell>
    );
  }

  // Deterministic mock breakdown so the same student always shows the same data
  const seed = student.id.charCodeAt(1);
  const sampleCourses = COURSES.slice(0, 6).map((c, i) => ({
    ...c,
    done: (seed + i) % 3 !== 0,
  }));

  return (
    <AppShell>
      <Link to="/admin" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent mb-6">
        <ArrowLeft size={15} /> Back to admin dashboard
      </Link>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold">{student.name}</h1>
          <p className="text-muted text-sm mt-1">{student.email} · {student.track}</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-display font-semibold text-accent">{student.progress}%</p>
          <p className="text-xs text-muted">Last active {student.lastActive}</p>
        </div>
      </div>

      <Card className="mt-8">
        <h2 className="font-display font-semibold mb-4">Course activity</h2>
        <div className="grid gap-2.5">
          {sampleCourses.map((c) => (
            <div key={c.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <span className={c.done ? "text-text" : "text-muted"}>{c.title}</span>
              <span className={`text-xs font-mono ${c.done ? "text-teal" : "text-muted"}`}>
                {c.done ? "Completed" : "In progress"}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
