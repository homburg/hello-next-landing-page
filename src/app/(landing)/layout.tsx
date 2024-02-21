import { Layout } from "@/components/Layout";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout title="landing layout" className="px-8 py-16">
      {children}
    </Layout>
  );
}
