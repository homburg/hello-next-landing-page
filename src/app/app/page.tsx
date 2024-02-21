import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1>Home page!</h1>
      <Link href="/">Go home</Link>
    </main>
  );
}
