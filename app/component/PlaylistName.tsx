"use client"

import React from 'react'

interface Props {
  playlist : {[key:string] : any[]}[];
  handleDelete : (index:number) => void
}

const PlaylistName:React.FC<Props> = ({playlist, handleDelete}) => {
  return (
    <div>
      <ul>
        {playlist.map((item:any,i:any) => 
          (
            <li className='flex justify-between line-clamp-1 px-2 py-1 cursor-default hover:bg-slate-600 group' key={i}>
              <h1>{Object.keys(item)}</h1>
              <button onClick={() => handleDelete(i)} className='opacity-0 px-2 rounded-lg group-hover:opacity-100 hover:text-white hover:font-bold'>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default PlaylistName