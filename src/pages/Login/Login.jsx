import React, { useContext } from 'react'
import { DataContext } from '../../provider/AuthProvider'
import { useNavigate } from 'react-router';

const Login = () => {
  const {login,setUser}=useContext(DataContext);
  const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=new FormData(e.target)
        const email=form.get("email")        
        const password=form.get("password")    
        login(email,password)   
        .then((userCredential)=>{
          console.log("login hit");
          
          const result=userCredential.user
          setUser(result)
          navigate('/')
        }).catch((error)=>{
          console.error(error.message,error.code)
        })
    
    }
  return (

 <div className=" w-full flex flex-col items-center justify-center h-dvh">
           
    <div className="card w-5/12  px-[2%] py-[5%]  shrink-0 shadow-2xl">
     <h1 className='text-[40px] font-semibold text-center'>Login Your Account</h1>
     <hr className='text-gray-100 mt-4' />
      <div className="card-body text-[20px]">
        <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
          <label className="label text-[20px] font-bold">Email</label>
          <input type="email" className="input  w-full text-[17px]" placeholder="Email" name='email'  required />
          <label className="label text-[20px] font-bold">Password</label>
          <input type="password" className="input  w-full text-[17px]" placeholder="Password" name='password' required />
          <div><button className="link link-hover text-[16px] text-red-400 mt-2 font-semibold">Forgot password?</button></div>
          <button className="btn btn-neutral mt-4 text-[20px] text-white  font-bold hover:bg-blue-500 hover:border-0 ">Login</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>

  )
}

export default Login