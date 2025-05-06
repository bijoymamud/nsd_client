import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useUserLoinMutation } from "../redux/features/baseApi/baseApi";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const [userLoin, {isLoading}] = useUserLoinMutation()

  const onSubmit = async(loginData) => {
    console.log(loginData);

    try {
      const response = await userLoin(loginData).unwrap();
      console.log("login-response", response);
      toast.success("Login Successful");

      setTimeout( ()=>{
        navigate("/");  
      }, 3000)

    } catch (error) {
      console.log('Error:', error);
      toast.error(error?.data?.non_field_errors?.[0] || 'An error occurred during registration');
    }

  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-[#1B1424]">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center items-center p-6 md:p-10">
      <img src="https://i.ibb.co.com/3YMJWXhQ/Nexus-Vision-LOGO-Aadf-2-1.png" alt="" className="w-[230px] mb-5" />
        <h1 className="text-2xl md:text-3xl font-bold mt-6 text-[#CECBED]">
          Welcome To Nexus Vision
        </h1>
        <form className="w-full max-w-md space-y-6 mt-8" onSubmit={handleSubmit(onSubmit)}>
   

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
  <div className="flex items-center justify-end">
  <Link 
  to="/email_verification"
  className="text-[#CECBED] text-sm hover:underline">Forget Password?</Link>
  </div>

       

          {/* Register Button */}
          <div 
          
          className="flex justify-center">
            <button
              type="submit"
              className="text-center bg-gradient-to-t from-[#2B3069] w-1/2 to-[#881CA2] font-medium p-3 rounded-md mt-3 text-[#CECBED]"
            >
              Login
            </button>
          </div>
        </form>

           {/* Login Redirect */}
           <div className="text-sm text-[#CECBED] flex items-center justify-center mt-5">
          Don’t have account?{" "}
            <Link 
              to="/registration"
              className="text-[#CECBED] cursor-pointer hover:underline ml-2 font-semibold"
            >
              Sign Up
            </Link>
          </div>
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


      {/* //for toast */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
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

export default Login;
