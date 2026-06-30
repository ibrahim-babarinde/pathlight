import { useState } from "react";
import { User } from "lucide-react";
import AppShell from "../components/layout/AppShell";
import Card from "../components/ui/Card";
import Input, { Field } from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useApp } from "../context/AppContext";

export default function Profile() {
  const { user, roadmap } = useApp();
  const [name, setName] = useState(user?.name || "");
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <AppShell>
      <h1 className="font-display text-2xl font-semibold">Profile</h1>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        <Card className="lg:col-span-1 flex flex-col items-center text-center py-8">
          <div className="w-16 h-16 rounded-full bg-surface-raised border border-border flex items-center justify-center mb-4">
            <User size={28} className="text-accent" />
          </div>
          <p className="font-display font-semibold">{user?.name || "Learner"}</p>
          <p className="text-sm text-muted">{user?.email}</p>
          {roadmap && (
            <p className="text-xs font-mono text-muted mt-3 uppercase tracking-wide">
              {roadmap.goalLabel}
            </p>
          )}
        </Card>

        <Card className="lg:col-span-2">
          <h2 className="font-display font-semibold mb-4">Account details</h2>
          <form onSubmit={handleSave} className="space-y-4 max-w-sm">
            <Field label="Full name">
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </Field>
            <Field label="Email">
              <Input value={user?.email || ""} disabled />
            </Field>
            <Button type="submit">{saved ? "Saved ✓" : "Save changes"}</Button>
          </form>
        </Card>
      </div>
    </AppShell>
  );
}
