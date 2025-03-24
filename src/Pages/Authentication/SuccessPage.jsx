import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1B1424]">
      {/* Left Section - Success Message */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-10 text-center">
        {/* Logo */}
        <img 
          src="https://i.ibb.co.com/3YMJWXhQ/Nexus-Vision-LOGO-Aadf-2-1.png" 
          alt="Nexus Vision Logo" 
          className="w-[230px] mb-6"
        />

        {/* Success Message Container */}
        <div className="bg-[#191320] border border-[#291F30] p-8 rounded-lg shadow-lg flex flex-col items-center w-full max-w-md py-20">
          {/* Success Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#831D9F] mb-4">
            <IoMdCheckmark className="text-white text-5xl" />
          </div>

          {/* Success Message */}
          <p className="text-[#BDC5DB] text-lg font-medium mb-4">
            Password changed successfully
          </p>

          {/* Continue Button */}
          <Link to="/login" className="w-full mt-10">
            <button
              type="button"
              className="w-full bg-gradient-to-t from-[#2B3069] to-[#881CA2] text-[#CECBED] font-medium p-3 rounded-md text-lg"
            >
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="hidden md:flex w-1/2 flex-col items-center justify-center min-h-screen p-10 bg-[#16101D] text-center">
        <h2 className="text-xl font-semibold text-[#CECBED] mb-6">
          Predicting Trends, Powering Decisions
        </h2>
        
        <img
          src="https://i.ibb.co/Fqz5kPhH/OBJECTS.png"
          alt="AI Bot Illustration"
          className="w-1/2 mb-4"
        />

        <p className="text-[#CECBED] text-lg">
          Future-Proof Your Business with Smart Analytics
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
