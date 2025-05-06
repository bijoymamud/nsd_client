import React from "react";
import { useForm } from "react-hook-form";
import { IoMdMail } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useOtpCreateMutation } from "../redux/features/baseApi/baseApi";

const ForgetPassword = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const [otpCreate, {isLoading}] = useOtpCreateMutation()

  const onSubmit = (data) => {
    console.log(data?.email);
    const email = data?.email
    localStorage.setItem("verified_email", email)

    try {

    const response = otpCreate({email:email}).unwrap();
      console.log("email-res",response)

      setTimeout(() => {
        navigate("/verification")
      }, 2000);
    } catch (error) {
      console.log("email verification error", error)
    }

  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-[#1B1424]">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center items-center px-3 md:p-10">
      <img src="https://i.ibb.co.com/3YMJWXhQ/Nexus-Vision-LOGO-Aadf-2-1.png" alt="" className="w-[230px] mb-5" />
        
        <form className="w-full max-w-xl px-3 py-10 space-y-6 mt-8 bg-[#191320] border border-[#291F30] md:p-14 rounded-[10px]" onSubmit={handleSubmit(onSubmit)} >
   
        <h1 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#CECBED]">
        Confirm Email        </h1>
          {/* Email Field */}
          <div>
            <label className="block text-base text-[#CECBED] mb-2">Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <IoMdMail className="text-[#CECBED] opacity-60" size={18} />
              </span>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 text-sm pl-10 bg-transparent text-[#CECBED] border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-[#F3F2F9] placeholder-gray-500"
                autoComplete="off"
              />
            </div>
          </div>

          {/* Register Button */}
         <div className="flex justify-center">
         <button 
          type="submit"
          className="text-center bg-gradient-to-t from-[#2B3069] to-[#881CA2] md:w-1/2 w-full font-medium p-3 rounded-md mt-3 text-[#CECBED]" 
          disabled={isLoading}
          >
            {isLoading ? (
                <span className="loading loading-bars loading-md text-[#824194]"></span>
              ) : (
                "Continue"
              )}
            
          </button>
         </div>
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

export default ForgetPassword;
