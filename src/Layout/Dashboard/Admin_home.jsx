// import { CalendarClock } from 'lucide-react'
// import React from 'react'
// import { AiFillWarning } from 'react-icons/ai'
// import { FaCalendarCheck, FaDollarSign } from 'react-icons/fa'

// const Admin_home = () => {
//   return (
//     <section>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <div className="bg-[#16141A]  flex items-center justify-between rounded-[15px] shadow-md p-4 hover:shadow-lg transition-shadow">
//           <div className="space-y-2">
//             <h1 className="text-[#DBDFEA]">Monthly growth (sales)</h1>
//             <h1 className="font-bold text-2xl text-[#DBDFEA]">02.91%</h1>
//           </div>
//           <div className="bg-[#2c2933] p-3 rounded-full">
//             <FaCalendarCheck className="text-[#BD02F0]" size={24} />
//           </div>
//         </div>

//         <div className="bg-[#16141A] flex items-center justify-between rounded-[15px] shadow-md p-4 hover:shadow-lg transition-shadow">
//           <div className="space-y-2">
//             <h1 className="text-[#DBDFEA] font-medium">Total Sells (Jan)</h1>
//             <h1 className="font-bold text-2xl text-[#DBDFEA]">
//             $ 11,375
//             </h1>
//           </div>
//           <div className="bg-[#2c2933] p-3 rounded-full">
//             {/* <FaDollarSign className="text-[#BD02F0]" size={24} /> */}
//             <img src="https://i.ibb.co.com/5XyYY3sL/Vector.png" alt="" />
//           </div>
//         </div>

//         <div className="bg-[#16141A] flex items-center justify-between rounded-[15px] shadow-md p-4 hover:shadow-lg transition-shadow">
//           <div className="space-y-2">
//             <h1 className="text-[#DBDFEA] font-medium">Total User</h1>
//             <h1 className="font-bold text-2xl text-[#DBDFEA] flex items-center gap-3">
//             375 
//             </h1>
//           </div>
//           <div className="bg-[#2c2933] p-3 rounded-full">
//             <img src="https://i.ibb.co.com/sJsn5hmR/clarity-employee-group-line.png" alt="" />
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Admin_home

import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

// Sample data for the charts
const salesData = [
  { month: "Jan", 2022: 20000, 2023: 30000 },
  { month: "Feb", 2022: 25000, 2023: 20000 },
  { month: "Mar", 2022: 30000, 2023: 40000 },
  { month: "Apr", 2022: 35000, 2023: 30000 },
  { month: "May", 2022: 40000, 2023: 50000 },
  { month: "Jun", 2022: 30000, 2023: 40000 },
  { month: "Jul", 2022: 50000, 2023: 60000 },
  { month: "Aug", 2022: 45000, 2023: 55000 },
  { month: "Sept", 2022: 40000, 2023: 50000 },
  { month: "Oct", 2022: 50000, 2023: 60000 },
  { month: "Nov", 2022: 55000, 2023: 70000 },
  { month: "Dec", 2022: 60000, 2023: 80000 },
];

const upgradesData = [
  { day: "Sat(16)", upgrades: 40 },
  { day: "Sun(17)", upgrades: 50 },
  { day: "Mon(18)", upgrades: 60 },
  { day: "Tues(19)", upgrades: 30 },
  { day: "Wed(20)", upgrades: 70 },
  { day: "Thu(21)", upgrades: 80 },
  { day: "Fri(22)", upgrades: 50 },
];

// Sample data for the table
const tableData = [
  {
    companyName: "Fog Harbor Fish House",
    subscriberId: "55-1234",
    phoneNumber: "(555) 555-1234",
    startingDate: "12 July 2024",
    subscriptionType: "Half yearly",
  },
  {
    companyName: "GEMIN7BO Restaurant",
    subscriberId: "55-1234",
    phoneNumber: "(555) 555-1234",
    startingDate: "12 July 2024",
    subscriptionType: "Yearly",
  },
  {
    companyName: "The Table at Season To Taste",
    subscriberId: "55-1234",
    phoneNumber: "(555) 555-1234",
    startingDate: "12 July 2024",
    subscriptionType: "Monthly",
  },
  {
    companyName: "Marina Kitchen",
    subscriberId: "55-1234",
    phoneNumber: "(555) 555-1234",
    startingDate: "12 July 2024",
    subscriptionType: "Monthly",
  },
  {
    companyName: "Marina Kitchen",
    subscriberId: "55-1234",
    phoneNumber: "(555) 555-1234",
    startingDate: "12 July 2024",
    subscriptionType: "Monthly",
  },
];

