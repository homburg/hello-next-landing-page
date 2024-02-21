export function Header({
  title,
  className = "p-8",
}: {
  title: string;
  className?: string;
}) {
  return (
    <header className={`${className} outline-dashed outline-2 outline-white`}>
      <h2>Header ({title})</h2>
    </header>
  );
}
