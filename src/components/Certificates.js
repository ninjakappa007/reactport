import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      title: "Selenium Webdriver with PYTHON from Scratch + Frameworks",
      description: "Comprehensive course covering Selenium automation with Python"
    },
    {
      title: "Agile Kanban: Kanban for Software Development Teams", 
      description: "Agile methodology and Kanban practices for software development"
    }
  ];

  return (
    <div className='lg:w-[1200px] w-[95%] mx-auto rounded-lg mt-10 p-4 sm:p-6 lg:p-10 bg-[#1f2937]'>
      <h3 className='text-center text-2xl font-semibold text-[#ea580c] mb-5'>Certificates</h3>
      
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {certificates.map((cert, index) => (
          <div key={index} className='bg-[#374151] p-6 rounded-lg'>
            <h4 className='text-base sm:text-lg font-semibold text-white mb-3'>{cert.title}</h4>
            <p className='text-gray-300 text-xs sm:text-sm'>{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;