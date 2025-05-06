// import React from 'react';

// const users = [
//   {
//     id: 1,
//     image: 'https://wallpapers.com/images/featured/white-girl-pictures-4o95t9anok4vxlqf.jpg',
//     role: 'Integrate our data with Salesforce',
//     summary: "If you live in Salesforce, you know how important it is to have reliable, high-quality reports. Our platform integrates with Salesforce and other CRMs to pull our fresh and verified data into your system, ensuring you have comprehensive intelligence to inform your sales and marketing reports."
//   },
//   {
//     id: 2,
//     image: 'https://media.istockphoto.com/id/1361217779/photo/portrait-of-happy-teenage-boy-at-park.jpg?s=612x612&w=0&k=20&c=yGHZLPu6UWwoj2wazbbepxmjl29MS1Hr2jV3N0FzjyI=',
//     summary: "You can buy a generic data list from anywhere. With our online platform, you’ll benefit from real-time insight- backed data that harnesses the combined power of artificial intelligence, data science, and big data analytics. Our platform enhances your database to make it work harder and drive better results for your business.",
//     role: 'An analytics platform that helps to grow',
//   },
// ];

// const Salesforce = () => {
//   return (
//   <section className='bg-[#17141D] py-20'>
//       <div className="md:flex justify-center space-x-20 md:p-6 px-3 md:px-0">
//       {users.map((user) => (
//         <div key={user.id} className="max-w-xl  rounded-t-2xl overflow-hidden flex flex-col">
//           {/* Image Section */}
//           <img
//             src={user.image}
//             alt={user.name}
//             className="w-full md:px-10 px-5 h-[350px] md:h-[450px] object-cover "
//           />

//           {/* Content Section */}
//           <div className="bg-[#1C101F] text-neutral-content border border-[#43164E] p-6 rounded-2xl flex-grow flex flex-col">
//             <p className="font-semibold mb-2 text-[24px]">{user.role}</p>
//             <h2 className="text-sm leading-relaxed flex-grow mt-5">{user.summary}</h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
//   );
// };

// export default Salesforce;


import React from 'react';

const users = [
  {
    id: 1,
    image: 'https://wallpapers.com/images/featured/white-girl-pictures-4o95t9anok4vxlqf.jpg',
    role: 'Integrate our data with Salesforce',
    summary: "If you live in Salesforce, you know how important it is to have reliable, high-quality reports. Our platform integrates with Salesforce and other CRMs to pull our fresh and verified data into your system, ensuring you have comprehensive intelligence to inform your sales and marketing reports."
  },
  {
    id: 2,
    image: 'https://media.istockphoto.com/id/1361217779/photo/portrait-of-happy-teenage-boy-at-park.jpg?s=612x612&w=0&k=20&c=yGHZLPu6UWwoj2wazbbepxmjl29MS1Hr2jV3N0FzjyI=',
    summary: "You can buy a generic data list from anywhere. With our online platform, you’ll benefit from real-time insight-backed data that harnesses the combined power of artificial intelligence, data science, and big data analytics. Our platform enhances your database to make it work harder and drive better results for your business.",
    role: 'An analytics platform that helps to grow',
  },
];

const Salesforce = () => {
  return (
    <section className="bg-[#17141D] py-10 md:py-20">
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-20 p-3 md:p-6">
        {users.map((user) => (
          <div key={user.id} className="w-full max-w-xl rounded-t-2xl overflow-hidden flex flex-col">
            {/* Image Section */}
            <img
              src={user.image}
              alt={user.role}
              className="w-full px-3 md:px-10 h-[250px] md:h-[450px] object-cover"
            />

            {/* Content Section */}
            <div className="bg-[#1C101F] text-neutral-content border border-[#43164E] p-4 md:p-6 rounded-2xl flex-grow flex flex-col">
              <p className="font-semibold mb-2 text-xl md:text-[24px]">{user.role}</p>
              <h2 className="text-xs md:text-sm leading-relaxed flex-grow mt-3 md:mt-5">{user.summary}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Salesforce;