import React from 'react'
import Link from 'next/link'
import { AiFillHome, AiOutlineFile } from 'react-icons/ai'
import {GiDonut} from "react-icons/gi"

const CreateDonut = () => {
  return (
   <section className='fixed flex items-center justify-center top-0 left-0 w-full h-screen bg-black z-50 bg-opacity-50'>
    <div className='w-full mt-[80px] mb-[40px] bg-white shadow-lg rounded-md py-6 md:px-10 px-4 max-w-screen-xl'>
    <div>
      <h2 className='text-center text-4xl'>Share A Donut</h2>
      
    </div>
    <div className='mt-8 md:flex gap-6'> 
    <label
    className='md:mx-0
    mx-auto
    mt-4
    mb-6
    flex 
    flex-col 
    items-center 
    justify-center 
    w-full 
    max-w-[260px] 
    h-[470px] 
    text-center 
    p-3 
    border-2 
    border-dashed 
    border-gray-300 
    rounded-lg 
    hover:bg-gray-100 
    cursor-pointer'
    >
      <p>Image Up The Goodness</p>
      <h3 className='px-2 py-1.5 mt-8 text-white text-[15px] w-[80%] bg-primary rounded-sm'>Select A File</h3>
    </label>
    <div className='mt-5'>
    <div className='flex items-center justify-between w-[800px]'>
    <input  
      className='input w-full max-w-full text-3xl p-4' 
      placeholder='Title Goes Here'
    
    />

    </div>
    <select className="mt-6 text-warning select w-full max-w-full text-3xl">
  <option disabled selected>Category</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>
    <div className='flex gap-3 justify-center'>
    <Link 
    className='mt-8 btn pl-8 pr-8'
    href={'/'}>Home <AiFillHome style={{fontSize: "34px"}}/></Link>
    <button
    className='mt-8 btn'
    >Post Donut <GiDonut style={{fontSize: "44px", color: "pink"}} /></button>
    </div>
    </div>

    </div>
  
    </div>
   </section>
  )
}

export default CreateDonut