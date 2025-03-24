// import React from "react";
// import { useForm } from "react-hook-form";

// import { Link } from "react-router-dom";

// const OTPVerification = () => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="flex min-h-screen justify-center items-center bg-[#1B1424]">
//       {/* Left Section - Form */}
//       <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center items-center p-6 md:p-10">
//       <img src="https://i.ibb.co.com/3YMJWXhQ/Nexus-Vision-LOGO-Aadf-2-1.png" alt="" className="w-[230px] mb-5" />
        
//         <form className="w-full max-w-xl space-y-6 mt-8 bg-[#191320] border border-[#291F30] p-14 rounded-[10px]" onSubmit={handleSubmit(onSubmit)} >
   
//         <h1 className="text-2xl md:text-3xl font-bold text-center text-[#CECBED]">
//         We have sent you an activation code.</h1>
//         <p className=" mb-10 text-white text-center font-thin">An email has been sent to you email address containing a 
//         code to reset your password.</p>
//           {/* Email Field */}
//           <div>
//             <label className="block text-sm text-[#CECBED] mb-2">Enter OTP</label>
          
//           </div>


//           {/* Register Button */}
//           <Link className="flex justify-center">
//             <button
//               type="submit"
//               className="text-center bg-gradient-to-t from-[#2B3069] w-1/2 to-[#881CA2] font-medium p-3 rounded-md mt-3 text-[#CECBED]">Continue            
//             </button>
//           </Link>
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

// export default OTPVerification;
import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const OTPVerification = () => {
  const { register, handleSubmit, setValue, getValues, watch } = useForm({
    defaultValues: {
      otp: Array(6).fill(""), // 6-digit OTP
    },
  });

  const otpLength = 4; // Number of OTP digits
  const inputRefs = useRef([]); // Refs for each input field

  // Watch the OTP values to combine them for submission
  const otpValues = watch("otp");

  // Handle form submission
  const onSubmit = (data) => {
    const otp = data.otp.join(""); // Combine OTP digits into a single string
    console.log("Submitted OTP:", otp);
  };

  // Handle input change for each digit
  const handleInputChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      // Only allow numbers (0-9) or empty string
      const newOtp = [...otpValues];
      newOtp[index] = value;
      setValue("otp", newOtp);

      // Move to the next input if a digit is entered
      if (value && index < otpLength - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle key down events (e.g., backspace)
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      // Move to the previous input on backspace if the current input is empty
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle paste event to fill OTP inputs
  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pastedData)) {
      // If the pasted data is a 6-digit number
      const newOtp = pastedData.split("").slice(0, otpLength);
      setValue("otp", newOtp);
      inputRefs.current[otpLength - 1].focus(); // Focus on the last input
    }
  };

  // Auto-focus the first input on component mount
  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  return (
    <div className="flex min-h-screen justify-center items-center bg-[#1B1424]">
      {/* Left Section - Form */}
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
            <label className="block text-center text-[#CECBED]  text-[18px] mb-8">
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
                  className="w-12 h-12 md:w-16 md:h-16 text-center  border-[#D9D9D9] text-xl md:text-2xl bg-transparent border  rounded-full text-[#CECBED] "
                  {...register(`otp.${index}`)}
                  value={otpValues[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>
            <p className="text-sm text-[#CECBED] text-center mt-5 font-medium">If you didn’t receive a code! <span className="font-medium hover:underline cursor-pointer">Resend</span></p>
          </div>

          {/* Continue Button */}
          <div className="flex justify-center w-full">
  <Link to="/reset_password" className="w-3/4">
    <button
      type="submit"
      className="w-full bg-gradient-to-t from-[#2B3069] to-[#881CA2] font-medium p-3 rounded-md mt-3 text-[#CECBED] text-center"
    >
      Continue
    </button>
  </Link>
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