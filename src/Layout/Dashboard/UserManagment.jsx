
import React, { useState, useEffect } from "react";
import { FaAngleRight, FaPlus, FaSearch } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { LuSquareUserRound } from "react-icons/lu";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { name: "Kicker Nicil", id: "55-1234", phone: "(555) 555-1234", startDate: "12 July 2024", package: "Half yearly", status: "Active" },
    { name: "Kicker Nicil", id: "55-1234", phone: "(555) 555-1234", startDate: "12 July 2024", package: "Yearly", status: "Active" },
    { name: "Kicker Nicil", id: "55-1234", phone: "(555) 555-1234", startDate: "12 July 2024", package: "Monthly", status: "Hold" },
    { name: "Kicker Nicil", id: "55-1234", phone: "(555) 555-1234", startDate: "12 July 2024", package: "Monthly", status: "Action" },
    { name: "Kicker Nicil", id: "55-1234", phone: "(555) 555-1234", startDate: "12 July 2024", package: "Monthly", status: "Hold" },
    { name: "Kicker Nicil", id: "55-1234", phone: "(555) 555-1234", startDate: "12 July 2024", package: "Monthly", status: "Hold" },
    { name: "Kicker Nicil", id: "55-1234", phone: "(555) 555-1234", startDate: "12 July 2024", package: "Monthly", status: "Hold" },
  ]);

  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isAddBusinessModalOpen, setIsAddBusinessModalOpen] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState("Restaurant business"); // New state for selected business
  const [businessCategories, setBusinessCategories] = useState(["Restaurant", "Car business"]);
  const [dropdownCategories] = useState(["Restaurant Industry", "Car Industry", "Beverage Industry"]);
  const [newCategory, setNewCategory] = useState("");
  const [newUser, setNewUser] = useState({
    name: "",
    companyName: "",
    phone: "",
    package: "Monthly",
    email: "",
    logo: null,
  });
  const [errors, setErrors] = useState({});

  // Toggle modals
  const toggleAddUserModal = () => setIsAddUserModalOpen(!isAddUserModalOpen);
  const toggleAddBusinessModal = () => setIsAddBusinessModalOpen(!isAddBusinessModalOpen);

  // Close modals on Esc key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsAddUserModalOpen(false);
        setIsAddBusinessModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Validate form inputs for Add a User
  const validateForm = () => {
    const newErrors = {};
    if (!newUser.name.trim()) newErrors.name = "Customer name is required";
    if (!newUser.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!newUser.phone.trim()) newErrors.phone = "Phone number is required";
    if (!newUser.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(newUser.email)) newErrors.email = "Email is invalid";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle adding a new business category
  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setBusinessCategories([...businessCategories, newCategory]);
      setNewCategory("");
    } else {
      alert("Please enter a valid business category.");
    }
  };

  // Handle deleting a business category
  const handleDeleteCategory = (category) => {
    setBusinessCategories(businessCategories.filter((cat) => cat !== category));
  };

  // Handle adding a new user
  const handleAddUser = () => {
    if (validateForm()) {
      const user = {
        name: newUser.name,
        id: `55-${Math.floor(Math.random() * 10000)}`,
        phone: newUser.phone,
        startDate: new Date().toLocaleDateString("en-US", { day: "2-digit", month: "long", year: "numeric" }),
        package: newUser.package,
        status: "Active",
      };
      setUsers([...users, user]);
      setNewUser({ name: "", companyName: "", phone: "", package: "Monthly", email: "", logo: null });
      setErrors({});
      toggleAddUserModal();
    }
  };

  // Handle selecting a business category from the dropdown
  const handleSelectBusiness = (category) => {
    setSelectedBusiness(category);
  };

  return (
    <section className="relative">
      {/* Header Section */}
      <div className={`flex justify-between items-center mb-6 ${isAddUserModalOpen || isAddBusinessModalOpen ? "blur-sm" : ""}`}>
        <button
          onClick={toggleAddBusinessModal}
          className="btn bg-[#16141A] shadow-none border-none text-[#CBCCD2] rounded-md flex items-center"
        >
          Business <FaPlus />
        </button>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn bg-[#16141A] border-none shadow-none text-[#CBCCD2] rounded-md">
            {selectedBusiness} <FaAngleRight size={20} />
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-gray-900 text-[#CBCCD2] rounded-box z-1 w-48 border border-gray-700 p-2 shadow-sm">
            {dropdownCategories.map((category) => (
              <li
                key={category}
                className="hover:bg-gray-600"
                onClick={() => handleSelectBusiness(category)}
              >
                <a>{category}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Actions */}
      <div className={`flex justify-between mb-4 ${isAddUserModalOpen || isAddBusinessModalOpen ? "blur-sm" : ""}`}>
        <h2 className="text-lg font-semibold text-[#CBCCD2]">User management</h2>
        <div className="flex gap-5">
          <button
            onClick={toggleAddUserModal}
            className="btn bg-[#16141A] shadow-none border-none text-[#CBCCD2] flex items-center"
          >
            Add a user <FaPlus />
          </button>
          <label className="input bg-[#16141A] px-10 text-[#CBCCD2] shadow-none">
            <input type="search" className="grow" placeholder="Search by phone number or name" />
            <FaSearch className="text-[#CBCCD2]" />
          </label>
        </div>
      </div>

      <div className={`bg-[#16141A] text-[#CBCCD2] p-6 rounded-[15px] ${isAddUserModalOpen || isAddBusinessModalOpen ? "blur-sm" : ""}`}>
        {/* Table */}
        <div>
          <table className="table w-full text-[#CBCCD2]">
            <thead className="bg-[#1F1E3A] text-[#CBCCD2] rounded-t-xl">
              <tr className="text-base">
                <th>Subscriber Name</th>
                <th>Customer ID</th>
                <th>Cell number</th>
                <th>Starting Date</th>
                <th>Package</th>
                <th>Customer info</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-t border-gray-700">
                  <td>{user.name}</td>
                  <td>{user.id}</td>
                  <td>{user.phone}</td>
                  <td>{user.startDate}</td>
                  <td>{user.package}</td>
                  <td>
                    <button className="btn bg-[#27242D] border-none shadow-none text-[#CBCCD2]">
                      <LuSquareUserRound size={20} /> View
                    </button>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <select
                        className={`select w-[100px] bg-[#27242D] ${
                          user.status === "Active"
                            ? "border-[#267A39] text-[#CBCCD2] font-medium"
                            : user.status === "Hold"
                            ? "border-[#88611A] text-[#CBCCD2] font-medium"
                            : "border-[#193682] text-[#CBCCD2] font-medium"
                        }`}
                      >
                        <option className="text-[#CBCCD2]">Active</option>
                        <option className="text-[#CBCCD2]">Hold</option>
                        <option className="text-[#CBCCD2]">Action</option>
                      </select>
                      <button className="btn border border-[#193682] bg-transparent shadow-none text-red-600">
                        <FaTrashCan size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add a User Modal */}
      {isAddUserModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
          onClick={toggleAddUserModal}
        >
          <div
            className="bg-[#16141A] text-[#CBCCD2] p-6 rounded-lg w-[600px]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Add a User</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm">Customer name</label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="input w-full bg-[#27242D] text-white"
                  placeholder="Sumon Kumar"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm">Company name</label>
                <input
                  type="text"
                  value={newUser.companyName}
                  onChange={(e) => setNewUser({ ...newUser, companyName: e.target.value })}
                  className="input w-full bg-[#27242D] text-white"
                  placeholder="FFC Restaurant Itd."
                />
                {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
              </div>
              <div>
                <label className="block text-sm">Phone number</label>
                <input
                  type="text"
                  value={newUser.phone}
                  onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                  className="input w-full bg-[#27242D] text-white"
                  placeholder="3546-55341645"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm">Package</label>
                <select
                  value={newUser.package}
                  onChange={(e) => setNewUser({ ...newUser, package: e.target.value })}
                  className="select w-full bg-[#27242D] text-white"
                >
                  <option>Monthly</option>
                  <option>Half yearly</option>
                  <option>Yearly</option>
                </select>
              </div>
              <div>
                <label className="block text-sm">Email</label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="input w-full bg-[#27242D] text-white"
                  placeholder="Enter here"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm">Upload company logo</label>
                <input
                  type="file"
                  onChange={(e) => setNewUser({ ...newUser, logo: e.target.files[0] })}
                  className="file-input w-full bg-[#27242D] text-white"
                />
                {newUser.logo && (
                  <p className="text-sm mt-2">Uploaded: {newUser.logo.name}</p>
                )}
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button onClick={toggleAddUserModal} className="btn btn-ghost mr-2">
                Cancel
              </button>
              <button onClick={handleAddUser} className="btn bg-gradient-to-b from-[#881CA2] to-[#2B3069] border-none shadow-none text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add a Business Category Modal */}
      {isAddBusinessModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
          onClick={toggleAddBusinessModal}
        >
          <div
            className="bg-[#16141A] text-[#CBCCD2] p-6 rounded-lg w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Add a Business category</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Available industries</label>
                {businessCategories.map((category, index) => (
                  <div key={index} className="flex justify-between items-center bg-[#27242D] p-3 rounded mb-2">
                    <span>{category}</span>
                    <button
                      onClick={() => handleDeleteCategory(category)}
                      className="text-red-600"
                    >
                      <FaTrashCan size={16} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="input w-full bg-[#27242D] text-white placeholder-gray-500"
                  placeholder="Ex. Car business, drinks, beverage

"
                />
                <button
                  onClick={handleAddCategory}
                  className="btn bg-[#27242D] text-white px-4 py-2 rounded border-none shadow-none"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button onClick={toggleAddBusinessModal} className="btn bg-gradient-to-b from-[#881CA2] to-[#2B3069] border-none shadow-none text-white">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UserManagement;
