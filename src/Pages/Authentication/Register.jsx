import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../redux/features/baseApi/baseApi";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const [createUser] = useCreateUserMutation();

  const onSubmit = async (userData) => {
    // console.log(userData);

    // const payload = {
    //   userData: userData,
    //   role: "user"
    // };

    try {
      const response = await createUser(userData).unwrap();
      // console.log('API Response:', response);
      toast.success('Registration successful!');
      
      setTimeout( ()=>{
        navigate("/login");  
      }, 2000)
      
    } catch (error) {
      // console.log('Error:', error);
      toast.error(error?.data?.email?.[0] || 'An error occurred during registration');
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-[#1B1424]">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center items-center p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold mt-6 text-white">
          Welcome To Nexus Vision
        </h1>
        <form className="w-full max-w-md space-y-6 mt-8" onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div>
            <label className="block text-sm text-[#CECBED] mb-2">Name</label>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter here"
              className="w-full p-3 bg-transparent text-[#CECBED] border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
              autoComplete="off"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm text-[#CECBED] mb-2">Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <IoMdMail className="text-[#CECBED] opacity-60" size={18} />
              </span>
              <input
                {...register("email")}
                type="email"
                placeholder="user@mail.com"
                className="w-full p-3 pl-10 bg-transparent text-[#CECBED] border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                autoComplete="off"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm text-[#CECBED] mb-2">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="text-[#CECBED] opacity-60" size={18} />
              </span>
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 pl-10 pr-10 text-[14px] bg-[#1B1424] text-[#CECBED] border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-[#CECBED] opacity-60" size={18} />
                ) : (
                  <FaEye className="text-[#CECBED] opacity-60" size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Business Type Dropdown */}
          <div>
            <label className="block text-sm text-[#CECBED] mb-2">Select your business type</label>
            <select
              {...register("bussiness_type")}
              className="w-full p-3 bg-transparent text-[#CECBED] border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-purple-500 appearance-none text-sm"
              defaultValue=""
            >
              <option value="" disabled className="bg-[#1B1424] text-sm">Select</option>
              <option value="Restaurant" className="bg-[#1B1424] text-sm">Restaurant</option>
              <option value="Bravarage" className="bg-[#1B1424] text-sm">Bravarage</option>
              <option value="Large Business" className="bg-[#1B1424] text-sm">Large Business</option>
            </select>
          </div>

          {/* Register Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="text-center bg-gradient-to-t from-[#2B3069] w-1/2 to-[#881CA2] font-medium p-3 rounded-md mt-3 text-[#CECBED]"
            >
              Register
            </button>
          </div>
        </form>

        {/* Login Redirect */}
        <div className="text-sm text-[#CECBED] flex items-center justify-center mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#CECBED] cursor-pointer hover:underline ml-2 font-semibold"
          >
            Login
          </Link>
        </div>
      </div>

      
      <div className="hidden md:flex w-1/2 flex-col justify-center items-center min-h-screen p-10 text-center bg-[#16101D]">
        <h2 className="text-lg md:text-xl font-semibold text-white mb-10">
          Predicting Trends, Powering Decisions
        </h2>
        <img
          src="https://i.ibb.co/Fqz5kPhH/OBJECTS.png"
          alt="AI Bot Illustration"
          className="w-1/2 mb-6"
        />
        <p className="text-white">Future-Proof Your Business with Smart Analytics</p>
      </div>

   
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 9999 }}
      />
    </div>
  );
};

export default Register;