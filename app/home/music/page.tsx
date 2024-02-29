"use client"

import CardAlbum from '@/app/component/allCard/AlbumCard'
import NavbarMusic from '@/app/component/NavbarMusic'
import React from 'react'

const Music = () => {
  return (
    <div>
        <NavbarMusic />
        <h1 className='text-3xl font-bold my-4 text-white'>Musics</h1>
        <div className='flex flex-wrap gap-4'>
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
        </div>
    </div>
  )
}

export default Music