const Admin_home = () => {
  return (
    <section className="min-h-screen">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#16141A] flex items-center justify-between rounded-[15px] shadow-md p-4 hover:shadow-lg transition-shadow">
          <div className="space-y-2">
            <h1 className="text-[#DBDFEA] font-medium">Monthly growth (sales)</h1>
            <h1 className="font-bold text-2xl text-[#DBDFEA]">02.91%</h1>
          </div>
          <div className="bg-[#2c2933] p-3 rounded-full">
            <FaCalendarCheck className="text-[#BD02F0]" size={24} />
          </div>
        </div>

        <div className="bg-[#16141A] flex items-center justify-between rounded-[15px] shadow-md p-4 hover:shadow-lg transition-shadow">
          <div className="space-y-2">
            <h1 className="text-[#DBDFEA] font-medium">Total Sales (Jan)</h1>
            <h1 className="font-bold text-2xl text-[#DBDFEA]">$11,375</h1>
          </div>
          <div className="bg-[#2c2933] p-3 rounded-full">
            <img src="https://i.ibb.co.com/5XyYY3sL/Vector.png" alt="Dollar Icon" />
          </div>
        </div>

        <div className="bg-[#16141A] flex items-center justify-between rounded-[15px] shadow-md p-4 hover:shadow-lg transition-shadow">
          <div className="space-y-2">
            <h1 className="text-[#DBDFEA] font-medium">Total Users</h1>
            <h1 className="font-bold text-2xl text-[#DBDFEA] flex items-center gap-3">
              375
            </h1>
          </div>
          <div className="bg-[#2c2933] p-3 rounded-full">
            <img
              src="https://i.ibb.co.com/sJsn5hmR/clarity-employee-group-line.png"
              alt="Users Icon"
            />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-[#16141A] rounded-[15px] shadow-md p-6">
          <h2 className="text-[#DBDFEA] text-lg font-medium text-center mb-4">Sales Chart</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid stroke="#2c2933" strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="#DBDFEA" />
                <YAxis stroke="#DBDFEA" tickFormatter={(value) => `${value / 1000}k`} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#2c2933", border: "none", color: "#DBDFEA" }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="2022"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="2023"
                  stroke="#ff7300"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Upgrades Per Day Chart */}
        <div className="bg-[#16141A] rounded-[15px] shadow-md p-6">
          <h2 className="text-[#DBDFEA] text-lg font-medium text-center mb-4">Upgrades Per Day</h2>
          <div className="h-80">
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={upgradesData}>
      <CartesianGrid stroke="#2c2933" strokeDasharray="3 3" />
      <XAxis dataKey="day" stroke="#DBDFEA" />
      <YAxis stroke="#DBDFEA" />
      <Tooltip
        contentStyle={{ backgroundColor: "#2c2933", border: "#DBDFEA", color: "#ffff" }}
        wrapperStyle={{ background: "transparent" }}
      />
      <Bar dataKey="upgrades" fill="#44179D" radius={[5, 5, 0, 0]} barSize={30} />
    </BarChart>
  </ResponsiveContainer>
</div>

        </div>
      </div>

      {/* Table Section */}
     <div className="bg-[#16141A] rounded-[15px] shadow-md p-6">
  <div className="overflow-x-auto">
    <table className="table w-full">
      <thead>
        <tr className="bg-gradient-to-r from-[#811D9D]/50 to-[#2D2F6A] text-[#DBDFEA] text-base rounded-t-xl">
          <th className="py-3 px-4 first:rounded-tl-xl last:rounded-tr-xl ">Company Name</th>
          <th className="py-3 px-4">Subscriber ID</th>
          <th className="py-3 px-4">Phone Number</th>
          <th className="py-3 px-4">Starting Date</th>
          <th className="py-3 px-4">Subscription Type</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr
            key={index}
            className="border-b border-[#2c2933] text-[#DBDFEA] hover:bg-[#2c2933] cursor-pointer transition-colors"
          >
            <td className="py-3 px-4">{row.companyName}</td>
            <td className="py-3 px-4">{row.subscriberId}</td>
            <td className="py-3 px-4">{row.phoneNumber}</td>
            <td className="py-3 px-4">{row.startingDate}</td>
            <td className="py-3 px-4">{row.subscriptionType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    </section>
  );
};

export default Admin_home;