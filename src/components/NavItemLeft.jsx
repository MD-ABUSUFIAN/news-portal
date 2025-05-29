import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

const NavItemLeft = () => {
  const[navItem,setNevItem]=useState([])
  useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res=>res.json())
    .then(item=>setNevItem(item?.data?.news_category))
  },[])
  return (
    <div>
      <h1 className='text-[20px] font-semibold text-[#403F3F]'>All Category ({navItem.length})</h1>
      <div className='categoryList flex flex-col gap-2  pt-4'>
        {
          navItem?.map(data=><NavLink to={`category/${data.category_id}`} key={data.category_id} className={({isActive})=>`px-[90px]  text-start text-[20px] font-semibold py-2 ${!isActive? 'text-[#9F9F9F]':' bg-[#E7E7E7] text-black'}`
          }>{data.category_name}</NavLink>
          )
        }
      </div>
    </div>
  )
}

export default NavItemLeft