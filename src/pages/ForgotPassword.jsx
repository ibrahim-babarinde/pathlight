import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import Input, { Field } from "../components/ui/Input";
import Button from "../components/ui/Button";
import { MailCheck } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  if (sent) {
    return (
      <AuthLayout title="Check your inbox" subtitle="">
        <div className="flex flex-col items-center text-center gap-3 py-6">
          <MailCheck className="text-accent" size={32} />
          <p className="text-sm text-muted">
            If an account exists for <span className="text-text">{email}</span>, a reset
            link is on its way. (Demo build — no email is actually sent.)
          </p>
          <Link to="/login" className="text-accent text-sm hover:underline mt-2">
            Back to sign in
          </Link>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email and we'll send you a reset link."
      footer={
        <Link to="/login" className="text-accent hover:underline">
          Back to sign in
        </Link>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Email">
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
        </Field>
        <Button type="submit" className="w-full">Send reset link</Button>
      </form>
    </AuthLayout>
  );
}
