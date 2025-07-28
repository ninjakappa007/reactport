import React from 'react'
import "./Main.css"

  
const Main = () => {
  return (
    <div className='mainbody lg:w-[1200px] w-[95%] min-h-[450px] lg:h-[550px] mx-auto rounded-lg'>

		<div className="container lg:h-[550px] min-h-[450px] lg:w-[1200px] w-full flex justify-center items-center relative overflow-hidden px-4">
      <div className="card lg:w-[400px] lg:h-[250px] w-[280px] sm:w-[320px] min-h-[280px] sm:min-h-[300px]">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-3xl mb-3">Hi, I'm Ashutosh</h1>
        <p className="font-semibold text-sm sm:text-base lg:text-2xl mb-4 leading-relaxed">
        QA Engineer at Amazon with 3+ years in Python automation and wireless testing.</p>
        <a href="/assets/ashutosh_nayak_resume_2025.pdf" download="Ashutosh's Resume" target='_blank'>

        <button type="button" className="bg-white text-slate-900 px-4 py-2 rounded-lg mt-2 opacity-75 hover:opacity-100 hover:scale-105 duration-300 text-sm sm:text-base">Download Resume</button>

        </a>
      </div>
      <div className="blob lg:w-[500px] lg:h-[500px] w-[180px] h-[180px] sm:w-[220px] sm:h-[220px]"></div>
    </div>
    </div>
  )
}

export default Main