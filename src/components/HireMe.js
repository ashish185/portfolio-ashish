import React from 'react'
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText
          className='fill-dark animate-spin-slow' //--slow is appended to slow down, to spin change tailwind config
        />
        <div>
          <Link
            href="mailto:singhalash185@gmail.com"
            className="flex items-center justify-center 
            absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2
            bg-dark rounded-full w-20 h-20 text-light p-2.5 hover:bg-white hover:text-dark
            font-semibold
            "
          >
           Hire me 
          </Link>
        </div>
      </div>

    </div>
  )
}

export default HireMe;