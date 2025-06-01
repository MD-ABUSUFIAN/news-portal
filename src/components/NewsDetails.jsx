import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router'
import Header from './Header';
import NavItemRight from './NavItemRight';

const NewsDetails = () => {
    const {newsId}=useParams();
    const [newsDetais,setNewsDetails]=useState([])
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/news/${newsId}`)
        .then(res=>res.json())
        .then(data=>setNewsDetails(data.data))
    },[])

     
  return (
       <div className='container  mx-auto py-5'>
       <div className="detailsHeader">
         <Header/>
       </div>
    <div className="newsDtailsWrapper grid grid-cols-12">
      
        <div className=" newsDetails_Left col-span-9  rounded shadow p-4  mx-auto mb-10">
          <h1 className='text-[22px] font-bold mb-5'>Dragon News</h1>
      {/* Image */}
      <img
        src={newsDetais[0]?.image_url}
        alt="news"
        className="w-full h-auto rounded-md mb-5"
      />

      {/* Title */}
      <h2 className="text-2xl font-bold text-[#403F3F] mb-3 leading-snug">
        {newsDetais[0]?.title}
      </h2>

      {/* Description */}
      <p className="text-sm text-[#706F6F] leading-relaxed mb-6">
        {newsDetais[0]?.details}
      </p>

      {/* Button */}
      <NavLink to="/" className="text-white bg-[#E03A5E] hover:bg-[#c42b51] transition px-5 py-2 text-sm font-semibold rounded-md">
        ← All news in this category
      </NavLink>
    </div>
    <div className="newsDetailsRight col-span-3">
        <NavItemRight/>
    </div>
    </div>
    
       </div>
  )
}

export default NewsDetails