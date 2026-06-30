import AppShell from "../components/layout/AppShell";
import Card from "../components/ui/Card";
import { useApp } from "../context/AppContext";
import { TRACKS } from "../data/mockData";

export default function Reports() {
  const { roadmap, completedCourseIds } = useApp();

  if (!roadmap) {
    return (
      <AppShell>
        <Card className="text-center py-14 max-w-lg mx-auto text-muted text-sm">
          Reports unlock once you've built a roadmap from the dashboard.
        </Card>
      </AppShell>
    );
  }

  const byTrack = roadmap.trackOrder.map((trackId) => {
    const courses = roadmap.recommendedCourses.filter((c) => c.track === trackId);
    const done = courses.filter((c) => completedCourseIds.includes(c.id)).length;
    const hours = courses.reduce((s, c) => s + c.hours, 0);
    const hoursDone = courses.filter((c) => completedCourseIds.includes(c.id)).reduce((s, c) => s + c.hours, 0);
    return { track: TRACKS[trackId], total: courses.length, done, hours, hoursDone };
  });

  return (
    <AppShell>
      <h1 className="font-display text-2xl font-semibold">Reports</h1>
      <p className="text-muted text-sm mt-1">A breakdown of where your time is going.</p>

      <div className="grid gap-4 mt-8">
        {byTrack.map(({ track, total, done, hours, hoursDone }) => {
          const pct = total ? Math.round((done / total) * 100) : 0;
          return (
            <Card key={track.id}>
              <div className="flex items-center justify-between mb-2">
                <p className="font-display font-semibold">{track.label}</p>
                <span className="font-mono text-sm text-muted">{done}/{total} courses</span>
              </div>
              <div className="h-2 rounded-full bg-surface-raised overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="text-xs text-muted mt-2 font-mono">
                {hoursDone}h of {hours}h logged
              </p>
            </Card>
          );
        })}
      </div>
    </AppShell>
  );
}
