import React from 'react'
import Link from 'next/link'
import profile from "../public/profile.png"
import { AiOutlinePlus, AiOutlineFile } from 'react-icons/ai'


const Navbar = () => {
  return (
    <header className="navbar bg-base-100 pt-8 pb-8 flex align-center">
    <div className="flex-1">
    <Link href={'/'} className="btn btn-ghost normal-case text-xl">DonutShop</Link>
  </div>
      <div  className="mt-3 z-[1] flex">
      <Link href={'/category'} className='btn mr-3'>Categories <AiOutlineFile style={{ fontSize: "24px"}} /></Link>
      <Link href={'/create-donut'} className='btn mr-3'>Create Donut <AiOutlinePlus style={{ fontSize: "24px"}} /></Link>

      </div>

    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={profile} alt='profile' className='w-10' />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    </header>
  )
}

export default Navbar