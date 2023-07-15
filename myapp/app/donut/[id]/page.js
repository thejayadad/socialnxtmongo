import React from 'react'
import Link from 'next/link'

const DonutPage = () => {
  return (
    <section className='fixed lg:flex justify-between z-50 top-0 left-0 w-full h-full bg-black lg:overflow-hidden overflow-auto'>
        <div className='w-full mt-[80px] mb-[40px] bg-white shadow-lg rounded-md py-6 md:px-10 px-4 max-w-screen-xl m-auto'>
        <figure className='flex h-full gap-4'>
            <div className='w-[65%] rounded-md lg:mx-0 mx-auto bg-gray-200'>
                PIC HERE
            </div>
            <div className='w-[35%] bg-red-200'>
            <div className='flex align-center justify-center'>
                <Link className='text-center btn' href={'/'}>Home</Link>
            </div>
            </div>
        </figure>
        </div>
   
    </section>
  )
}

export default DonutPage