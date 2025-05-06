// import React from "react";
// import { useForm } from "react-hook-form";
// import { FaLock } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useResetPassMutation } from "../redux/features/baseApi/baseApi";

// const ResetPassword = () => {
//   const { register, handleSubmit } = useForm();
//   const navigate = useNavigate()
//   const [resetPass] = useResetPassMutation()

//   const onSubmit = (data) => {
//     console.log(data);

//   try {

//     const otp = localStorage.getItem("otp");
//     const email = localStorage.getItem("verified_email");
      
//     const payload = {
//         password: data.password,
//         otp,
//         email
//       };

//       const response = resetPass(payload).unwrap()
//       console.log(response);

//       setTimeout(()=>{
//       navigate("/success")
//       },[2000])
      
//     } catch (error) {
//       console.log("error resetting pass", error)
//     }
//   };

//   return (
//     <div className="flex min-h-screen justify-center items-center bg-[#1B1424]">
//       {/* Left Section - Form */}
//       <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center items-center p-6 md:p-10">
//       <img src="https://i.ibb.co.com/3YMJWXhQ/Nexus-Vision-LOGO-Aadf-2-1.png" alt="" className="w-[230px] mb-5" />
    
//         <form className="w-full max-w-md space-y-6 mt-8" onSubmit={handleSubmit(onSubmit)}>
   

        
//           {/* Password Field */}
//           <div>
//             <label className="block text-sm text-[#CECBED] mb-2">New Password</label>
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                 <FaLock className="text-[#CECBED]" size={18} />
//               </span>
//               <input
//                 {...register("password")}
//                 type="password"
//                 placeholder="Type new password"
//                 className="w-full p-3 pl-10 text-[14px] bg-[#1B1424] text-[#CECBED] border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
//                 autoComplete="off"
//               />
//             </div>
//           </div>


//           {/* confirm password field */}
//           <div>
//             <label className="block text-sm text-[#CECBED] mb-2">Confirm Password</label>
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                 <FaLock className="text-[#CECBED]" size={18} />
//               </span>
//               <input
//                 {...register("password")}
//                 type="password"
//                 placeholder="Re-type password"
//                 className="w-full p-3 pl-10 text-[14px] bg-[#1B1424] text-[#CECBED] border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
//                 autoComplete="off"
//               />
//             </div>
//           </div>

       
       

//           {/* Register Button */}
//           <div
         
//           className="flex justify-center">
//             <button
//               type="submit"
//               className="text-center bg-gradient-to-t from-[#2B3069] w-1/2 to-[#881CA2] font-medium p-3 rounded-md mt-3 text-[#CECBED]"
//             >
//               Confirm
//             </button>
//           </div>
//         </form>

//       </div>

//       {/* Right Section - Illustration */}
//       <div className="hidden md:flex w-1/2 flex-col justify-center items-center min-h-screen p-10 text-center bg-[#16101D]">
//         <h2 className="text-lg md:text-xl font-semibold text-[#CECBED]  mb-10">
//         Predicting Trends, Powering Decisions
//         </h2>
    
//         <img
//           src="https://i.ibb.co/Fqz5kPhH/OBJECTS.png"
//           alt="AI Bot Illustration"
//           className="w-1/2 mb-6"
//         />
//         <p className="text-[#CECBED]"> Future-Proof Your Business with Smart Analytics</p>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useResetPassMutation } from "../redux/features/baseApi/baseApi";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [resetPass] = useResetPassMutation();

  const password = watch("password"); // Watch the password field for real-time comparison

  const onSubmit = async (data) => {
    console.log(data)
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      const otp = localStorage.getItem("otp");
      const email = localStorage.getItem("verified_email");

      const payload = {
        new_password: data.password,
        otp,
        email,
      };

      const response = await resetPass(payload).unwrap();
      console.log("Reset Password Response:", response);
      toast.success("Password reset successful");

      setTimeout(() => {
        navigate("/success");
      }, 2000);
    } catch (error) {
      console.log("Error resetting password:", error);
      toast.error(error?.data?.message || "An error occurred while resetting the password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-[#1B1424]">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center items-center p-6 md:p-10">
        <img
          src="https://i.ibb.co.com/3YMJWXhQ/Nexus-Vision-LOGO-Aadf-2-1.png"
          alt=""
          className="w-[230px] mb-5"
        />
        <form className="w-full max-w-md space-y-6 mt-8" onSubmit={handleSubmit(onSubmit)}>
          {/* Password Field */}
          <div>
            <label className="block text-sm text-[#CECBED] mb-2">New Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="text-[#CECBED]" size={18} />
              </span>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                placeholder="Type new password"
                className="w-full p-3 pl-10 text-[14px] bg-[#1B1424] text-[#CECBED] border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                autoComplete="off"
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm text-[#CECBED] mb-2">Confirm Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="text-[#CECBED]" size={18} />
              </span>
              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) => value === password || "Passwords do not match",
                })}
                type="password"
                placeholder="Re-type password"
                className="w-full p-3 pl-10 text-[14px] bg-[#1B1424] text-[#CECBED] border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                autoComplete="off"
              />
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          {/* Confirm Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-center bg-gradient-to-t from-[#2B3069] w-1/2 to-[#881CA2] font-medium p-3 rounded-md mt-3 text-[#CECBED] flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading loading-bars loading-xl"></span>
              ) : (
                "Confirm"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Right Section - Illustration */}
      <div className="hidden md:flex w-1/2 flex-col justify-center items-center min-h-screen p-10 text-center bg-[#16101D]">
        <h2 className="text-lg md:text-xl font-semibold text-[#CECBED] mb-10">
          Predicting Trends, Powering Decisions
        </h2>
        <img
          src="https://i.ibb.co/Fqz5kPhH/OBJECTS.png"
          alt="AI Bot Illustration"
          className="w-1/2 mb-6"
        />
        <p className="text-[#CECBED]">Future-Proof Your Business with Smart Analytics</p>
      </div>

      {/* Toast Container */}
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

export default ResetPassword;