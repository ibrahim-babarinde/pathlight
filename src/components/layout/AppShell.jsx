import Navbar from "./Navbar";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-bg contour-bg">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}
