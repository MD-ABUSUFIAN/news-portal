
import { Link, NavLink } from 'react-router'
import users from '../assets/user.png'
import { DataContext } from '../provider/AuthProvider'
import { useContext } from 'react'

const Navbar = () => {
     const {user,logOut,setUser,setError}=useContext(DataContext);
  const handleLogout=()=>{
    logOut()
    .then(()=>{
      setUser(null)
    }).catch((error)=>{
      setError(error.message)
    })
   
  }

  
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
            <div className="userIcon w-[60px] h-[60px] flex items-center">
              <picture>
                <img className='object-cover rounded-full' src={user && user?.email ? user?.photoURL:users} alt="" />
              </picture>
            </div>
            <span className='text-xl font-bold text-blue-500'>{user?.displayName}</span>
            {
              !user && !user?.email ? ( <Link to="/auth/login" className="btn btn-neutral bg-[#403F3F] py-4 px-10 font-semibold text-[20px]">Login</Link>):(<button onClick={handleLogout} className=" bg-red-400 p-[5px] text-white rounded border-none px-10 font-semibold text-[20px]">LogOut</button>)
            }
           
        </div>
      </div>

    </div>
  )
}

export default Navbar