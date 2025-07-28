import React from 'react';


const TechStack = () => {
  return (
    <div className='lg:w-[1200px] w-[95%] mx-auto rounded-lg mt-10 p-4 sm:p-6 lg:p-10 bg-[#030712]' id='techstack'>
      <p className='text-center text-[#ea580c] text-2xl sm:text-3xl font-semibold mb-5'>Technical Skills</p>
      <div className='flex justify-center items-center'>
        <div className='text-slate-200 w-full max-w-4xl font-light text-sm sm:text-base lg:text-xl text-center lg:text-left'>
          <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-6'>QA Engineer & Automation Specialist</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-left'>
          <div className='space-y-3'>
          <p className='mb-3'>
            <strong>Programming:</strong> Python, Pytest, Django, HTML, CSS, JavaScript
          </p>
          <p className='mb-3'>
            <strong>AWS Services:</strong> Lambda, SQS, SNS, EC2, API Gateway, CDK
          </p>
          <p className='mb-3'>
            <strong>Testing & Automation:</strong> Selenium, Pytest, TestRail, Performance Testing with Iperf
          </p>
          </div>
          <div className='space-y-3'>
          <p className='mb-3'>
            <strong>WLAN Technologies:</strong> 802.11(b/g/n/a/ac/ax/be), DHCP, PMF, WMM, Wi-Fi Roaming, Wi-Fi Security Protocols
          </p>
          <p className='mb-3'>
            <strong>Tools:</strong> Wireshark, Sniffer, wpa_supplicant, tcpdump, Git, JIRA
          </p>
          </div>
          </div>
          <p className='mt-6 text-center lg:text-left'>
            Specialized in wireless device testing and automation frameworks with 3+ years of experience at Amazon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
