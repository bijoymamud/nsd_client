




import React from 'react';
import { BsGraphUp } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuBrainCircuit } from 'react-icons/lu';

const Optimize = () => {


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
      icon: <IoSettingsOutline />,
    },
  ];

  return (
    <section className='bg-[#17141D]'>
      <div className='bg-[#17141D] min-h-screen flex flex-col justify-center items-center space-y-20'>



      <div className="container px-3 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#251727] p-6 rounded-xl shadow-lg text-center w-full max-w-sm mx-auto"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{feature.title}</h3>
            <p className="w-14 h-14 text-3xl text-[#DF5EFF] mb-4 my-3 bg-[#342136] rounded-full flex mx-auto items-center justify-center">
              {feature.icon}
            </p>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className='container mx-auto text-white'>
          <div className='flex items-start justify-between gap-20'>
            <div className='basis-5/12'>
              <h1 className='text-[44px] mt-14'>
                <span className='font-bold'>Optimize Operations</span> with enhanced data
              </h1>
              <p className='text-[20px] font-thin'>
                Demand forecasting is crucial to the operational success of a foodservice industry, and at Brizo, we understand that. Our expertise isn't just in providing data; we offer solutions to integrate and interpret it effectively. This is where Brizo FoodMetrics comes into play, offering daily refreshed dashboards and in-depth visualizations.
              </p>
              <p className='mt-5 text-[20px] font-thin'>
                These tools empower you to make optimal decisions across the board, from procurement and inventory management to staffing and service delivery. By choosing Brizo, you're not just improving customer experiences; you're consistently elevating them and setting new industry benchmarks.
              </p>
            </div>
            <div className='basis-7/12 flex items-center justify-end'>
              <img 
                src="https://i.ibb.co.com/213HLsRL/Group-1686551099-2.png" 
                alt="Restaurant analytics dashboard with chef reviewing data"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>


        <div className='bg-[#17141D] min-h-[90vh] flex flex-col justify-center items-center'>
        <div className='container mx-auto text-white'>
          <div className='flex items-start justify-between flex-row-reverse gap-20'>
            <div className='basis-5/12'>
              <div className='flex items-center gap-3 mb-4'>
         
              </div>
              <h2 className='text-[44px]'>
                <span className='font-bold'>Take more strategic <br /> decisions</span> with real-time analytics
              </h2>
              <p className='text-[20px] font-thin mt-6 w-4/5'>
                The power of restaurant data analytics lies in collecting and leveraging data to make informed decisions. Our platform equips you with not just daily, but real-time updates and industry-leading refresh rates.
              </p> 
              <p className='mt-5 text-[20px] font-thin  w-4/5'>
                Through Brizo's unparalleled market coverage and verified contact information, you're not just navigating the foodservice industry landscape - you're mastering it, ensuring sustained profitability and robust partnerships.
              </p>
            </div>
            <div className='basis-7/12 flex items-center justify-start'>
              <img 
                src="https://i.ibb.co.com/KjfGjs94/Group-1686551101-1.png " 
                alt="Team analyzing business data"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

    

      </div>
        
        
      
      <div className='container mx-auto text-white text-center  py-20'>
    <h1 className='font-medium text-[40px]'>Sign Up for your business today</h1>
    <button className='bg-[#871CA1] px-10 py-3 rounded-[8px] mt-5'>Click Here</button>
</div>
     


      
    </section>
  );
};

export default Optimize;