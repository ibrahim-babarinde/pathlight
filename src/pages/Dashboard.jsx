import { Link } from "react-router-dom";
import { ArrowRight, Clock, Flame, ListChecks } from "lucide-react";
import AppShell from "../components/layout/AppShell";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import TrailProgress from "../components/ui/TrailProgress";
import { useApp } from "../context/AppContext";
import { TRACKS } from "../data/mockData";

export default function Dashboard() {
  const { user, roadmap, completedCourseIds } = useApp();

  if (!roadmap) {
    return (
      <AppShell>
        <Card className="text-center py-14 max-w-lg mx-auto">
          <h1 className="font-display text-2xl font-semibold mb-2">
            Let's build your roadmap
          </h1>
          <p className="text-muted text-sm mb-6">
            Take the short assessment so Pathlight can route you correctly.
          </p>
          <Link to="/onboarding">
            <Button>
              Start assessment <ArrowRight size={16} />
            </Button>
          </Link>
        </Card>
      </AppShell>
    );
  }

  const completedInRoadmap = roadmap.recommendedCourses.filter((c) =>
    completedCourseIds.includes(c.id)
  ).length;
  const progressPct = Math.round((completedInRoadmap / roadmap.recommendedCourses.length) * 100);
  const nextCourses = roadmap.recommendedCourses.filter((c) => !completedCourseIds.includes(c.id)).slice(0, 3);

  return (
    <AppShell>
      <h1 className="font-display text-2xl font-semibold">
        Welcome back{user?.name ? `, ${user.name.split(" ")[0]}` : ""}.
      </h1>
      <p className="text-muted text-sm mt-1">
        Goal: {roadmap.goalLabel} · Starting at {TRACKS[roadmap.startTrack].label}
      </p>

      <Card className="mt-8">
        <TrailProgress trackOrder={roadmap.trackOrder} progress={progressPct} />
      </Card>

      <div className="grid sm:grid-cols-3 gap-4 mt-6">
        <Card>
          <ListChecks className="text-accent mb-2" size={20} />
          <p className="text-2xl font-display font-semibold">{progressPct}%</p>
          <p className="text-xs text-muted">Roadmap complete</p>
        </Card>
        <Card>
          <Clock className="text-accent mb-2" size={20} />
          <p className="text-2xl font-display font-semibold">{roadmap.estimatedWeeks}w</p>
          <p className="text-xs text-muted">Estimated at {roadmap.hoursPerWeek}h/week</p>
        </Card>
        <Card>
          <Flame className="text-accent mb-2" size={20} />
          <p className="text-2xl font-display font-semibold">{completedInRoadmap}/{roadmap.recommendedCourses.length}</p>
          <p className="text-xs text-muted">Courses completed</p>
        </Card>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display font-semibold">Up next</h2>
          <Link to="/courses" className="text-sm text-accent hover:underline">
            View all courses
          </Link>
        </div>
        <div className="grid gap-3">
          {nextCourses.length === 0 ? (
            <Card className="text-sm text-muted">You've completed every course on your roadmap. 🎉</Card>
          ) : (
            nextCourses.map((c) => (
              <Card key={c.id} className="flex items-center justify-between">
                <div>
                  <p className="font-display">{c.title}</p>
                  <p className="text-xs text-muted mt-0.5">{TRACKS[c.track].label} · {c.hours}h · {c.level}</p>
                </div>
                <Link to="/courses">
                  <Button variant="secondary">Continue</Button>
                </Link>
              </Card>
            ))
          )}
        </div>
      </div>
    </AppShell>
  );
}
