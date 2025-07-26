// app/admin/layout.tsx
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-6 bg-gradient-to-b from-white to-neutral-50">
        {children}
      </main>
      <Footer />
    </>
  );
}
