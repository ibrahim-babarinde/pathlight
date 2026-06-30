import { COURSES } from "../data/mockData";

// Turns assessment answers into a starting track + recommended order.
// This is intentionally simple, readable logic — easy to swap for a
// real model or rules engine later without touching the UI.
export function generateRoadmap(answers) {
  const codeSkill = answers.q1 ?? 0;
  const mathSkill = answers.q2 ?? 0;
  const modelExp = answers.q3 ?? 0;
  const goal = answers.q4 ?? "build";
  const hoursPerWeek = answers.q5 ?? 5;

  const score = codeSkill + mathSkill + modelExp;

  let startTrack = "foundations";
  if (score >= 7) startTrack = "specialization";
  else if (score >= 4) startTrack = "core";

  const order = ["foundations", "core", "specialization", "career"];
  const startIndex = order.indexOf(startTrack);
  const trackOrder = order.slice(startIndex).concat(order.slice(0, startIndex === 0 ? 0 : startIndex));

  const recommendedCourses = COURSES.filter((c) => trackOrder.includes(c.track)).sort(
    (a, b) => trackOrder.indexOf(a.track) - trackOrder.indexOf(b.track)
  );

  const totalHours = recommendedCourses.reduce((sum, c) => sum + c.hours, 0);
  const estimatedWeeks = Math.max(1, Math.ceil(totalHours / hoursPerWeek));

  const goalLabel = {
    career: "Career change",
    security: "AI for cybersecurity",
    research: "Research focus",
    build: "Building products",
  }[goal];

  return {
    startTrack,
    trackOrder,
    recommendedCourses,
    totalHours,
    estimatedWeeks,
    hoursPerWeek,
    goalLabel,
    generatedAt: new Date().toISOString(),
  };
}
