
// import React, { useRef, useEffect } from "react";

// import { useForm } from "react-hook-form";
// import { useOtpVerificationMutation, useResendPassMutation } from "../redux/features/baseApi/baseApi";
// import { useNavigate } from "react-router-dom";

// const OTPVerification = () => {
//   const { register, handleSubmit, setValue, watch } = useForm({
//     defaultValues: {
//       otp: Array(6).fill(""),
//     },
//   });
//   const navigate = useNavigate();
//   const [otpVerification, { isLoading: isOtpLoading }] = useOtpVerificationMutation();
//   const [resendPass, { isLoading: isResendLoading }] = useResendPassMutation();

//   const otpLength = 6;
//   const inputRefs = useRef([]);

//   const otpValues = watch("otp");

//   // Handle form submission
//   const onSubmit = async (data) => {
//     const otp = data.otp.join("");
//     console.log("Submitted OTP:", otp);

//     localStorage.setItem("otp", otp);
//     const email = localStorage.getItem("verified_email");

//     try {
//       const response = await otpVerification({ email, otp }).unwrap();
//       console.log('OTP Verification Response:', response);
//       console.log("OTP verified successfully");

//       setTimeout(() => {
//         navigate("/reset_password");
//       }, 2000);
//     } catch (error) {
//       console.log("OTP verification error:", error);
//       console.log(error?.data?.message || "Invalid OTP. Please try again.");
//     }
//   };

//   // Handle resend OTP
//   const handleResend = async () => {
//     const email = localStorage.getItem("verified_email") || "aininjaibrahim@gmail.com";
//     try {
//       const response = await resendPass({ email }).unwrap();
//       console.log('Resend OTP Response:', response);
//       console.log("OTP resent successfully");
//     } catch (error) {
//       console.log("Resend OTP error:", error);
//       console.log(error?.data?.message || "Failed to resend OTP. Please try again.");
//     }
//   };

//   const handleInputChange = (index, value) => {
//     if (/^[0-9]?$/.test(value)) {
//       const newOtp = [...otpValues];
//       newOtp[index] = value;
//       setValue("otp", newOtp);

//       if (value && index < otpLength - 1) {
//         inputRefs.current[index + 1].focus();
//       }
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otpValues[index] && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   // Handle paste event to fill OTP inputs
//   const handlePaste = (e) => {
//     const pastedData = e.clipboardData.getData("text").trim();
//     if (/^\d{6}$/.test(pastedData)) {
//       const newOtp = pastedData.split("").slice(0, otpLength);
//       setValue("otp", newOtp);
//       inputRefs.current[otpLength - 1].focus();
//     }
//   };

//   useEffect(() => {
//     inputRefs.current[0].focus();
//   }, []);

//   return (
//     <div className="flex min-h-screen justify-center items-center bg-[#1B1424]">
//       <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center items-center p-6 md:p-10">
//         <img
//           src="https://i.ibb.co/3YMJWXhQ/Nexus-Vision-LOGO-Aadf-2-1.png"
//           alt="Nexus Vision Logo"
//           className="w-[230px] mb-5"
//         />

//         <form
//           className="w-full max-w-xl space-y-6 mt-8 bg-[#191320] border border-[#291F30] p-14 rounded-[10px]"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <h1 className="text-2xl md:text-3xl font-bold text-center text-[#CECBED]">
//             We have sent you an activation code.
//           </h1>
//           <p className="mb-10 text-white text-center font-thin">
//             An email has been sent to your email address containing a code to
//             reset your password.
//           </p>

//           {/* OTP Input Fields */}
//           <div>
//             <label className="block text-center text-[#CECBED] text-[18px] mb-8">
//               Enter verification code
//             </label>
//             <div
//               className="flex justify-center space-x-2 md:space-x-4"
//               onPaste={handlePaste}
//             >
//               {Array.from({ length: otpLength }).map((_, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   maxLength="1"
//                   className="w-12 h-12 md:w-16 md:h-16 text-center border-[#D9D9D9] text-xl md:text-2xl bg-transparent border rounded-full text-[#CECBED]"
//                   {...register(`otp.${index}`)}
//                   value={otpValues[index]}
//                   onChange={(e) => handleInputChange(index, e.target.value)}
//                   onKeyDown={(e) => handleKeyDown(index, e)}
//                   ref={(el) => (inputRefs.current[index] = el)}
//                 />
//               ))}
//             </div>
//             <p className="text-sm text-[#CECBED] text-center mt-5 font-medium">
//               If you didn’t receive a code!{' '}
//               <span
//                 onClick={handleResend}
//                 className={`font-medium hover:underline cursor-pointer ${isResendLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
//               >
//                 {isResendLoading ? 'Resending...' : 'Resend'}
//               </span>
//             </p>
//           </div>

