import React from "react";
import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                <IoMdMail className="text-[#CECBED]" size={18} />
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
                <FaLock className="text-[#CECBED]" size={18} />
              </span>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full p-3 pl-10 text-[14px] bg-[#1B1424] text-[#CECBED] border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-purple-500 "
                autoComplete="off"
              />
            </div>
          </div>

          {/* Business Type Dropdown */}
          <div>
            <label className="block text-sm text-[#CECBED] mb-2">Select your business type</label>
            <select
              {...register("businessType")}
              className="w-full p-3 bg-transparent text-[#CECBED] border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
              defaultValue=""
            >
              <option value="" disabled className="bg-[#1B1424]">Select</option>
              <option value="small" className="bg-[#1B1424]">Small Business</option>
              <option value="medium" className="bg-[#1B1424]">Medium Business</option>
              <option value="large" className="bg-[#1B1424]">Large Business</option>
            </select>
          </div>

         

          {/* Register Button */}
          <Link 
          to="/"
          className="flex justify-center">
            <button
              type="submit"
              className="text-center bg-gradient-to-t from-[#2B3069] w-1/2 to-[#881CA2] font-medium p-3 rounded-md mt-3 text-[#CECBED]"
            >
              Register
            </button>
          </Link>
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

      {/* Right Section - Illustration */}
      <div className="hidden md:flex w-1/2 flex-col justify-center items-center min-h-screen p-10 text-center bg-[#16101D]">
        <h2 className="text-lg md:text-xl font-semibold text-white  mb-10">
        Predicting Trends, Powering Decisions
        </h2>
    
        <img
          src="https://i.ibb.co/Fqz5kPhH/OBJECTS.png"
          alt="AI Bot Illustration"
          className="w-1/2 mb-6"
        />
        <p className="text-white"> Future-Proof Your Business with Smart Analytics</p>
      </div>
    </div>
  );
};

export default Register;
