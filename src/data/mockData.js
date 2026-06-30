// All data here is local mock data — Pathlight has no backend yet.
// This is wired up so the product feels real for demos; swap this
// module out for real API calls when a backend is added.

export const TRACKS = {
  foundations: {
    id: "foundations",
    label: "Foundations",
    description: "Math, Python, and how machine learning actually works under the hood.",
  },
  core: {
    id: "core",
    label: "Core ML",
    description: "Supervised & unsupervised learning, model evaluation, real datasets.",
  },
  specialization: {
    id: "specialization",
    label: "Specialization",
    description: "Pick a lane: deep learning, NLP, computer vision, or applied AI security.",
  },
  career: {
    id: "career",
    label: "Career-Ready",
    description: "Portfolio projects, interview prep, and deployment experience.",
  },
};

export const COURSES = [
  { id: "c1", track: "foundations", title: "Python for AI", hours: 12, level: "Beginner" },
  { id: "c2", track: "foundations", title: "Linear Algebra & Calculus Essentials", hours: 10, level: "Beginner" },
  { id: "c3", track: "foundations", title: "Statistics & Probability for ML", hours: 9, level: "Beginner" },
  { id: "c4", track: "core", title: "Supervised Learning Fundamentals", hours: 14, level: "Intermediate" },
  { id: "c5", track: "core", title: "Unsupervised Learning & Clustering", hours: 8, level: "Intermediate" },
  { id: "c6", track: "core", title: "Model Evaluation & Feature Engineering", hours: 10, level: "Intermediate" },
  { id: "c7", track: "specialization", title: "Deep Learning with Neural Networks", hours: 16, level: "Advanced" },
  { id: "c8", track: "specialization", title: "NLP & Large Language Models", hours: 14, level: "Advanced" },
  { id: "c9", track: "specialization", title: "Computer Vision Foundations", hours: 13, level: "Advanced" },
  { id: "c10", track: "specialization", title: "Adversarial ML & AI Security", hours: 11, level: "Advanced" },
  { id: "c11", track: "career", title: "Building a Portfolio Project", hours: 15, level: "All levels" },
  { id: "c12", track: "career", title: "ML System Design Interviews", hours: 8, level: "All levels" },
];

export const ASSESSMENT_QUESTIONS = [
  {
    id: "q1",
    prompt: "How comfortable are you writing Python code?",
    options: [
      { value: 0, label: "I've never written code" },
      { value: 1, label: "I can read it, struggle to write it" },
      { value: 2, label: "I write scripts comfortably" },
      { value: 3, label: "I'm proficient, including OOP & libraries" },
    ],
  },
  {
    id: "q2",
    prompt: "How would you rate your math background (linear algebra, calculus, stats)?",
    options: [
      { value: 0, label: "Rusty or never covered it" },
      { value: 1, label: "High school level" },
      { value: 2, label: "University level, needs a refresher" },
      { value: 3, label: "Strong and current" },
    ],
  },
  {
    id: "q3",
    prompt: "Have you trained or fine-tuned a model before?",
    options: [
      { value: 0, label: "No, never" },
      { value: 1, label: "Followed a tutorial once or twice" },
      { value: 2, label: "Built a few models independently" },
      { value: 3, label: "Regularly build and deploy models" },
    ],
  },
  {
    id: "q5",
    prompt: "How many hours per week can you realistically commit?",
    options: [
      { value: 3, label: "Under 5 hours" },
      { value: 8, label: "5–10 hours" },
      { value: 15, label: "10–20 hours" },
      { value: 25, label: "20+ hours" },
    ],
  },
];

// Sample learners shown in the admin dashboard
export const MOCK_STUDENTS = [
  { id: "s1", name: "Ada Lovelace", email: "ada@example.com", track: "Specialization", progress: 72, lastActive: "2026-06-28" },
  { id: "s2", name: "Grace Hopper", email: "grace@example.com", track: "Core ML", progress: 41, lastActive: "2026-06-29" },
  { id: "s3", name: "Tunde Bakare", email: "tunde@example.com", track: "Career-Ready", progress: 95, lastActive: "2026-06-30" },
  { id: "s4", name: "Chiamaka Eze", email: "chiamaka@example.com", track: "Foundations", progress: 18, lastActive: "2026-06-25" },
  { id: "s5", name: "Liam Okafor", email: "liam@example.com", track: "Core ML", progress: 58, lastActive: "2026-06-27" },
];
