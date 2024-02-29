"use client"

import React, { useState } from 'react'
import ArtistCard from '../component/allCard/ArtistCard'
import PlaylistCard from '../component/allCard/PlaylistCard'
import CardAlbum from '../component/allCard/AlbumCard'
import ResultView from '../component/ResultView'
import ButtonWithHover from '../component/Contoh'

const Search = () => {
  const[name,setName] = useState ("")

  function getValue (e : any) {
    setName(e.target.value)
    console.log(name);
    
  }

  return (
    <div>
      <div className='relative'>
        <input onChange={getValue} className='bg-slate-600 text-sm border-[0.2px] focus:outline-none border-slate-600 rounded-full w-[370px] py-3 pl-10 hover:border-slate-400 hover:border-[1px] focus:border-[1.8px] focus:border-slate-200' placeholder='What do want to listen ?' type="text" />
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='fill-current absolute top-3 left-3' width="25" viewBox="0 0 50 50">
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
       </svg>
      </div>
      { name !== "" && <ResultView /> }
      
      {/* top artist */}
      <div>
        <h1 className='text-3xl text-white font-bold my-4'>Top Artist</h1>
        <div className='flex gap-4 ml-2'>
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
        </div>
      </div>

      {/* Top Album */}
      { name === "" && 
      <div>
        <h1 className='text-3xl text-white font-bold my-4'>Top Album</h1>
        <div className='flex gap-4 ml-2'>
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
        </div>
      </div>
      }
      

    {/* Top Playlist */}
    {name === "" && 
    <div>
      <h1 className='text-3xl text-white font-bold my-4'>Top Playlist</h1>
        <div className='flex gap-4 ml-2'>
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
        </div>
      </div>
    }
    </div>
  )
}

export default Search