import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Compass, ArrowRight } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useApp } from "../context/AppContext";

const GOALS = [
  { id: "career", label: "Switch into an AI-related career" },
  { id: "security", label: "Apply AI to cybersecurity work" },
  { id: "research", label: "Go deeper for research or academic work" },
  { id: "build", label: "Build my own AI-powered products" },
];

export default function Onboarding() {
  const { completeOnboarding, user } = useApp();
  const navigate = useNavigate();
  const [goal, setGoal] = useState(null);

  const handleContinue = () => {
    if (!goal) return;
    completeOnboarding({ goal });
    navigate("/assessment");
  };

  return (
    <div className="min-h-screen bg-bg contour-bg flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <div className="flex items-center gap-2 font-display font-semibold text-xl mb-2">
          <Compass size={22} className="text-accent" />
          Pathlight
        </div>
        <p className="text-muted text-sm mb-8">Step 1 of 2</p>

        <h1 className="font-display text-2xl font-semibold mb-2">
          Welcome{user?.name ? `, ${user.name.split(" ")[0]}` : ""}. What's pulling you toward AI?
        </h1>
        <p className="text-muted text-sm mb-6">This shapes the goal your roadmap is built around.</p>

        <div className="grid gap-3">
          {GOALS.map((g) => (
            <Card
              key={g.id}
              className={`cursor-pointer transition-colors ${
                goal === g.id ? "border-accent" : "hover:border-accent-dim"
              }`}
            >
              <button onClick={() => setGoal(g.id)} className="w-full text-left flex items-center justify-between">
                <span className="font-display">{g.label}</span>
                <span
                  className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                    goal === g.id ? "bg-accent border-accent" : "border-border"
                  }`}
                />
              </button>
            </Card>
          ))}
        </div>

        <Button onClick={handleContinue} className="w-full mt-8" disabled={!goal}>
          Continue to assessment <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}
