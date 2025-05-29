import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import NewsCard from './NewsCard'

const NavItemMain = () => {
  const {categoryId}=useParams()
  const [newsCard,setNewsCard]=useState([])

 useEffect(()=>{
  fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId ? categoryId:"01"}`)
  .then(res=>res.json())
  .then(data=>setNewsCard(data?.data)
  )
 },[categoryId])
 
  return (
   <div>
      <h1 className='text-[20px] font-semibold text-[#403F3F]'>Dragon News Home</h1>
      <div className="newsCardWrapper">
        {
          newsCard?.map(news=><NewsCard key={news?._id} news={news}></NewsCard>)
        }
      </div>
    </div>
  )
}

export default NavItemMain