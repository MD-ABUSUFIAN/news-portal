import React, { useContext, useState } from 'react';
import { DataContext } from '../../provider/AuthProvider';
import { Navigate, useNavigate } from 'react-router';

const Register = () => {
  const {register,setUser,update,setError} = useContext(DataContext);
  const [checkedIn, setCheckedIn] = useState(false);
 
  const navigate=useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const photoUrl = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    if(!name || !photoUrl || !email || !password){
      setError("All Fields are Requred")
      alert("All Fields are Requred")
    }
    register(email,password)
    .then((user)=>{
      setUser(user.user)
      update(name,photoUrl)
      navigate('/')
    
    .then(() => {
      // Profile updated!
     
    })})
    .catch((error)=>{
      setError(error.code, error.message)
    })
  }
 

  return (
    <div className=" w-full flex flex-col items-center justify-center h-dvh">
      <div className="card w-5/12  px-[2%] py-[5%]  shrink-0 shadow-2xl">
        <h1 className="text-[40px] font-semibold text-center">
          Register Your Account
        </h1>
        <hr className="text-gray-100 mt-4" />
        <div className="card-body text-[20px]">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* userName  */}
              <label className="label text-black text-[20px] font-bold">
                Your Name
              </label>
              <input
                type="text"
                className="input  w-full text-[17px] outline-0"
                placeholder="Write Your Name"
                name="name"
                required
              />
              {/* Photo UrL  */}
              <label className="label text-black text-[20px] font-bold">
                Photo URL
              </label>
              <input
                type="text"
                className="input  w-full text-[17px] outline-0"
                placeholder="Photo URL"
                name="photo"
                required
              />
              {/* email  */}
              <label className="label text-[20px] text-black font-bold">
                Email
              </label>
              <input
                type="email"
                className="input  w-full text-[17px] outline-0 "
                placeholder="Write Your Email"
                name="email"
                required
              />
              {/* Password  */}
              <label className="label text-[20px] text-black font-bold">
                Password
              </label>
              <input
                type="password"
                className="input  w-full text-[17px] "
                placeholder="Password"
                name="password"
              
              />
              <div className="flex items-center py-2">
                <input
                  type="checkbox"
                  name="radio"
                  className="w-[20px] h-[20px]"
                  onChange={(e) => setCheckedIn(e.target.checked)}
                />
                <p className=" text-[16px] ml-2">
                  Accept <span className='font-semibold'>Term & Conditions</span>
                </p>
              </div>
              <button
                className="btn btn-neutral mt-4 text-[20px] text-white  font-bold hover:bg-blue-500 hover:border-0 "
                disabled={!checkedIn}
              >
                Registration
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
