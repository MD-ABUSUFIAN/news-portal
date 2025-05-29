import React from 'react'
import logo from "../assets/logo.png"
import moment from 'moment';

const Header = () => {
 

  return (
    <div >
       <div className='flex flex-col justify-center items-center'>
         <div className='logo'>
            <picture >
                <img className='max-w-[471px] h-[60px] ' src={logo} alt="" />
            </picture>
        </div>
        <div className='dailog '>
            <p className='text-[#706F6F] text-[18px] '>Journalism Without Fear or Favour</p>
        </div>
        <div className='timeDate'>
           
               <p className='text-[#403F3F] text-[20px] font-bold'>{ moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
       </div>
    </div>
  )
}

export default Header