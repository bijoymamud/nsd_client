// src/components/ContactForm.jsx
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
  };

  return (
    <div className="pb-32 bg-[#17141D] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Contact Us
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Have a question? Reach out to us!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-400">First name</span>
              </label>
              <input
                type="text"
                placeholder="Enter here"
                className="input input-bordered w-full bg-[#17141D] border-[#E9F0F3] text-white "
                {...register("firstName", { required: "First name is required" })}
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            {/* Last Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-400">Last name</span>
              </label>
              <input
                type="text"
                placeholder="Enter here"
                className="input input-bordered w-full bg-[#17141D] border-[#E9F0F3] text-white  "
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-400">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter here"
                className="input input-bordered w-full bg-[#17141D] border-[#E9F0F3] text-white "
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Phone Number */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-400">Phone number</span>
              </label>
              <input
                type="tel"
                placeholder="Enter here"
                className="input input-bordered w-full bg-[#17141D] border-[#E9F0F3] text-white  "
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-400">Company name</span>
              </label>
              <input
                type="text"
                placeholder="Enter here"
                className="input input-bordered w-full bg-[#17141D] border-[#E9F0F3] text-white  "
                {...register("companyName", { required: "Company name is required" })}
              />
              {errors.companyName && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.companyName.message}
                </span>
              )}
            </div>

            {/* Company Location */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-400">Company location</span>
              </label>
              <input
                type="text"
                placeholder="Enter here"
                className="input input-bordered w-full bg-[#17141D] border-[#E9F0F3] text-white  "
                {...register("companyLocation", { required: "Company location is required" })}
              />
              {errors.companyLocation && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.companyLocation.message}
                </span>
              )}
            </div>
          </div>

          {/* How can we help you? */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-400">How can we help you?</span>
            </label>
            <textarea
              placeholder="Enter here"
            rows={5}          
              className="textarea textarea-bordered w-full bg-[#17141D] border-[#E9F0F3] text-white  "
              {...register("message", { required: "This field is required" })}
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn bg-gradient-to-r from-[#2C3069] to-[#BB12C0] py-2 px-20 rounded-[8px] shadow-none font-semibold text-white border-none "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;