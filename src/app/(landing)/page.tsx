import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="p-8">
      <h1>Landing page!</h1>
      <Link href="/app">Go to app</Link>
    </main>
  );
}
