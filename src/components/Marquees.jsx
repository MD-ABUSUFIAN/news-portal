import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router'

const Marquees = () => {
  return (
    <div>
        <div className='flex items-center justify-center'>
            <p className='bg-[#D72050] py-2 px-6 text-white w-[110px]'>Latest</p>
            <Marquee className='font-bold'>
              <Link>Match Highlights: Germany vs Spain — as it happened !</Link>
              <Link>Match Highlights: Germany vs Spain as............... !</Link>
              <Link>Match Highlights: Germany vs Spain — as it happened !</Link>
            </Marquee>
        </div>
    </div>
  )
}

export default Marquees