//           {/* Continue Button */}
//           <div className="flex justify-center w-full">
//             <div className="w-3/4">
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-t from-[#2B3069] to-[#881CA2] font-medium p-3 rounded-md mt-3 text-[#CECBED] text-center flex items-center justify-center"
//                 disabled={isOtpLoading}
//               >
//                 {isOtpLoading ? (
//                   <span className="loading loading-bars loading-xl"></span>
//                 ) : (
//                   'Continue'
//                 )}
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>

//       {/* Right Section - Illustration */}
//       <div className="hidden md:flex w-1/2 flex-col justify-center items-center min-h-screen p-10 text-center bg-[#16101D]">
//         <h2 className="text-lg md:text-xl font-semibold text-[#CECBED] mb-10">
//           Predicting Trends, Powering Decisions
//         </h2>
//         <img
//           src="https://i.ibb.co/Fqz5kPhH/OBJECTS.png"
//           alt="AI Bot Illustration"
//           className="w-1/2 mb-6"
//         />
//         <p className="text-[#CECBED]">
//           Future-Proof Your Business with Smart Analytics
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OTPVerification;



import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useOtpVerificationMutation, useResendPassMutation } from "../redux/features/baseApi/baseApi";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      otp: Array(6).fill(""),
    },
  });
  const navigate = useNavigate();
  const [otpVerification, { isLoading: isOtpLoading }] = useOtpVerificationMutation();
  const [resendPass, { isLoading: isResendLoading }] = useResendPassMutation();

  const otpLength = 6;
  const inputRefs = useRef([]);

  const otpValues = watch("otp");

  // Handle form submission
  const onSubmit = async (data) => {
    const otp = data.otp.join("");
    console.log("Submitted OTP:", otp);

    localStorage.setItem("otp", otp);
    const email = localStorage.getItem("verified_email");

    try {
      const response = await otpVerification({ email, otp }).unwrap();
      console.log('OTP Verification Response:', response);
      console.log("OTP verified successfully");

      setTimeout(() => {
        navigate("/reset_password");
      }, 2000);
    } catch (error) {
      console.log("OTP verification error:", error);
      console.log(error?.data?.message || "Invalid OTP. Please try again.");
    }
  };

  // Handle resend OTP
  const handleResend = async () => {
    const email = localStorage.getItem("verified_email") || "aininjaibrahim@gmail.com";
    try {
      const response = await resendPass({ email }).unwrap();
      console.log('Resend OTP Response:', response);
      console.log("OTP resent successfully");
    } catch (error) {
      console.log("Resend OTP error:", error);
      console.log(error?.data?.message || "Failed to resend OTP. Please try again.");
    }
  };

  const handleInputChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otpValues];
      newOtp[index] = value;
      setValue("otp", newOtp);

      if (value && index < otpLength - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle paste event to fill OTP inputs
  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("").slice(0, otpLength);
      setValue("otp", newOtp);
      inputRefs.current[otpLength - 1].focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  return (
    <div className="flex min-h-screen justify-center items-center bg-[#1B1424]">
      <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center items-center p-6 md:p-10">
        <img
          src="https://i.ibb.co/3YMJWXhQ/Nexus-Vision-LOGO-Aadf-2-1.png"
          alt="Nexus Vision Logo"
          className="w-[230px] mb-5"
        />

        <form
          className="w-full max-w-xl space-y-6 mt-8 bg-[#191320] border border-[#291F30] p-14 rounded-[10px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-center text-[#CECBED]">
            We have sent you an activation code.
          </h1>
          <p className="mb-10 text-white text-center font-thin">
            An email has been sent to your email address containing a code to
            reset your password.
          </p>

          {/* OTP Input Fields */}
          <div>
            <label className="block text-center text-[#CECBED] text-[18px] mb-8">
              Enter verification code
            </label>
            <div
              className="flex justify-center space-x-2 md:space-x-4"
              onPaste={handlePaste}
            >
              {Array.from({ length: otpLength }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 md:w-16 md:h-16 text-center border-[#D9D9D9] text-xl md:text-2xl bg-transparent border rounded-full text-[#CECBED]"
                  {...register(`otp.${index}`)}
                  value={otpValues[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>
            <p className="text-sm text-[#CECBED] text-center mt-5 font-medium">
              If you didn’t receive a code!{' '}
              <span
                onClick={handleResend}
                className={`font-medium hover:underline cursor-pointer ${isResendLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isResendLoading ? 'Resending...' : 'Resend'}
              </span>
            </p>
          </div>

          {/* Continue Button */}
          <div className="flex justify-center w-full">
            <div className="w-3/4">
              <button
                type="submit"
                className="w-full bg-gradient-to-t from-[#2B3069] to-[#881CA2] font-medium p-3 rounded-md mt-3 text-[#CECBED] text-center flex items-center justify-center"
                disabled={isOtpLoading || isResendLoading}
              >
                {isOtpLoading ? (
                  <span className="loading loading-bars loading-xl"></span>
                ) : (
                  'Continue'
                )}
              </button>
            </div>
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
        <p className="text-[#CECBED]">
          Future-Proof Your Business with Smart Analytics
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;