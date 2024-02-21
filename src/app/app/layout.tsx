import { Layout } from "@/components/Layout";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout title="app layout">{children}</Layout>;
}
