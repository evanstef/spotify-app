"use client"

import React, { useState } from 'react'
import PlaylistName from './PlaylistName'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { usePlaylist } from '../context/PlaylistContext'


const Navbar = () => {
    const {playlist,value,handleDelete,handleGetValue,handleSubmit} = usePlaylist()
    const linkActive = usePathname()


  return (
    <div className='flex flex-col'>
        <div className='bagian-home-search bg-slate-800 rounded-lg p-6 mb-7'>
            <div className='flex items-center gap-6 mb-5 hover:text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className={`fill-current ${linkActive === "/home" || linkActive === "/home/music" || linkActive === "/home/podcast" ? "text-teal-500" : ""}`} width="30" viewBox="0 0 50 50">
                <path d="M 24.960938 2.1015625 A 1.0001 1.0001 0 0 0 24.386719 2.3105469 L 1.3867188 20.210938 A 1.0001 1.0001 0 1 0 2.6132812 21.789062 L 4 20.708984 L 4 48 A 1.0001 1.0001 0 0 0 5 49 L 18.832031 49 A 1.0001 1.0001 0 0 0 19.158203 49 L 30.832031 49 A 1.0001 1.0001 0 0 0 31.158203 49 L 45 49 A 1.0001 1.0001 0 0 0 46 48 L 46 20.708984 L 47.386719 21.789062 A 1.0001 1.0001 0 1 0 48.613281 20.210938 L 25.613281 2.3105469 A 1.0001 1.0001 0 0 0 24.960938 2.1015625 z M 25 4.3671875 L 44 19.154297 L 44 47 L 32 47 L 32 29 A 1.0001 1.0001 0 0 0 31 28 L 19 28 A 1.0001 1.0001 0 0 0 18 29 L 18 47 L 6 47 L 6 19.154297 L 25 4.3671875 z M 20 30 L 30 30 L 30 47 L 20 47 L 20 30 z"></path>
                </svg>
                <Link href="/home" className={`text-lg ${linkActive === "/home" || linkActive === "/home/music" || linkActive === "/home/podcast" ? "font-bold text-white" : "" }`}>Home</Link>
            </div>
            <div className='flex items-center gap-6 hover:text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className={`fill-current ${linkActive === "/search" ? "text-teal-500" : ""}`} width="30" viewBox="0 0 50 50">
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                </svg>
                <Link href="/search" className={`text-lg ${linkActive === "/search" ? "text-white font-bold" : ""}`}>
                  Search  
                </Link> 
            </div>
        </div>
        <div className='bagian-playlist text-lg bg-slate-800 h-[632px] rounded-lg p-6'>
            <div className='flex items-center justify-between mb-7'>
                <div className='flex items-center gap-4 cursor-default hover:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" className='fill-current' viewBox="0 0 50 50">
                    <path d="M 5 4 C 3.346 4 2 5.346 2 7 L 2 13 L 3 13 L 47 13 L 48 13 L 48 11 C 48 9.346 46.654 8 45 8 L 18.044922 8.0058594 C 17.765922 7.9048594 17.188906 6.9861875 16.878906 6.4921875 C 16.111906 5.2681875 15.317 4 14 4 L 5 4 z M 3 15 C 2.448 15 2 15.448 2 16 L 2 43 C 2 44.657 3.343 46 5 46 L 45 46 C 46.657 46 48 44.657 48 43 L 48 16 C 48 15.448 47.552 15 47 15 L 3 15 z"></path>
                    </svg>
                    <h1 className='text-sm'>Your Library</h1>
                </div>
                {/* Bagian penambahan Playlist */}
                <div className='text-[16px]'>
                   <form action="" onSubmit={handleSubmit}>
                        <input className='px-3 py-[2px] bg-slate-600 w-[173px] rounded-full focus:outline-none focus:border-slate-200 focus:border-[0.02px]' type="text" placeholder='Create a playlist' value={value} onChange={handleGetValue} />
                   </form>
                </div>
            </div>
            <div className='flex justify-end mb-7'>
                <button className='hover:text-white'>Recent <span>≡</span></button>
            </div>
                <PlaylistName playlist={playlist} handleDelete={handleDelete}/>
            </div>
    </div>
  )
}

export default Navbar