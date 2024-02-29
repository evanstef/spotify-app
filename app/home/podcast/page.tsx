"use client"

import NavbarMusic from '@/app/component/NavbarMusic'
import React from 'react'
import CardAlbum from '@/app/component/allCard/AlbumCard'

const Podcast = () => {
  return (
    <div>
        <NavbarMusic />
        <h1 className='text-3xl text-white font-bold my-4'>Podcast</h1>
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

export default Podcast