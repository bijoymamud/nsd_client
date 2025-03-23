import React from 'react'
import { BsGraphUp } from 'react-icons/bs';
import {IoSettingsOutline } from 'react-icons/io5';
import { LuBrainCircuit } from 'react-icons/lu';

const Banner = () => {

    const features = [
        {
          title: "Data-Driven Insights",
          description:
            "Analyze complex data to uncover valuable trends and opportunities for your business.",
          icon: <BsGraphUp />, 
        },
        {
          title: "Smart Decision-Making",
          description:
            "Use real-time analytics to make informed and strategic business decisions.",
          icon: <LuBrainCircuit />,
        },
        {
          title: "Optimized Performance",
          description:
            "Improve efficiency and drive growth with data-backed solutions tailored to your needs.",
          icon: <IoSettingsOutline  />,
        },
      ];

  return (
    <section className='bg-[#17141D] h-[120vh] flex flex-col justify-center items-center'>
      <div className='container mx-auto text-white'>
    <div className='flex items-center justify-between'>
        <div>
        <h1 className='text-[42px] font-bold '>Embrace the Future Today</h1>
      <p className='text-[20px] '>Unlock the power of data and see the future today. <br /> 
      Transform insights into action for smarter decisions.</p>
      <button className='bg-gradient-to-r from-[#2C3069] to-[#BB12C0] py-2 px-4 rounded-md text-white mt-10'>Get Started Now</button>
        </div>

        <div>
            <img src="https://i.ibb.co.com/fGzJG8g6/Group-1686551098.png" alt="banner" />
        </div>
    </div>
      </div>

      <div className='grid grid-cols-3 gap-20 py-10'>
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-[#251727] p-6 rounded-xl shadow-lg text-center w-80 "
        >
          <h3 className="text-[24px] font-bold text-white">{feature.title}</h3>
      
          <p className="w-14 h-14 text-3xl text-[#DF5EFF] mb-4 my-3 bg-[#342136] rounded-full flex mx-auto items-center justify-center ">
  {feature.icon}
</p>

       
          <p className="text-sm text-gray-400 mt-2">{feature.description}</p>
        </div>
      ))}
      </div>
    </section>
  )
}

export default Banner
