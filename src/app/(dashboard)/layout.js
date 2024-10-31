import Sidebar from "@/components/sidebar";


export default function DashboardLayout({children}) {
  return (
    <main className="flex h-svh bg-muted">
      <Sidebar />
      <div className="content flex-1 overflow-y-scroll">
        {children}
      </div>
    </main>
  );
}