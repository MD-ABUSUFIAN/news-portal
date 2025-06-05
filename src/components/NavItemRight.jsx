import React, { useContext } from 'react'
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa'
import { DataContext } from '../provider/AuthProvider'

const NavItemRight = () => {
  const {googleLogin,gitHubLogin,facebookLogin,twitterLogin}=useContext(DataContext)
  return (
    <div>
       <h1 className='text-[22px] font-bold text-[#403F3F]'>Login With</h1>
       <div className="loginWrapper flex flex-col gap-2 pt-3 ">
        <button onClick={googleLogin} className='btn btn-outline text-[18px] hover:text-blue-500 flex items-center justify-self-center'> <FaGoogle className='text-[22px]' /> Login With Google</button>
        <button onClick={gitHubLogin} className='btn btn-outline text-[18px]  hover:text-blue-500 flex items-center justify-self-center'> <FaGithub className='text-[22px]' /> Login With Github</button>
        <button onClick={twitterLogin} className='btn btn-outline text-[18px]  hover:text-blue-500 flex items-center justify-self-center'> <FaTwitter className='text-[22px]' /> Login With Twitter</button>
        <button onClick={facebookLogin} className='btn btn-outline text-[18px]  hover:text-blue-500 flex items-center justify-self-center'> <FaFacebook className='text-[22px]' /> Login With Facebook</button>
       </div>
    </div>
  )
}

export default NavItemRight