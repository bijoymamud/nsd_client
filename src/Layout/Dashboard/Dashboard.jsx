// import { useState } from "react";
// import { Outlet, NavLink } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Package,
//   ShoppingCart,
//   Users,
//   MessageSquare,
//   Mail,
//   BarChart2,
//   Share2,
//   Activity,
//   User,
//   Users2,
//   Settings,
//   ChevronsLeft,
//   ChevronsRight,
// } from "lucide-react";

// export default function Dashboard() {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const menuItems = [
//     {
//       items: [
//         { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/admin_home" },
//         { name: "Products", icon: <Package size={20} />, path: "/products" },
//         { name: "Order", icon: <ShoppingCart size={20} />, path: "/orders" },
//         { name: "Customers", icon: <Users size={20} />, path: "/customers" },
//         { name: "Chat", icon: <MessageSquare size={20} />, path: "/chat", badge: "22" },
//       ],
//     },
//     {
//       items: [
//         { name: "Email", icon: <Mail size={20} />, path: "/email" },
//         { name: "Analytics", icon: <BarChart2 size={20} />, path: "/analytics" },
//         { name: "Integration", icon: <Share2 size={20} />, path: "/integration" },
//         { name: "Performance", icon: <Activity size={20} />, path: "/performance" },
//       ],
//     },
//     {
//       items: [
//         { name: "Account", icon: <User size={20} />, path: "/account" },
//         { name: "Members", icon: <Users2 size={20} />, path: "/members" },
//       ],
//     },
//   ];

//   return (
//     <div className="flex h-screen bg-[#606060]">
//       {/* Sidebar */}
//       <aside
//         className={`${
//           isCollapsed ? "w-20" : "w-72"
//         } bg-[#111014] border-r border-[#111014] shadow-gray-900  transition-all duration-500 ease-in-out shadow-lg`}
//       >
//         {/* Logo */}
//         <div className="py-10 flex items-center px-4   overflow-hidden">
//         <img src="https://i.ibb.co.com/3YMJWXhQ/Nexus-Vision-LOGO-Aadf-2-1.png" alt="" />
//         </div>

//         {/* Navigation */}
//         <nav className="p-4">
//           {menuItems.map((section, idx) => (
//             <div key={idx} className="mb-8">
//               <ul className="space-y-2">
//                 {section.items.map((item, itemIdx) => (
//                   <li key={itemIdx}>
//                     <NavLink
//                       to={item.path}
//                       className={({ isActive }) =>
//                         `flex items-center gap-3 px-3 py-2 text-[#CBCCD2] rounded-lg group relative transition-all duration-300 ${
//                           isActive ? "bg-[#a11ed4] shadow-sm " : "hover:bg-[#a11ed4] hover:shadow-sm"
//                         }`
//                       }
//                     >
//                       <span className="text-[#CBCCD2] group-hover:text-gray-200 transition-colors duration-300">
//                         {item.icon}
//                       </span>
//                       <span
//                         className={`transform transition-all duration-500 ${
//                           isCollapsed ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
//                         } whitespace-nowrap`}
//                       >
//                         {item.name}
//                       </span>
//                       {item.badge && (
//                         <span
//                           className={`ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full transform transition-all duration-500 shadow-sm ${
//                             isCollapsed ? "opacity-0 scale-0" : "opacity-100 scale-100"
//                           }`}
//                         >
//                           {item.badge}
//                         </span>
//                       )}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Navbar */}
//         <header className="h-16 bg-[#16141A]  py-10 shadow-md">
//           <div className="h-full px-4 flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => setIsCollapsed(!isCollapsed)}
//                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md"
//               >
//                 {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
//               </button>
//               {/* live date */}

//               <h1>Saturday <span>25 july, 2025</span></h1>


//             </div>
//             <div className="flex items-center gap-4">
//               <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md">
//                 <Settings size={20} />
//               </button>
//               <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg">
//                 Export
//               </button>
//             </div>
//           </div>
//         </header>

//         {/* Main Content Area */}
//         <main className="flex-1 overflow-auto p-6 bg-[#1D1B22]">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
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
  BellDot,
} from "lucide-react";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { TbUserStar } from "react-icons/tb";

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  // Function to format the current date
  const formatDate = () => {
    const date = new Date();
    const dayName = date.toLocaleString("en-US", { weekday: "long" }); // e.g., "Saturday"
    const day = date.getDate(); // e.g., 25
    const month = date.toLocaleString("en-US", { month: "long" }); // e.g., "July"
    const year = date.getFullYear(); // e.g., 2025
    return `${dayName} ${day} ${month}, ${year}`;
  };

  // Update the date on component mount
  useEffect(() => {
    setCurrentDate(formatDate());
    // Optional: Update the date every minute to keep it real-time
    const interval = setInterval(() => {
      setCurrentDate(formatDate());
    }, 60000); // Update every 60 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const menuItems = [
    {
      items: [
        { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard/admin_home" },
        { name: "User Managment", icon: <TbUserStar size={20} />, path: "/dashboard/user_managment" },
        { name: "Privacy", icon: <MdOutlinePrivacyTip size={20} />, path: "/dashboard/privacy" },
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
        } bg-[#111014] border-r border-[#111014] shadow-gray-900 transition-all duration-500 ease-in-out shadow-lg`}
      >
        {/* Logo */}
        <div className="py-10 flex items-center px-4 overflow-hidden">
          <img src="https://i.ibb.co.com/3YMJWXhQ/Nexus-Vision-LOGO-Aadf-2-1.png" alt="Nexus Vision Logo" />
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
                          isActive ? "bg-[#a11ed4] shadow-sm" : "hover:bg-[#a11ed4] hover:shadow-sm"
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
        <header className="h-16 bg-[#16141A] py-10 shadow-md">
          <div className="h-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-2 hover:bg-gray-700  text-[#DBDFEA] bg-[#2c2933] rounded-full transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
              </button>
              {/* Live Date */}
              <h1 className="text-[#DBDFEA] text-lg font-medium">
                {currentDate || "Loading date..."}
              </h1>
            </div>
            <div className="flex items-center gap-4 pr-10">
      <div className="flex items-center space-x-10">
      <BellDot size={28}  className="text-[#DBDFEA]"/>
        <h1 className="text-[#DBDFEA]">Hi, Jones</h1>
      <img 
         className="w-10 h-10 rounded-full object-cover shadow-md shadow-[#2c2933] cursor-pointer"
         src="https://i.ibb.co.com/XvMzTKd/Group-1000004524.png" alt="" />
      </div>
             
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