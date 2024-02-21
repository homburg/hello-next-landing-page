import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="bg-black text-white">
      <Header title={title} className={className} />
      {children}
      <Footer />
    </div>
  );
}
