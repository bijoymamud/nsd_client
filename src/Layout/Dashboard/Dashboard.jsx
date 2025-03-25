

// import { useState, useEffect } from "react";
// import { Outlet, NavLink } from "react-router-dom";
// import {
//   LayoutDashboard,
//   ChevronsLeft,
//   ChevronsRight,
//   BellDot,
// } from "lucide-react";
// import { MdOutlinePrivacyTip } from "react-icons/md";
// import { TbMessageChatbot, TbUserStar } from "react-icons/tb";
// import { LuNotepadText } from "react-icons/lu";
// import { ImQuestion } from "react-icons/im";
// import { FaRegUser } from "react-icons/fa";

// // Static role (for demonstration, set this to "admin" or "user")
// const USER_ROLE = "User"; // Change to "user" to switch to user view

// export default function Dashboard() {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [currentDate, setCurrentDate] = useState("");

//   const formatDate = () => {
//     const date = new Date();
//     const dayName = date.toLocaleString("en-US", { weekday: "long" });
//     const day = date.getDate();
//     const month = date.toLocaleString("en-US", { month: "long" });
//     const year = date.getFullYear();
//     return `${dayName} ${day} ${month}, ${year}`;
//   };

//   useEffect(() => {
//     setCurrentDate(formatDate());
//     const interval = setInterval(() => {
//       setCurrentDate(formatDate());
//     }, 60000);

//     return () => clearInterval(interval);
//   }, []);

//   // Menu items for admin
//   const adminMenuItems = [
//     {
//       items: [
//         { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard/admin_home" },
//         { name: "User Management", icon: <TbUserStar size={20} />, path: "/dashboard/user_management" },
//         { name: "Privacy", icon: <MdOutlinePrivacyTip size={20} />, path: "/dashboard/privacy" },
//         { name: "Terms & Conditions", icon: <LuNotepadText size={20} />, path: "/dashboard/terms_conditions" },
//         { name: "FAQ", icon: <ImQuestion size={20} />, path: "/dashboard/faq" },
//       ],
//     },
//   ];

//   // Menu items for user
//   const userMenuItems = [
//     {
//       items: [
//         { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/user_dashboard/user_home" },
//         { name: "File Management", icon: <img src="https://i.ibb.co.com/JRWg9Zdx/hugeicons-time-management.png" alt="File Management" />, path: "/user_dashboard/file_management" },
//         { name: "Company Profile", icon: <FaRegUser size={20} />, path: "/user_dashboard/company_profile" },
//         { name: "Chatbot", icon: <TbMessageChatbot size={20} />, path: "/user_dashboard/chatbot" },
//       ],
//     },
//   ];

//   // Select menu items based on role
//   const menuItems = USER_ROLE === "admin" ? adminMenuItems : userMenuItems;

//   // User-specific header info
//   const headerInfo = USER_ROLE === "admin" ? "Hi, Admin Jones" : "Hi, User Jones";

//   return (
//     <div className="flex h-screen bg-[#606060]">
//       {/* Sidebar */}
//       <aside
//         className={`${
//           isCollapsed ? "w-20" : "w-72"
//         } bg-[#111014] border-r border-[#111014] shadow-gray-900 transition-all duration-500 ease-in-out shadow-lg`}
//       >
//         <div className="py-10 flex items-center px-4 overflow-hidden">
//           <img src="https://i.ibb.co.com/3YMJWXhQ/Nexus-Vision-LOGO-Aadf-2-1.png" alt="Nexus Vision Logo" />
//         </div>

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
//                           isActive ? "bg-[#a11ed4] shadow-sm" : "hover:bg-[#a11ed4] hover:shadow-sm"
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
//         <header className="h-16 bg-[#16141A] py-10 shadow-md">
//           <div className="h-full flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => setIsCollapsed(!isCollapsed)}
//                 className="p-2 hover:bg-gray-700 text-[#DBDFEA] bg-[#2c2933] rounded-full transition-colors duration-300 shadow-sm hover:shadow-md"
//               >
//                 {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
//               </button>
//               <h1 className="text-[#DBDFEA] text-lg font-medium">
//                 {currentDate || "Loading date..."}
//               </h1>
//             </div>
//             <div className="flex items-center gap-4 pr-10">
//               <div className="flex items-center space-x-10">
//                 <BellDot size={28} className="text-[#DBDFEA]" />
//                 <h1 className="text-[#DBDFEA]">{headerInfo}</h1>
//                 <img
//                   className="w-10 h-10 rounded-full object-cover shadow-md shadow-[#2c2933] cursor-pointer"
//                   src="https://i.ibb.co.com/XvMzTKd/Group-1000004524.png"
//                   alt="Profile"
//                 />
//               </div>
//             </div>
//           </div>
//         </header>

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
  ChevronsLeft,
  ChevronsRight,
  BellDot,
} from "lucide-react";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { TbMessageChatbot, TbUserStar } from "react-icons/tb";
import { LuNotepadText } from "react-icons/lu";
import { ImQuestion } from "react-icons/im";
import { FaRegUser } from "react-icons/fa";

