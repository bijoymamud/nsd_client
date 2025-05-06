
import React from 'react';
import bannerMotion from "../../assets/bannerMotion.json"
import Lottie from 'lottie-react';

const Banner = () => {


  return (
    <section className="bg-[#17141D] min-h-[85vh] flex flex-col justify-center items-center px-4">
      <div className="container mx-auto text-white py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 ">Embrace the Future Today</h1>
            <p className="text-lg md:text-xl mb-6 w-full mx-auto ">
            Optimize every aspect of your restaurant with AI—automate inventory, <br /> forecast demand, streamline staffing, and personalize the customer experience. <br /> Reduce costs, boost efficiency, and make smarter decisions in real time.
            </p>
            <button className="bg-gradient-to-r from-[#2C3069] to-[#BB12C0] py-2 px-6 rounded-md text-white font-semibold">
              Get Started Now
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://i.ibb.co.com/fGzJG8g6/Group-1686551098.png"
              alt="banner"
              className="w-full max-w-md h-auto"
            />

{/* <Lottie animationData={bannerMotion} loop={true} /> */}
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default Banner;