
// import React from "react";

// import { BsGraphUp } from "react-icons/bs";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import { PieChart, Pie, Cell } from "recharts";

// const salesData = [
//   { month: "Jan", 2022: 40, 2023: 60 },
//   { month: "Feb", 2022: 30, 2023: 50 },
//   { month: "Mar", 2022: 50, 2023: 70 },
//   { month: "Apr", 2022: 20, 2023: 40 },
//   { month: "May", 2022: 60, 2023: 80 },
//   { month: "Jun", 2022: 40, 2023: 60 },
//   { month: "Jul", 2022: 70, 2023: 90 },
//   { month: "Aug", 2022: 50, 2023: 70 },
//   { month: "Sep", 2022: 30, 2023: 50 },
//   { month: "Oct", 2022: 60, 2023: 80 },
//   { month: "Nov", 2022: 40, 2023: 60 },
//   { month: "Dec", 2022: 50, 2023: 70 },
// ];

// const donutData = [
//   { name: "7 days", value: 103.95 },
//   { name: "14 days", value: 144.06 },
//   { name: "21 days", value: 81.45 },
//   { name: "Last Week", value: 109.95 },
// ];

// // Colors for the donut chart
// const COLORS = ["#A11ED4", "#F4A261", "#2A9D8F", "#E76F51"];

// // Sample data for the "Most Sold" table
// const mostSoldData = [
//   { date: "1 January, 2025", item: "Kerala Chicken Roast", sales: "$55134", percentage: "42%" },
//   { date: "2 January, 2025", item: "NY NY Chicken Roll - Large", sales: "$55134", percentage: "35%" },
//   { date: "3 January, 2025", item: "NY NY Chicken Roll - Large", sales: "$55134", percentage: "18%" },
//   { date: "4 January, 2025", item: "NY NY Chicken Roll - Large", sales: "$55134", percentage: "48%" },
// ];

// // Sample data for the "Most Selling Items" bar chart
// const mostSellingItems = [
//   { name: "Large Pizza with Cheese", percentage: 90 },
//   { name: "Small Size Vanilla Ice Cream", percentage: 40 },
//   { name: "Pretzel Chicken Noodle Soup - Regular", percentage: 60 },
//   { name: "Cafe Kurumbik Big Vegan Brekie - L", percentage: 80 },
//   { name: "NY NY Chicken Roll - Large", percentage: 80 },
//   { name: "Key Lime Pie (Slice)", percentage: 80 },
//   { name: "Kerala Chicken Roast", percentage: 80 },
// ];

// const UserHome = () => {
//   return (
//     <div className="p-6 bg-[#1D1B22] text-white">
//       {/* Top Stats */}
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//            <div className="bg-[#16141A] flex items-center justify-between rounded-[15px] shadow-md p-4 hover:shadow-lg transition-shadow">
//              <div className="space-y-2">
//                <h1 className="text-[#DBDFEA] font-medium">Monthly growth (sales)</h1>
//                <h1 className="font-bold text-2xl text-[#DBDFEA]">02.91%</h1>
//              </div>
//              <div className="bg-[#2c2933] p-3 rounded-full">
//                <BsGraphUp  className="text-[#BD02F0]" size={20} />
//              </div>
//            </div>
   
//            <div className="bg-[#16141A] flex items-center justify-between rounded-[15px] shadow-md p-4 hover:shadow-lg transition-shadow">
//              <div className="space-y-2">
//                <h1 className="text-[#DBDFEA] font-medium">Total Sales (Jan)</h1>
//                <h1 className="font-bold text-2xl text-[#DBDFEA]">$11,375</h1>
//              </div>
//              <div className="bg-[#2c2933] p-3 rounded-full">
//                <img src="https://i.ibb.co.com/5XyYY3sL/Vector.png" alt="Dollar Icon" />
//              </div>
//            </div>
   
