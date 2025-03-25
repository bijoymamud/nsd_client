// import React, { useState } from "react";

// import { FiSearch, FiEye, FiEdit } from "react-icons/fi";

// // Sample data for the table
// const fileData = [
//   { date: "1 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Pending", comment: "View" },
//   { date: "2 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Uploaded", comment: "Edit" },
//   { date: "3 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Pending", comment: "View" },
//   { date: "4 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Uploaded", comment: "View" },
//   { date: "5 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Pending", comment: "Edit" },
//   { date: "6 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Uploaded", comment: "Edit" },
//   { date: "7 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Pending", comment: "View" },
//   { date: "8 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Uploaded", comment: "Edit" },
//   { date: "9 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Uploaded", comment: "View" },
//   { date: "10 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Uploaded", comment: "View" },
// ];

// const FileManagment = () => {
//   const [searchDate, setSearchDate] = useState("");
//   const [filteredData, setFilteredData] = useState(fileData);

//   // Handle search by date
//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchDate(value);

//     if (value) {
//       const filtered = fileData.filter((item) =>
//         item.date.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredData(filtered);
//     } else {
//       setFilteredData(fileData);
//     }
//   };

//   // Handle View action
//   const handleView = (item) => {
//     console.log("Viewing item:", item);
//     // Add your view logic here (e.g., open a modal or navigate to a view page)
//   };

//   // Handle Edit action
//   const handleEdit = (item) => {
//     console.log("Editing item:", item);
//     // Add your edit logic here (e.g., open a form or navigate to an edit page)
//   };

//   return (
//     <div className="p-6 bg-[#1D1B22] text-white">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-semibold">
//           Welcome, <span className="text-gray-400">The Table at Season To Taste Ltd.</span>
//         </h1>
//         <div className="relative">
//           <input
//             type="text"
//             value={searchDate}
//             onChange={handleSearch}
//             placeholder="Search by Date"
//             className="p-2 pl-10 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
//           />
//           <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="bg-gradient-to-r from-[#A11ED4] to-[#F4A261] text-white">
//               <th className="py-3 px-4">Date</th>
//               <th className="py-3 px-4">Upload date</th>
//               <th className="py-3 px-4">Upload Time</th>
//               <th className="py-3 px-4">Status</th>
//               <th className="py-3 px-4">Comment</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((item, index) => (
//               <tr key={index} className="border-t border-gray-700 hover:bg-gray-800">
//                 <td className="py-3 px-4">{item.date}</td>
//                 <td className="py-3 px-4">{item.uploadDate}</td>
//                 <td className="py-3 px-4">{item.uploadTime}</td>
//                 <td className="py-3 px-4">
//                   <span
//                     className={`flex items-center gap-2 ${
//                       item.status === "Pending" ? "text-[#A11ED4]" : "text-blue-400"
//                     }`}
//                   >
//                     <span
//                       className={`w-4 h-4 rounded-full ${
//                         item.status === "Pending" ? "bg-[#A11ED4]" : "bg-blue-400"
//                       }`}
//                     ></span>
//                     {item.status}
//                   </span>
//                 </td>
//                 <td className="py-3 px-4">
//                   <button
//                     onClick={() =>
//                       item.comment === "View" ? handleView(item) : handleEdit(item)
//                     }
//                     className="text-gray-400 hover:text-white flex items-center gap-2"
//                   >
//                     {item.comment === "View" ? <FiEye /> : <FiEdit />}
//                     {item.comment}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default FileManagment;


import React, { useState } from "react";
import { FiSearch, FiEye, FiEdit, FiUpload } from "react-icons/fi";

// Sample data for the table with an additional field for the image
const initialFileData = [
  { date: "1 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Pending", comment: "View", image: null },
  { date: "2 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Uploaded", comment: "Edit", image: null },
  { date: "3 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Pending", comment: "View", image: null },
  { date: "4 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Uploaded", comment: "View", image: null },
  { date: "5 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Pending", comment: "Edit", image: null },
  { date: "6 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Uploaded", comment: "Edit", image: null },
  { date: "7 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Pending", comment: "View", image: null },
  { date: "8 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Uploaded", comment: "Edit", image: null },
  { date: "9 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Uploaded", comment: "View", image: null },
  { date: "10 January, 2025", uploadDate: "1/03/25", uploadTime: "07:38 am", status: "Uploaded", comment: "View", image: null },
];

const FileManagement = () => {
  const [searchDate, setSearchDate] = useState("");
  const [fileData, setFileData] = useState(initialFileData);
  const [filteredData, setFilteredData] = useState(initialFileData);

  // Handle search by date
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchDate(value);

    if (value) {
      const filtered = fileData.filter((item) =>
        item.date.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(fileData);
    }
  };

  // Handle image upload
  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedData = [...fileData];
        updatedData[index] = {
          ...updatedData[index],
          image: reader.result, // Store the image as a base64 string
          status: "Uploaded", // Change status to "Uploaded"
        };
        setFileData(updatedData);
        setFilteredData(updatedData); // Update filtered data as well
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle View action
  const handleView = (item) => {
    console.log("Viewing item:", item);
    // Add your view logic here (e.g., open a modal or navigate to a view page)
  };

  // Handle Edit action
  const handleEdit = (item) => {
    console.log("Editing item:", item);
    // Add your edit logic here (e.g., open a form or navigate to an edit page)
  };

  return (
    <div className="p-6 bg-[#1D1B22] text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">
          Welcome, <span className="text-gray-400 text-[16px]">The Table at Season To Taste Ltd.</span>
        </h1>
        <div className="relative">
          <input
            type="text"
            value={searchDate}
            onChange={handleSearch}
            placeholder="Search by Date"
            className="p-2 pl-10 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gradient-to-r from-[#811D9D]/40 to-[#2D2F6A]/40 text-[#CBCCD2]">
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Upload date</th>
              <th className="py-3 px-4">Upload Time</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Comment</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="border-t text-[#CBCCD2] border-gray-700 hover:bg-gray-800">
                <td className="py-3 px-4">{item.date}</td>
                <td className="py-3 px-4">{item.uploadDate}</td>
                <td className="py-3 px-4">{item.uploadTime}</td>
                <td className="py-3 px-4">
                  {item.status === "Pending" ? (
                    <div className="flex items-center gap-2">
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(index, e)}
                          className="hidden"
                        />
                        <div className="flex items-center gap-2 text-[#CBCCD2]">
                          <FiUpload />
                          <span>Upload</span>
                        </div>
                      </label>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-2 text-green-400">
                        <span className="w-4 h-4 rounded-full bg-green-400"></span>
                        {item.status}
                      </span>
                      {item.image && (
                        <img
                          src={item.image}
                          alt="Uploaded"
                          className="w-8 h-8 rounded-full object-cover ml-2"
                        />
                      )}
                    </div>
                  )}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() =>
                      item.comment === "View" ? handleView(item) : handleEdit(item)
                    }
                    className="text-gray-400 hover:text-white flex items-center gap-2"
                  >
                    {item.comment === "View" ? <FiEye /> : <FiEdit />}
                    {item.comment}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileManagement;