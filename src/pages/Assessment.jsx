import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Compass, ArrowRight, ArrowLeft } from "lucide-react";
import Button from "../components/ui/Button";
import { ASSESSMENT_QUESTIONS } from "../data/mockData";
import { useApp } from "../context/AppContext";

export default function Assessment() {
  const { submitAssessment } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = ASSESSMENT_QUESTIONS[step];
  const isLast = step === ASSESSMENT_QUESTIONS.length - 1;
  const selected = answers[question.id];

  const choose = (value) => setAnswers((prev) => ({ ...prev, [question.id]: value }));

  const handleNext = () => {
    if (selected === undefined) return;
    if (isLast) {
      submitAssessment(answers);
      navigate("/dashboard");
    } else {
      setStep((s) => s + 1);
    }
  };

  return (
    <div className="min-h-screen bg-bg contour-bg flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <div className="flex items-center gap-2 font-display font-semibold text-xl mb-2">
          <Compass size={22} className="text-accent" />
          Pathlight
        </div>
        <p className="text-muted text-sm mb-1">Step 2 of 2 — Skills assessment</p>

        <div className="flex gap-1.5 mb-8">
          {ASSESSMENT_QUESTIONS.map((q, i) => (
            <div
              key={q.id}
              className={`h-1 flex-1 rounded-full ${i <= step ? "bg-accent" : "bg-border"}`}
            />
          ))}
        </div>

        <h1 className="font-display text-2xl font-semibold mb-6">{question.prompt}</h1>

        <div className="grid gap-3">
          {question.options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => choose(opt.value)}
              className={`text-left rounded-lg border px-4 py-3.5 transition-colors ${
                selected === opt.value
                  ? "border-accent bg-surface-raised"
                  : "border-border bg-surface hover:border-accent-dim"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mt-8">
          <Button variant="ghost" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
            <ArrowLeft size={16} /> Back
          </Button>
          <Button onClick={handleNext} disabled={selected === undefined}>
            {isLast ? "Build my roadmap" : "Next"} <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
