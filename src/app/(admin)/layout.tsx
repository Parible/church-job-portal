// app/admin/layout.tsx
import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-white to-neutral-50">
      <Sidebar />
      <main className="ml-64 flex-1 px-6 py-6">{children}</main>
    </div>
  );
}
