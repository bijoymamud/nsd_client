import { useState } from "react";
import { GoCheck } from "react-icons/go";

const Packages = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
<section className="bg-[#17141D]">
<div className="min-h-screen flex items-center justify-center p-4">
      <div className="container md:p-10 py-10 md:py-20 w-full ">
        <h2 className="text-3xl text-white  font-semibold text-center mb-8">Packages</h2>


        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-20">
          {/* Free User */}
          <div className="bg-[#251729]  py-10">
            <div className="overflow-hidden relative">
            <div className="py-3 px-6 relative w-2/3 rounded-r-lg bg-[url('https://i.ibb.co.com/CpJGyt91/Vector-64.png')] bg-cover bg-center">
  <h3 className="text-white font-medium">Free User</h3>
</div>


              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-white ">3</span>
                    <span className="text-sm text-gray-200  ml-2 mb-1">Query/Day</span>
                  </div>
                  <p className="text-gray-200  text-sm mt-1">Measurable results</p>
                </div>

                <button className="w-full bg-[#6B2C7A]  text-white  py-2 rounded-md mb-4">
                  Select
                </button>

                <p className="text-gray-200  text-xs mb-6">Contact us for more details</p>

                <div className="mb-4">
                <div className="flex items-center mb-2">
                    <span className="text-white  font-medium">Features</span>
                    <div className="ml-2 w-5 h-5 rounded-full bg-[#2A2748] text-[#D0CDEF] flex items-center justify-center">
                      <span className="text-[#D0CDEF] font-semibold text-base">
                        <GoCheck />
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-200 ">
                    <li>Includes general source databases</li>
                    <li>Limited free queries per full day</li>
                    <li>No access to specific company or private databases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Paid User */}
          <div className="bg-[#251729] py-10">
            <div className="overflow-hidden relative">
            <div className="py-3 px-6 relative w-2/3 rounded-r-lg bg-[url('https://i.ibb.co.com/CpJGyt91/Vector-64.png')] bg-cover bg-center">
  <h3 className="text-white font-medium">Paid User</h3>
</div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-2xl font-bold text-white">No limit,</span>
                    <span className="text-sm   ml-2 mb-1 text-gray-200">Query/Day</span>
                  </div>
                  <p className="text-gray-200 text-sm mt-1">Measurable results</p>
                </div>

                <button className="w-full bg-[#6B2C7A]  text-white  py-2 rounded-md mb-4">
                  Select
                </button>

                <p className="text-gray-200  text-xs mb-6">Contact us for more details</p>

                <div className="mb-4">
                <div className="flex items-center mb-2">
                    <span className="text-white  font-medium">Features</span>
                    <div className="ml-2 w-5 h-5 rounded-full bg-[#2A2748] text-[#D0CDEF] flex items-center justify-center">
                      <span className="text-[#D0CDEF] font-semibold text-base">
                        <GoCheck />
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-200 ">
                    <li>Full access to general source databases</li>
                    <li>Unlimited queries per full day</li>
                    <li>Potential limitations on account sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Users */}
          <div className="bg-[#251729] py-10">
            <div className="overflow-hidden relative">
            <div className="py-3 px-6 relative w-2/3 rounded-r-lg bg-[url('https://i.ibb.co.com/CpJGyt91/Vector-64.png')] bg-cover bg-center">
  <h3 className="text-white font-medium">Enterprise User</h3>
</div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-2xl font-bold text-white ">No limit,</span>
                    <span className="text-sm text-gray-200  ml-2 mb-1">Query/Day</span>
                  </div>
                  <p className="text-gray-200  text-sm mt-1">Measurable results</p>
                </div>

                <button className="w-full bg-[#6B2C7A] text-white  py-2 rounded-md mb-4">
                  Select
                </button>

                <p className="text-gray-200  text-xs mb-6">Contact us for more details</p>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-white  font-medium">Features</span>
                    <div className="ml-2 w-5 h-5 rounded-full bg-[#2A2748] text-[#D0CDEF] flex items-center justify-center">
                      <span className="text-[#D0CDEF] font-semibold text-base">
                        <GoCheck />
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-200 ">
                    <li>Includes general source databases</li>
                    <li>Unlimited queries per full day</li>
                    <li>Company-specific Personal Database</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
  );
};

export default Packages;