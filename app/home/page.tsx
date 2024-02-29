import React from 'react'
import NavbarMusic from '../component/NavbarMusic'
import CardAlbum from '../component/allCard/AlbumCard'
import SongList from '../component/SongList'

const Home = () => {
  return (
    <div>
    <NavbarMusic />
        <div className='flex flex-wrap gap-4 mt-10 ml-2'>
        <CardAlbum />
        <CardAlbum />
        <CardAlbum />
        <CardAlbum />
        <CardAlbum />
        <CardAlbum />
        <CardAlbum />
        </div>
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

export default Home