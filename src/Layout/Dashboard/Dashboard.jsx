import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  MessageSquare,
  Mail,
  BarChart2,
  Share2,
  Activity,
  User,
  Users2,
  Settings,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    {
      items: [
        { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/admin_home" },
        { name: "Products", icon: <Package size={20} />, path: "/products" },
        { name: "Order", icon: <ShoppingCart size={20} />, path: "/orders" },
        { name: "Customers", icon: <Users size={20} />, path: "/customers" },
        { name: "Chat", icon: <MessageSquare size={20} />, path: "/chat", badge: "22" },
      ],
    },
    {
      items: [
        { name: "Email", icon: <Mail size={20} />, path: "/email" },
        { name: "Analytics", icon: <BarChart2 size={20} />, path: "/analytics" },
        { name: "Integration", icon: <Share2 size={20} />, path: "/integration" },
        { name: "Performance", icon: <Activity size={20} />, path: "/performance" },
      ],
    },
    {
      items: [
        { name: "Account", icon: <User size={20} />, path: "/account" },
        { name: "Members", icon: <Users2 size={20} />, path: "/members" },
      ],
    },
  ];

  return (
    <div className="flex h-screen bg-[#606060]">
      {/* Sidebar */}
      <aside
        className={`${
          isCollapsed ? "w-20" : "w-72"
        } bg-[#111014] border-r border-[#111014] shadow-gray-900  transition-all duration-500 ease-in-out shadow-lg`}
      >
        {/* Logo */}
        <div className="py-10 flex items-center px-4   overflow-hidden">
        <img src="https://i.ibb.co.com/3YMJWXhQ/Nexus-Vision-LOGO-Aadf-2-1.png" alt="" />
        </div>

        {/* Navigation */}
        <nav className="p-4">
          {menuItems.map((section, idx) => (
            <div key={idx} className="mb-8">
              <ul className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 text-[#CBCCD2] rounded-lg group relative transition-all duration-300 ${
                          isActive ? "bg-[#a11ed4] shadow-sm " : "hover:bg-[#a11ed4] hover:shadow-sm"
                        }`
                      }
                    >
                      <span className="text-[#CBCCD2] group-hover:text-gray-200 transition-colors duration-300">
                        {item.icon}
                      </span>
                      <span
                        className={`transform transition-all duration-500 ${
                          isCollapsed ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
                        } whitespace-nowrap`}
                      >
                        {item.name}
                      </span>
                      {item.badge && (
                        <span
                          className={`ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full transform transition-all duration-500 shadow-sm ${
                            isCollapsed ? "opacity-0 scale-0" : "opacity-100 scale-100"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="h-16 bg-[#16141A]  py-10 shadow-md">
          <div className="h-full px-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
              </button>
              <div className="flex items-center max-w-md">
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full px-4 py-2 text-sm  rounded-lg focus:outline-none focus:border-gray-300 transition-all duration-300 shadow-sm focus:shadow-md"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md">
                <Settings size={20} />
              </button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg">
                Export
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6 bg-[#1D1B22]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}