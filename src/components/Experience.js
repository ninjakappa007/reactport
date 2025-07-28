import React from 'react'

const Experience = () => {
  return (
    <div className='lg:w-[1200px] w-[95%] mx-auto rounded-lg mt-10 p-4 sm:p-6 lg:p-10 bg-[#f3f4f6]'>
        <h3 className='text-center text-2xl font-semibold text-[#14b8a6] mb-5'>Experience</h3>
        
        <div className='mb-6'>
          <h4 className='text-lg sm:text-xl font-semibold text-gray-800 mb-2'>Quality Assurance Tech</h4>
          <p className='text-base sm:text-lg text-[#14b8a6] font-medium mb-2'>Amazon Development Center India, Chennai</p>
          <p className='text-sm text-gray-600 mb-3'>Aug 2022 - Present</p>
          
          <ul className='text-sm sm:text-base lg:text-lg space-y-2 list-disc list-inside pl-2'>
            <li>Performed interoperability testing of Android-based FireOS Amazon Devices with 250+ Wi-Fi routers and mesh networks</li>
            <li>Validated connectivity across Wi-Fi security protocols including OPEN, WEP, WPA, WPA2, WPA3, and OWE</li>
            <li>Developed and maintained Python-based automation frameworks using Selenium and Pytest</li>
            <li>Onboarded Wi-Fi 6E automation test suite covering advanced scenarios such as OWE, TWT, PSC and non-PSC scanning</li>
            <li>Led migration of legacy test framework to standardized platform used across Amazon</li>
            <li>Worked with AWS services including Lambda, SQS, SNS, EC2, and API Gateway for scalable solutions</li>
            <li>Created CDK pipelines for internal tools and managed infrastructure deployment</li>
            <li>Developed solutions using APIs and webhooks for system integrations</li>
            <li>Contributed to Django-based tool development for test and inventory management</li>
          </ul>
        </div>
        
        <div className='mt-6'>
          <h4 className='text-base sm:text-lg font-semibold text-gray-800 mb-2'>Education</h4>
          <p className='text-sm sm:text-base'>B.Tech in Civil Engineering</p>
          <p className='text-xs sm:text-sm text-gray-600'>Gandhi Institute for Technological Advancement, Bhubaneswar (2016-2020)</p>
        </div>
    </div>
  )
}

export default Experience