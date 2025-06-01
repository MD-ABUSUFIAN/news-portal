import React from 'react'
import { Link, NavLink } from 'react-router'
import user from '../assets/user.png'

const Navbar = () => {
  return (
    <div className=' py-8'>
      <div className="navWrapper flex justify-between">
        <div className="navbarLeft ">
          
        </div>
        <div className=" navbarMiddle text-[#706F6F] text-[18px] flex justify-center items-center gap-5 font-bold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className=" navbarRight flex items-center justify-center gap-3">
            <div className="userIcon w-[41px] h-[41px]">
              <picture>
                <img className='object-cover' src={user} alt="" />
              </picture>
            </div>
            <Link to="/auth/login" className="btn btn-neutral bg-[#403F3F] py-4 px-10 font-semibold text-[20px]">Login</Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar