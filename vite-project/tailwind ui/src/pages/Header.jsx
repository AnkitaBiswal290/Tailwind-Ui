import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaAlignJustify } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Header() {

const[toggle, setToggle] = useState(false);


  return (
    <div className='bg-gray-900 p-4'>
      <div className='max-w-[1240px] py-[20px] flex justify-between items-center mx-auto'>
        <div className='font-bold text-xl text-white ml-20'>
          <Link to="/">LOGO</Link>
        </div>


        {
          toggle?
          (
          <IoClose className='text-white text-2xl block md:hidden' onClick={()=>setToggle(!toggle)} />
          )
          :
          (
          <FaAlignJustify className='text-white text-2xl md:hidden' onClick={()=>setToggle(!toggle)} />
          )
        }

        <ul className='text-xl font-semibold hidden md:flex gap-10 text-white  ml-80'>
          <li>
            <Link to="/">Home</Link>
            </li>
          <li>
          <Link to="/about">About</Link>
            </li>
          <li>
          <Link to="/resources">Resources</Link>
            </li>
          <li>
          <Link to="/gallery">Gallery</Link>
            </li>
            <li>
           <Link to="/contact">Contact</Link>
          </li>
        </ul>
      



      {/* Responsive menu */}

      <div>
      <ul className={`duration-300 w-full h-screen md:hidden fixed bg-slate-400 text-xl text-white top-[105px]
         ${toggle ? 'left-[0]': 'left-[-100%]'}`}>
          <li className='p-5'>
            <Link to="/">Home</Link>
            </li>
          <li className='p-5'>
          <Link to="/about">About</Link>
            </li>
          <li className='p-5'>
          <Link to="/resources">Resources</Link>
            </li>
          <li className='p-5'>
          <Link to="/gallery">Gallery</Link>
            </li>
            <li className='p-5'>
          <Link to="/contact">Contact</Link>
            </li>
        </ul>
      
      </div>
      </div>
    </div>
  )
}

export default Header
