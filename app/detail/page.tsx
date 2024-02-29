import React from 'react'
import black from '../../public/profil.jpg'
import Image from 'next/image'
import SongList from '../component/SongList'

const Detail = () => {
  return (
    <div>
      <Image className='rounded-lg ml-5 mt-10' src={black} width={230} alt='' />
      <div className='border-b-2 border-slate-500 mt-5'></div>
      <div className='flex mt-10 border-b-2 px-2 justify-between border-slate-600 py-1'>
            <p>#</p>
            <p>Title</p>
            <p>Album</p>
            <p>duration</p>
      </div>
      <SongList />
    </div>
  )
}

export default Detail