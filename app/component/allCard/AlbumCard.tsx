"use client"

import React from 'react'
import black from '../../../public/profil.jpg'
import Image from 'next/image'
import Link from 'next/link'

const CardAlbum = () => {
  return (
    <div>
      <Link href="/detail">
      <div className='bg-slate-700 w-[188px] h-64 rounded-lg p-3 relative'>
            <Image className='rounded-lg m-auto' src={black} width={140} alt=''/>
            <div className='mt-4 text-justify'>
                <p className='line-clamp-1'>Judul lagu seorang psikiter</p>
                <p className='line-clamp-1'>Penyanyi</p>
            </div> 
            <div className='w-[191px] h-64 rounded-lg p-3 bottom-0 left-0 absolute opacity-0 hover:opacity-100 hover:bg-slate-500 hover:bg-opacity-40 hover:cursor-pointer'>
                <img className='ml-28 mt-32 w-[50px] h-[50px] rounded-full bg-green-500' width="50" height="50" src="https://img.icons8.com/ios-filled/50/play-button-circled--v1.png" alt="play-button-circled--v1"/>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default CardAlbum;