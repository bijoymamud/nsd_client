import React from "react";
import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-[#1B1424]">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center items-center p-6 md:p-10">
      <img src="https://i.ibb.co.com/3YMJWXhQ/Nexus-Vision-LOGO-Aadf-2-1.png" alt="" className="w-[230px] mb-5" />
    
        <form className="w-full max-w-md space-y-6 mt-8" onSubmit={handleSubmit(onSubmit)}>
   

        
          {/* Password Field */}
          <div>
            <label className="block text-sm text-[#CECBED] mb-2">New Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="text-[#CECBED]" size={18} />
              </span>
              <input
                {...register("password")}
                type="password"
                placeholder="Type new password"
                className="w-full p-3 pl-10 text-[14px] bg-[#1B1424] text-[#CECBED] border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                autoComplete="off"
              />
            </div>
          </div>


          {/* confirm password field */}
          <div>
            <label className="block text-sm text-[#CECBED] mb-2">Confirm Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="text-[#CECBED]" size={18} />
              </span>
              <input
                {...register("password")}
                type="password"
                placeholder="Re-type password"
                className="w-full p-3 pl-10 text-[14px] bg-[#1B1424] text-[#CECBED] border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                autoComplete="off"
              />
            </div>
          </div>

       
       

          {/* Register Button */}
          <Link
          to="/success"
          className="flex justify-center">
            <button
              type="submit"
              className="text-center bg-gradient-to-t from-[#2B3069] w-1/2 to-[#881CA2] font-medium p-3 rounded-md mt-3 text-[#CECBED]"
            >
              Confirm
            </button>
          </Link>
        </form>

      </div>

      {/* Right Section - Illustration */}
      <div className="hidden md:flex w-1/2 flex-col justify-center items-center min-h-screen p-10 text-center bg-[#16101D]">
        <h2 className="text-lg md:text-xl font-semibold text-[#CECBED]  mb-10">
        Predicting Trends, Powering Decisions
        </h2>
    
        <img
          src="https://i.ibb.co/Fqz5kPhH/OBJECTS.png"
          alt="AI Bot Illustration"
          className="w-1/2 mb-6"
        />
        <p className="text-[#CECBED]"> Future-Proof Your Business with Smart Analytics</p>
      </div>
    </div>
  );
};

export default ResetPassword;
