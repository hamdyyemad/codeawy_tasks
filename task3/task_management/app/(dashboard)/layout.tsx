"use client";
import { ReactNode, ReactElement } from "react";
import { usePathname } from 'next/navigation';

interface DashboardLayoutProps {
  children: ReactNode;
}

interface NavItem {
  href: string;
  icon: ReactElement;
  name: string;
}

const mainNavItems: NavItem[] = [
  {
    href: "/dashboard",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
    name: 'Dashboard'
  },
  {
    href: "/dashboard/tasks",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
    ),
    name: 'Tasks'
  }
];

const bottomNavItems: NavItem[] = [
  {
    href: "/dashboard/settings",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    ),
    name: 'Settings'
  },
  {
    href: "/dashboard/logout",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    ),
    name: 'Logout'
  },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

   // Function to get the current page name
   const getCurrentPageName = () => {
    // Combine main and bottom nav items
    const allNavItems = [...mainNavItems, ...bottomNavItems];
    
    // Find the active item
    const activeItem = allNavItems.find(item => 
      pathname === item.href || 
      (item.href !== '/dashboard' && pathname.startsWith(item.href)))
    
    return activeItem?.name || "Dashboard"; // Default to "Dashboard" if not found
  };
  
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
        {/* Navigation */}
        <div className="bg-gray-900 px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
          <nav className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
            {mainNavItems.map((item, index) => {
              const isActive = pathname === item.href || 
              (item.href !== '/dashboard' && pathname.startsWith(item.href));

              return (
              <a
                key={index}
                href={item.href}
                className={`${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-white/50 hover:bg-gray-800 hover:text-white"
                } p-4 inline-flex justify-center rounded-md smooth-hover`}
              >
                {item.icon}
              </a>
            )})}
          </nav>
          <div className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
            {bottomNavItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-2 sm:px-0">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-extralight text-white/50">{getCurrentPageName()}</h3>
            <div className="inline-flex items-center space-x-2">
              <a className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </a>
              <a className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </a>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
} 