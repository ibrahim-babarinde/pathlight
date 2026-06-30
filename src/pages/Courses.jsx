import { CheckCircle2, Circle } from "lucide-react";
import AppShell from "../components/layout/AppShell";
import Card from "../components/ui/Card";
import { useApp } from "../context/AppContext";
import { TRACKS, COURSES } from "../data/mockData";

export default function Courses() {
  const { roadmap, completedCourseIds, toggleCourseComplete } = useApp();
  const courses = roadmap ? roadmap.recommendedCourses : COURSES;

  const grouped = Object.values(TRACKS)
    .filter((t) => courses.some((c) => c.track === t.id))
    .map((track) => ({
      track,
      courses: courses.filter((c) => c.track === track.id),
    }));

  return (
    <AppShell>
      <h1 className="font-display text-2xl font-semibold">Your courses</h1>
      <p className="text-muted text-sm mt-1">
        {roadmap ? "Ordered to match your roadmap." : "Take the assessment from your dashboard for a personalized order."}
      </p>

      <div className="mt-8 space-y-8">
        {grouped.map(({ track, courses }) => (
          <div key={track.id}>
            <h2 className="font-display font-semibold mb-1">{track.label}</h2>
            <p className="text-xs text-muted mb-3">{track.description}</p>
            <div className="grid gap-2.5">
              {courses.map((c) => {
                const done = completedCourseIds.includes(c.id);
                return (
                  <Card key={c.id} className="flex items-center justify-between py-3.5">
                    <button
                      onClick={() => toggleCourseComplete(c.id)}
                      className="flex items-center gap-3 text-left flex-1"
                    >
                      {done ? (
                        <CheckCircle2 size={20} className="text-teal flex-shrink-0" />
                      ) : (
                        <Circle size={20} className="text-muted flex-shrink-0" />
                      )}
                      <span>
                        <span className={`font-display ${done ? "line-through text-muted" : ""}`}>
                          {c.title}
                        </span>
                        <span className="block text-xs text-muted mt-0.5">{c.hours}h · {c.level}</span>
                      </span>
                    </button>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
