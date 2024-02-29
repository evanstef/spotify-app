"use client"

import React from 'react'
import { usePlaylist } from '../context/PlaylistContext'

const AddToPlaylist = () => {
    const {playlist} = usePlaylist()

  return (
    <div>
      <ul>
        {playlist.map((item:any,i:any) => 
          (
            <li className='line-clamp-1 px-2 py-1 cursor-default hover:bg-slate-600' key={i}>
              <h1>{Object.keys(item)}</h1>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default AddToPlaylist