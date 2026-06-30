import { createContext, useContext, useEffect, useState } from "react";
import { generateRoadmap } from "../lib/roadmap";

const STORAGE_KEY = "pathlight_state_v1";

const defaultState = {
  user: null, // { name, email, role: 'learner' | 'admin' }
  onboarding: null, // { goal, experience }
  assessmentAnswers: null,
  roadmap: null,
  completedCourseIds: [],
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultState, ...JSON.parse(raw) } : defaultState;
  } catch {
    return defaultState;
  }
}

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [state, setState] = useState(loadState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const login = ({ name, email, role = "learner" }) => {
    setState((prev) => ({
      ...prev,
      user: { name: name || email.split("@")[0], email, role },
    }));
  };

  const logout = () => {
    setState(defaultState);
    localStorage.removeItem(STORAGE_KEY);
  };

  const completeOnboarding = (onboarding) => {
    setState((prev) => ({ ...prev, onboarding }));
  };

  const submitAssessment = (answers) => {
    const fullAnswers = { ...answers, q4: state.onboarding?.goal };
    const roadmap = generateRoadmap(fullAnswers);
    setState((prev) => ({ ...prev, assessmentAnswers: fullAnswers, roadmap }));
  };

  const toggleCourseComplete = (courseId) => {
    setState((prev) => {
      const has = prev.completedCourseIds.includes(courseId);
      return {
        ...prev,
        completedCourseIds: has
          ? prev.completedCourseIds.filter((id) => id !== courseId)
          : [...prev.completedCourseIds, courseId],
      };
    });
  };

  const value = {
    ...state,
    login,
    logout,
    completeOnboarding,
    submitAssessment,
    toggleCourseComplete,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
