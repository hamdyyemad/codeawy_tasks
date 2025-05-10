import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="/dashboard" className="block p-2 hover:bg-gray-700 rounded">
                Overview
              </a>
            </li>
            <li>
              <a href="/dashboard/tasks" className="block p-2 hover:bg-gray-700 rounded">
                Tasks
              </a>
            </li>
            <li>
              <a href="/dashboard/settings" className="block p-2 hover:bg-gray-700 rounded">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>
    </div>
  );
} 