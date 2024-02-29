"use client"

import React, { useState } from 'react'
import PlaylistName from './PlaylistName'
import data from './Dummy'
import { usePlaylist } from '../context/PlaylistContext'
import AddToPlaylist from './AddToPlaylist'

const SongList = () => {
  const [menu, setMenu] = useState(Array(data.length).fill(false))


  function handleClick (index: number) {
    const updateMenu = [...menu]
    updateMenu[index] = !updateMenu[index]
    setMenu(updateMenu)
  }





return data.map((item,i) => {
  return (
    <div key={i}>
      <div onClick={() => handleClick(i)} className={`flex justify-between mt-2 py-4 px-2 hover:bg-slate-600 hover:cursor-pointer ${menu[i] ? "bg-slate-600" : ""}`}>
        <div className='text-justify flex gap-[417px] w-1/2'>
         <p>{i + 1}</p>
         <p className='line-clamp-1'>{item.judul}</p>
        </div>  
        <div className='flex justify-between w-[38%]'>
          <p className='line-clamp-1'>{item.penyanyi}</p>
          <p>{item.durasi}</p>
        </div>
      </div>
      <div className={`bg-slate-500 h-auto w-[13%] text-justify shadow-lg px-2 py-1 rounded-lg mt-3 z-10 ${menu[i] ? "block" : "hidden"}`}>
          <p className='ml-2'>Add To Playlist : </p>
          <AddToPlaylist />
      </div>
    </div>
  )
})
}

export default SongList