//            <div className="bg-[#16141A] flex items-center justify-between rounded-[15px] shadow-md p-4 hover:shadow-lg transition-shadow">
//              <div className="space-y-2">
//                <h1 className="text-[#DBDFEA] font-medium">Total Users</h1>
//                <h1 className="font-bold text-2xl text-[#DBDFEA] flex items-center gap-3">
//                  375
//                </h1>
//              </div>
//              <div className="bg-[#2c2933] p-3 rounded-full">
//                <img
//                  src="https://i.ibb.co.com/sJsn5hmR/clarity-employee-group-line.png"
//                  alt="Users Icon"
//                />
//              </div>
//            </div>
//          </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//         {/* Sales Chart */}
//         <div className="col-span-2 bg-[#16141A] p-4 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold text-center mb-4">Sales Chart</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={salesData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//               <XAxis dataKey="month" stroke="#888" />
//               <YAxis stroke="#888" />
//               <Tooltip contentStyle={{ backgroundColor: "#333", border: "none" }} />
//               <Legend />
//               <Line type="monotone" dataKey="2022" stroke="#A11ED4" />
//               <Line type="monotone" dataKey="2023" stroke="#F4A261" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Donut Chart */}
//         <div className="bg-[#16141A] p-4 rounded-lg shadow-md flex flex-col items-center">
//           <h3 className="text-lg font-semibold mb-4">Sales Distribution</h3>
//           <ResponsiveContainer width="100%" height={200}>
//             <PieChart>
//               <Pie
//                 data={donutData}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={60}
//                 outerRadius={80}
//                 fill="#8884d8"
//                 dataKey="value"
//                 label
//               >
//                 {donutData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//           <p className="text-2xl font-bold mt-4">439.11 <span className="text-sm">Total</span></p>
//           <div className="flex flex-wrap justify-center gap-4 mt-4">
//             {donutData.map((entry, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <span
//                   className="w-4 h-4 rounded-full"
//                   style={{ backgroundColor: COLORS[index] }}
//                 ></span>
//                 <span>{entry.name}: </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Most Sold Table and Most Selling Items */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Most Sold Table */}
//         <div className="bg-[#2C2933] p-4 rounded-lg shadow-md">
        
//           <table className="w-full text-left">
//             <thead>
//               <tr className="text-gray-400">
//                 <th className="py-2">Date</th>
//                 <th>Most sold</th>
//                 <th>Sales</th>
//                 <th>Percentage/day</th>
//               </tr>
//             </thead>
//             <tbody>
//               {mostSoldData.map((item, index) => (
//                 <tr key={index} className="border-t border-gray-700">
//                   <td className="py-2">{item.date}</td>
//                   <td>{item.item}</td>
//                   <td>{item.sales}</td>
//                   <td>{item.percentage}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Most Selling Items */}
//         <div className="bg-[#2C2933] p-4 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold mb-4">Most Selling Items</h3>
//           <div className="space-y-4">
//             {mostSellingItems.map((item, index) => (
//               <div key={index} className="flex items-center gap-4">
//                 <span className="w-1/3">{item.name}</span>
//                 <div className="w-2/3 bg-gray-700 rounded-full h-4">
//                   <div
//                     className="bg-[#A11ED4] h-4 rounded-full"
//                     style={{ width: `${item.percentage}%` }}
//                   ></div>
//                 </div>
//                 <span>{item.percentage}%</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserHome;




import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

// Sample data for the line chart (Sales Chart for 2022 and 2023)
const salesData = [
  { month: "Jan", 2022: 40, 2023: 60 },
  { month: "Feb", 2022: 30, 2023: 50 },
  { month: "Mar", 2022: 50, 2023: 70 },
  { month: "Apr", 2022: 20, 2023: 40 },
  { month: "May", 2022: 60, 2023: 80 },
  { month: "Jun", 2022: 40, 2023: 60 },
  { month: "Jul", 2022: 70, 2023: 90 },
  { month: "Aug", 2022: 50, 2023: 70 },
  { month: "Sep", 2022: 30, 2023: 50 },
  { month: "Oct", 2022: 60, 2023: 80 },
  { month: "Nov", 2022: 40, 2023: 60 },
  { month: "Dec", 2022: 50, 2023: 70 },
];

