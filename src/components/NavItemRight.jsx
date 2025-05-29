import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const NavItemRight = () => {
  return (
    <div>
       <h1 className='text-[22px] font-bold text-[#403F3F]'>Login With</h1>
       <div className="loginWrapper flex flex-col gap-2 pt-3 ">
        <button className='btn btn-outline text-[18px] hover:text-blue-500 flex items-center justify-self-center'> <FaGoogle /> Login With Google</button>
        <button className='btn btn-outline text-[18px]  hover:text-blue-500 flex items-center justify-self-center'> <FaGithub /> Login With Github</button>
       </div>
    </div>
  )
}

export default NavItemRight