import React from 'react'
import "./Main.css"
import { GrAttachment } from "react-icons/gr";


const Main = () => {
  return (
    <div className='mainbody lg:w-[1200px] w-[300px] h-[450px] lg:h-[550px] mx-auto rounded-lg '>

		<div className="container lg:h-[550px] h-[400px] lg:w-[1200px] w-[300px] flex justify-center items-center relative overflow-hidden ">
      <div className="card lg:w-[400px] lg:h-[250px]  w-[200px] h-[300px]">
        <h1 className="font-bold text-3xl">Hi ..</h1>
        <p className="font-semibold lg:text-2xl text-sm">
        Currenly working at Amazon, Skilled in MERN Stack and Web Automation .</p>
        <a href="/assets/Resume_Ashutosh_Nayak_QA.pdf" download="Ashutosh's Resume" target='_blank'>

        <button type="button" className="bg-white text-slate-900 p-2 rounded-lg mt-1 hidden lg:block opacity-65 hover:scale-105 duration-300">Download Resume</button>

        <button type="button" className="bg-white text-slate-900 p-2 rounded-lg mt-1 block lg:hidden opacity-65">Resume</button>

        </a>
      </div>
      <div class="blob lg:w-[500px] lg:h-[500px] h-[100px] w-[100px]"></div>
    </div>
    </div>
  )
}

export default Main