// Sample data for the donut chart (Sales distribution)
const donutData = [
  { name: "7 days", value: 103.95 },
  { name: "14 days", value: 144.06 },
  { name: "21 days", value: 81.45 },
  { name: "Last Week", value: 109.95 },
];

// Colors for the donut chart
const COLORS = ["#A11ED4", "#F4A261", "#2A9D8F", "#E76F51"];

// Sample data for the "Most Sold" table
const mostSoldData = [
  { date: "1 January, 2025", item: "Kerala Chicken Roast", sales: "$55134", percentage: "42%" },
  { date: "2 January, 2025", item: "NY NY Chicken Roll - Large", sales: "$55134", percentage: "35%" },
  { date: "3 January, 2025", item: "NY NY Chicken Roll - Large", sales: "$55134", percentage: "18%" },
  { date: "4 January, 2025", item: "NY NY Chicken Roll - Large", sales: "$55134", percentage: "48%" },
];

// Sample data for the "Most Selling Items" bar chart
const mostSellingItems = [
  { name: "Large Pizza with Cheese", percentage: 90 },
  { name: "Small Size Vanilla Ice Cream", percentage: 40 },
  { name: "Pretzel Chicken Noodle Soup - Regular", percentage: 60 },
  { name: "Cafe Kurumbik Big Vegan Brekie - L", percentage: 80 },
  { name: "NY NY Chicken Roll - Large", percentage: 80 },
  { name: "Key Lime Pie (Slice)", percentage: 80 },
  { name: "Kerala Chicken Roast", percentage: 80 },
];

const UserHome = () => {
  return (
    <div className="p-6 bg-[#1D1B22] text-white">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#16141A] flex items-center justify-between rounded-[15px] shadow-md p-4 hover:shadow-lg transition-shadow">
          <div className="space-y-2">
            <h1 className="text-[#DBDFEA] font-medium">Monthly growth (sales)</h1>
            <h1 className="font-bold text-2xl text-[#DBDFEA]">02.91%</h1>
          </div>
          <div className="bg-[#2c2933] p-3 rounded-full">
            <BsGraphUp className="text-[#BD02F0]" size={20} />
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Sales Chart */}
        <div className="col-span-2 bg-[#2C2933] p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-center mb-4">Sales Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip contentStyle={{ backgroundColor: "#333", border: "none" }} />
              <Legend />
              <Line type="monotone" dataKey="2022" stroke="#A11ED4" />
              <Line type="monotone" dataKey="2023" stroke="#F4A261" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Donut Chart */}
        <div className="bg-[#2C2933] p-4 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Sales Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={donutData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {donutData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p className="text-2xl font-bold mt-4">
            439.11 <span className="text-sm">Total</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {donutData.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                ></span>
                <span>{entry.name}: </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Most Sold Table and Most Selling Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Most Sold Table with DaisyUI */}
        <div className="bg-[#2C2933] p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Most Sold</h3>
          <div className="overflow-x-auto">
            <table className="table w-full text-white">
              <thead>
                <tr className="bg-gradient-to-r rounded-md from-[#811D9D]/50 to-[#2D2F6A] text-white">
                  <th className="py-3">Date</th>
                  <th className="py-3">Most Sold</th>
                  <th className="py-3">Sales</th>
                  <th className="py-3">Percentage/day</th>
                </tr>
              </thead>
              <tbody>
                {mostSoldData.map((item, index) => (
                  <tr key={index} className="border-t  border-gray-700 hover:bg-gray-800">
                    <td className="py-3">{item.date}</td>
                    <td className="py-3">{item.item}</td>
                    <td className="py-3">{item.sales}</td>
                    <td className="py-3">{item.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Most Selling Items */}
        <div className="bg-[#2C2933] p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Most Selling Items</h3>
          <div className="space-y-4">
            {mostSellingItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="w-1/3">{item.name}</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-[#A11ED4] h-4 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span>{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;