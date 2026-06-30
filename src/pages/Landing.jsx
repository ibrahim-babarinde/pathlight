import { Link } from "react-router-dom";
import { Compass, ArrowRight, Map, Target, TrendingUp } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function Landing() {
  return (
    <div className="min-h-screen bg-bg contour-bg">
      <header className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 font-display font-semibold text-xl">
          <Compass size={24} className="text-accent" />
          Pathlight
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost">Sign in</Button>
          </Link>
          <Link to="/register">
            <Button variant="primary">Get started</Button>
          </Link>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 pt-16 pb-24 text-center">
        <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent border border-accent-dim/40 rounded-full px-3 py-1 mb-6">
          A learning navigator, not another course catalog
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight">
          AI education is overwhelming.
          <br />
          <span className="text-accent">Your path through it doesn't have to be.</span>
        </h1>
        <p className="text-muted mt-6 max-w-xl mx-auto">
          Take a five-minute assessment. Get a structured, paced roadmap
          built around your actual skill level, goals, and free time —
          from your first script to career-ready.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link to="/register">
            <Button variant="primary" className="px-7 py-3">
              Build my roadmap <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 grid sm:grid-cols-3 gap-5">
        <Card>
          <Map className="text-accent mb-3" size={22} />
          <h3 className="font-display font-semibold mb-1.5">Personalized routing</h3>
          <p className="text-sm text-muted">
            Your roadmap is built from a real assessment of where you stand
            today, not a generic syllabus.
          </p>
        </Card>
        <Card>
          <Target className="text-accent mb-3" size={22} />
          <h3 className="font-display font-semibold mb-1.5">Paced to your week</h3>
          <p className="text-sm text-muted">
            Tell us how many hours you actually have, and the timeline
            adjusts to match real life.
          </p>
        </Card>
        <Card>
          <TrendingUp className="text-accent mb-3" size={22} />
          <h3 className="font-display font-semibold mb-1.5">Career-ready finish</h3>
          <p className="text-sm text-muted">
            Every track ends in portfolio work and interview prep, not just
            a certificate.
          </p>
        </Card>
      </section>
    </div>
  );
}
