import React from "react";
import { useForm } from "react-hook-form";

const CompanyProfile = () => {
  // Initialize React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add your form submission logic here (e.g., API call)
  };

  // Handle "Locate Me" button click (placeholder for geolocation)
  const handleLocateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          // You can set the GPS coordinates in the form if needed
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="p-6 bg-[#1D1B22] text-white">
      <h1 className="text-2xl text-center pb-10 font-semibold mb-6">Company Profile</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Company name</label>
            <input
              type="text"
              {...register("companyName", { required: "Company name is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Type here"
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Name of the owner/admin</label>
            <input
              type="text"
              {...register("ownerName", { required: "Owner name is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Type here"
            />
            {errors.ownerName && (
              <p className="text-red-500 text-sm mt-1">{errors.ownerName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Number of Staff</label>
            <input
              type="number"
              {...register("numberOfStaff", { required: "Number of staff is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Type here"
            />
            {errors.numberOfStaff && (
              <p className="text-red-500 text-sm mt-1">{errors.numberOfStaff.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Number of Experts</label>
            <input
              type="number"
              {...register("numberOfExperts", { required: "Number of experts is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Type here"
            />
            {errors.numberOfExperts && (
              <p className="text-red-500 text-sm mt-1">{errors.numberOfExperts.message}</p>
            )}
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Signature product</label>
            <input
              type="text"
              {...register("signatureProduct", { required: "Signature product is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Type here"
            />
            {errors.signatureProduct && (
              <p className="text-red-500 text-sm mt-1">{errors.signatureProduct.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Size of your company (area)</label>
            <input
              type="text"
              {...register("companySize", { required: "Company size is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Type here"
            />
            {errors.companySize && (
              <p className="text-red-500 text-sm mt-1">{errors.companySize.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Capacity</label>
            <input
              type="text"
              {...register("capacity", { required: "Capacity is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Type here"
            />
            {errors.capacity && (
              <p className="text-red-500 text-sm mt-1">{errors.capacity.message}</p>
            )}
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-1"></div> {/* Empty column for spacing */}
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Opening time</label>
            <input
              type="time"
              {...register("openingTime", { required: "Opening time is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Enter here"
            />
            {errors.openingTime && (
              <p className="text-red-500 text-sm mt-1">{errors.openingTime.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Closing time</label>
            <input
              type="time"
              {...register("closingTime", { required: "Closing time is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Enter here"
            />
            {errors.closingTime && (
              <p className="text-red-500 text-sm mt-1">{errors.closingTime.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Approximate annual income (min)</label>
            <input
              type="number"
              {...register("minAnnualIncome", { required: "Minimum annual income is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Type here"
            />
            {errors.minAnnualIncome && (
              <p className="text-red-500 text-sm mt-1">{errors.minAnnualIncome.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Approximate annual income (max)</label>
            <input
              type="number"
              {...register("maxAnnualIncome", { required: "Maximum annual income is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Type here"
            />
            {errors.maxAnnualIncome && (
              <p className="text-red-500 text-sm mt-1">{errors.maxAnnualIncome.message}</p>
            )}
          </div>
        </div>

        {/* Fourth Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Average monthly revenue</label>
            <input
              type="number"
              {...register("monthlyRevenue", { required: "Monthly revenue is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Type here"
            />
            {errors.monthlyRevenue && (
              <p className="text-red-500 text-sm mt-1">{errors.monthlyRevenue.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Ownership type</label>
            <input
              type="text"
              {...register("ownershipType", { required: "Ownership type is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Type here"
            />
            {errors.ownershipType && (
              <p className="text-red-500 text-sm mt-1">{errors.ownershipType.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Total investment cost</label>
            <input
              type="number"
              {...register("investmentCost", { required: "Investment cost is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Type here"
            />
            {errors.investmentCost && (
              <p className="text-red-500 text-sm mt-1">{errors.investmentCost.message}</p>
            )}
          </div>

          <div className="flex items-end gap-2">
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-1">GPS Coordinates</label>
              <input
                type="text"
                {...register("gpsCoordinates", { required: "GPS coordinates are required" })}
                className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
                placeholder="0.00:0.00:0.00"
              />
              {errors.gpsCoordinates && (
                <p className="text-red-500 text-sm mt-1">{errors.gpsCoordinates.message}</p>
              )}
            </div>
            <button
              type="button"
              onClick={handleLocateMe}
              className="bg-[#4B0565] text-white px-4 py-3 rounded-lg hover:bg-[#7f19a1] transition-colors"
            >
              LOCATE ME
            </button>
          </div>
        </div>

        {/* Fifth Row (Social Media Links) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Facebook</label>
            <input
              type="url"
              {...register("facebook", { required: "Facebook link is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Link"
            />
            {errors.facebook && (
              <p className="text-red-500 text-sm mt-1">{errors.facebook.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Instagram</label>
            <input
              type="url"
              {...register("instagram", { required: "Instagram link is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Link"
            />
            {errors.instagram && (
              <p className="text-red-500 text-sm mt-1">{errors.instagram.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Twitter</label>
            <input
              type="url"
              {...register("twitter", { required: "Twitter link is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Link"
            />
            {errors.twitter && (
              <p className="text-red-500 text-sm mt-1">{errors.twitter.message}</p>
            )}
          </div>
        </div>

        {/* Sixth Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Others</label>
            <input
              type="url"
              {...register("othersLink")}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Link"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Website</label>
            <input
              type="url"
              {...register("website", { required: "Website link is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Link"
            />
            {errors.website && (
              <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Contact number</label>
            <input
              type="tel"
              {...register("contactNumber", { required: "Contact number is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Link"
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>
            )}
          </div>
        </div>

        {/* Seventh Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email address</label>
            <input
              type="email"
              {...register("email", { required: "Email address is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Type here"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Name using online ordering platform</label>
            <input
              type="text"
              {...register("onlinePlatform", { required: "Online platform name is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="example: Zomato, Swiggy"
            />
            {errors.onlinePlatform && (
              <p className="text-red-500 text-sm mt-1">{errors.onlinePlatform.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Describe target audience</label>
            <input
              type="text"
              {...register("targetAudience", { required: "Target audience description is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="age, profession, etc."
            />
            {errors.targetAudience && (
              <p className="text-red-500 text-sm mt-1">{errors.targetAudience.message}</p>
            )}
          </div>
        </div>

        {/* Eighth Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Year Established</label>
            <input
              type="text"
              {...register("yearEstablished", { required: "Year established is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="dd/mm/yyyy"
            />
            {errors.yearEstablished && (
              <p className="text-red-500 text-sm mt-1">{errors.yearEstablished.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Booking policy (if available)</label>
            <input
              type="text"
              {...register("bookingPolicy")}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Type here"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Specialty</label>
            <input
              type="text"
              {...register("specialty", { required: "Specialty is required" })}
              className="w-full p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
              placeholder="Type here"
            />
            {errors.specialty && (
              <p className="text-red-500 text-sm mt-1">{errors.specialty.message}</p>
            )}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center ">
          <button
            type="submit"
            className="bg-[#4B0565] text-[#E2E0F5] px-32 py-3 rounded-lg hover:bg-[#7f19a1] transition-colors "
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyProfile;