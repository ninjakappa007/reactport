import React from 'react';


const TechStack = () => {
  return (
    <div className='lg:w-[1200px] w-[95%] mx-auto rounded-lg mt-10 p-4 sm:p-6 lg:p-10 bg-[#030712]' id='techstack'>
      <p className='text-center text-[#ea580c] text-2xl sm:text-3xl font-semibold mb-5'>Technical Skills</p>
      <div className='flex flex-col lg:flex-row justify-around items-center'>
        {/* logos */}
        <div className='flex flex-col lg:w-[40%] w-full mb-5 lg:mb-0'>
          <div className='flex gap-3 lg:w-[60px] w-[40px] h-[40px]'>
            <img src='/assets/HTML.png' alt='HTML Logo' className='lg:w-[50px] w-[40px]'/>
            <img src='/assets/CSS.png' alt='CSS Logo' className='lg:w-[50px] w-[40px]' />
            <img src='/assets/Javascript.svg' alt='JavaScript Logo' className='lg:w-[50px] w-[40px]'/>
            <img src='/assets/React.png' alt='React Logo' />
            <img src='/assets/Git.svg' alt='Git Logo' />
          </div>

          <div className='flex gap-3 lg:w-[80px] w-[40px] h-[80px] scale-125 ml-5'>
            <img src='/assets/MongoDB.svg' alt='MongoDB Logo' />
            <img src='/assets/NodeJs.svg' alt='Node.js Logo' className='lg:w-[60px] w-[40px] h-[80px]'/>
            <img src='/assets/Docker.svg' alt='Docker Logo' />
          </div>
        </div>

        {/* about details */}
        <div className='text-slate-200 lg:w-[50%] w-full font-light text-sm sm:text-base lg:text-xl mt-5 lg:mt-0'>
          <span className='text-xl sm:text-2xl lg:text-3xl font-bold'>QA Engineer & Automation Specialist</span>
          <p className='mb-3 mt-3'>
            <strong>Programming:</strong> Python, Pytest, Django, HTML, CSS, JavaScript
          </p>
          <p className='mb-3'>
            <strong>WLAN Technologies:</strong> 802.11(b/g/n/a/ac/ax/be), DHCP, PMF, WMM, Wi-Fi Roaming, Wi-Fi Security Protocols
          </p>
          <p className='mb-3'>
            <strong>Testing & Automation:</strong> Selenium, Pytest, TestRail, Performance Testing with Iperf
          </p>
          <p className='mb-3'>
            <strong>Tools:</strong> Wireshark, Sniffer, wpa_supplicant, tcpdump, Git, JIRA
          </p>
          <p>
            Specialized in wireless device testing and automation frameworks with 3+ years of experience at Amazon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
