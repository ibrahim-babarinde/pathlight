import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import Input, { Field } from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useApp } from "../context/AppContext";

export default function Login() {
  const { login } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Enter both your email and password.");
      return;
    }
    const role = email.trim().toLowerCase() === "admin@pathlight.app" ? "admin" : "learner";
    login({ email, role });
    navigate(role === "admin" ? "/admin" : "/dashboard");
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to pick up your roadmap where you left off."
      footer={
        <>
          New here?{" "}
          <Link to="/register" className="text-accent hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Email">
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
        </Field>
        <Field label="Password">
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
        </Field>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <div className="flex justify-end">
          <Link to="/forgot-password" className="text-xs text-muted hover:text-accent">
            Forgot password?
          </Link>
        </div>
        <Button type="submit" className="w-full">Sign in</Button>
        <p className="text-xs text-muted text-center pt-1">
          Demo build — any email/password works. Use admin@pathlight.app to view the admin dashboard.
        </p>
      </form>
    </AuthLayout>
  );
}
