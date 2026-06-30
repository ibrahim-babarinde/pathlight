import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import Input, { Field } from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }
    setError("");
    setDone(true);
    setTimeout(() => navigate("/login"), 1500);
  };

  if (done) {
    return (
      <AuthLayout title="Password updated" subtitle="Redirecting you to sign in…" />
    );
  }

  return (
    <AuthLayout title="Set a new password" subtitle="Choose something you haven't used before.">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="New password">
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
        </Field>
        <Field label="Confirm password">
          <Input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="••••••••" />
        </Field>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <Button type="submit" className="w-full">Update password</Button>
      </form>
    </AuthLayout>
  );
}