// Static role (for demonstration, set this to "admin" or "user")
const USER_ROLE = "user"; // Change to "admin" to switch to admin view

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  const formatDate = () => {
    const date = new Date();
    const dayName = date.toLocaleString("en-US", { weekday: "long" });
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${dayName} ${day} ${month}, ${year}`;
  };

  useEffect(() => {
    setCurrentDate(formatDate());
    const interval = setInterval(() => {
      setCurrentDate(formatDate());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Menu items for admin
  const adminMenuItems = [
    {
      items: [
        { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard/admin_home" },
        { name: "User Management", icon: <TbUserStar size={20} />, path: "/dashboard/user_management" },
        { name: "Privacy", icon: <MdOutlinePrivacyTip size={20} />, path: "/dashboard/privacy" },
        { name: "Terms & Conditions", icon: <LuNotepadText size={20} />, path: "/dashboard/terms_conditions" },
        { name: "FAQ", icon: <ImQuestion size={20} />, path: "/dashboard/faq" },
      ],
    },
  ];

  // Menu items for user
  const userMenuItems = [
    {
      items: [
        { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard/user_home" },
        { name: "File Management", icon: <img src="https://i.ibb.co.com/JRWg9Zdx/hugeicons-time-management.png" alt="File Management" />, path: "/dashboard/file_managment" },
        { name: "Company Profile", icon: <FaRegUser size={20} />, path: "/dashboard/company_profile" },
        { name: "Chatbot", icon: <TbMessageChatbot size={20} />, path: "/dashboard/chat" },
      ],
    },
  ];

  // Select menu items based on role
  const menuItems = USER_ROLE === "admin" ? adminMenuItems : userMenuItems;

  // User-specific header info
  const headerInfo = USER_ROLE === "admin" ? "Hi, Admin Jones" : "Hi, User Jones";

  return (
    <div className="flex h-screen bg-[#606060]">
      {/* Sidebar */}
      <aside
        className={`${
          isCollapsed ? "w-20" : "w-72"
        } bg-[#111014] border-r border-[#111014] shadow-gray-900 transition-all duration-500 ease-in-out shadow-lg`}
      >
        <div className="py-10 flex items-center px-4 overflow-hidden">
          <img src="https://i.ibb.co.com/3YMJWXhQ/Nexus-Vision-LOGO-Aadf-2-1.png" alt="Nexus Vision Logo" />
        </div>

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
                className="p-2 hover:bg-gray-700 text-[#DBDFEA] bg-[#2c2933] rounded-full transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
              </button>
              <h1 className="text-[#DBDFEA] text-lg font-medium">
                {currentDate || "Loading date..."}
              </h1>
            </div>
            <div className="flex items-center gap-4 pr-10">
              <div className="flex items-center space-x-10">
                <BellDot size={28} className="text-[#DBDFEA]" />
                <h1 className="text-[#DBDFEA]">{headerInfo}</h1>
                <img
                  className="w-10 h-10 rounded-full object-cover shadow-md shadow-[#2c2933] cursor-pointer"
                  src="https://i.ibb.co.com/XvMzTKd/Group-1000004524.png"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6 bg-[#1D1B22]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}