"use client"

import React, { useState } from 'react'
import data from './Dummy'
import play from '../../public/icons8-play-button-50.png'
import pause from '../../public/icons8-pause-64.png'
import next from '../../public/icons8-next-button-25.png'
import volume from '../../public/icons8-volume-50.png'
import Image from 'next/image'


const PlayButton = () => {
  const [paused,setPause] = useState(false)

  function handleClick() {
    setPause(!paused)
  }

  return (
    <div className='bg-slate-800 text-white text-center h-20 mx-7 px-4 rounded-lg flex justify-between items-center'>
      <div className='text-justify'>
        <p>{data[1].judul}</p>
        <p className='text-sm'>{data[1].penyanyi}</p>
      </div>
      <div className='flex items-center gap-4'>
        <Image className='invert cursor-pointer rotate-180' src={next} width={23} alt=''/>
        <Image onClick={handleClick} className='invert cursor-pointer' src={paused ? play : pause} width={50} alt='gambar' />
        <Image className='invert cursor-pointer' src={next} alt='' width={23}/>
      </div>
      <div className='flex items-center gap-2'>
        <Image className='invert' src={volume} alt='' width={22} />
        <div className='bg-slate-600 w-36 h-2'>
          <div className='bg-slate-50 w-[60%] h-2'></div>
        </div>
      </div>
    </div>
  )
}

export default PlayButton