"use client"

import React, { useState } from 'react'
import ArtistCard from './allCard/ArtistCard'
import SongList from './SongList'
import SearchCard from './allCard/SearchCard'
import SearchSongList from './SearchSongList'
import { log } from 'console'


const ResultView = () => {



  return (
    <div className='flex gap-10 mt-4'>
        <div className='w-1/3'>
            <h1 className='text-2xl text-white font-bold mb-4'>Top Result</h1>
            <SearchCard />
        </div>
        <div className='w-10/12'>
            <h1 className='text-2xl text-white font-bold mb-4'>Top Songs</h1>
            <SearchSongList />
        </div>  
    </div>
  )
  }

export default ResultView