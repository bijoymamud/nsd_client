// import React from 'react'

// const Optimize = () => {
//   return (
//     <section className='bg-[#17141D] min-h-[90vh] flex flex-col justify-center items-center'>
//       <div  className='container mx-auto text-white'>

//         <div className='flex items-center justify-between'>

//             <div className='basis-5/12'>
//                 <h1 className='text-[44px]'><span className='font-bold'>Optimize Operations</span> with
//                 enhanced data</h1>
//                 <p className='text-[20px] font-thin'>Demand forecasting is crucial to the operational success of a foodservice industry, and at Brizo, we understand that. Our expertise isn't just in providing data; we offer solutions to integrate and interpret it effectively. This is where Brizo FoodMetrics comes into play, offering daily refreshed dashboards and in-depth visualizations.</p>

//                 <p className='mt-5 text-[20px] font-thin'>These tools empower you to make optimal decisions across the board, from procurement and inventory management to staffing and service delivery. By choosing Brizo, you're not just improving customer experiences; you're consistently elevating them and setting new industry benchmarks.</p>
//             </div>

//             <div className='basis-7/12 flex items-center justify-end'>
//                 <img src="https://i.ibb.co.com/213HLsRL/Group-1686551099-2.png" alt="" />
//             </div>

//         </div>


//       </div>
//     </section>
//   )
// }

// export default Optimize;




import React from 'react';

const Optimize = () => {
  return (
    <section className='bg-[#17141D]'>
      <section className='bg-[#17141D] min-h-[90vh] flex flex-col justify-center items-center'>
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
      </section>

      <section className='bg-[#17141D] min-h-[90vh] flex flex-col justify-center items-center'>
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
      </section>

<div className='container mx-auto text-white text-center  py-20'>
    <h1 className='font-medium text-[40px]'>Sign Up for your business today</h1>
    <button className='bg-[#871CA1] px-10 py-3 rounded-[8px] mt-5'>Click Here</button>
</div>
      
    </section>
  );
};

export default Optimize;