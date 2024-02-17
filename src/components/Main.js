import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <div className='mainbody lg:w-[1200px] w-[300px] h-[450px] lg:h-[550px] mx-auto rounded-lg '>

		<div className="container lg:h-[550px] h-[400px] lg:w-[1200px] w-[300px] flex justify-center items-center relative overflow-hidden ">
      <div className="card lg:w-[400px] lg:h-[250px]  w-[200px] h-[300px]">
        <h1 className="font-bold text-3xl">Hi</h1>
        <p className="font-semibold text-2xl">Currenly working at amazon , learning Web Dev using MERN Stack</p>
      </div>
      <div class="blob lg:w-[500px] lg:h-[500px] h-[100px] w-[100px]"></div>
    </div>
    </div>
  )
}

export default Main