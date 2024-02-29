"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavbarMusic = () => {

    const linkOn = usePathname()

  return (
    <div>
        <div className='flex'>
            <div className='flex gap-5'>
                <Link className={`px-3 rounded-full hover:bg-slate-600 ${linkOn === "/home" ? "bg-slate-200 text-black font-bold" : "bg-slate-700"}`} href="/home">All</Link>
                <Link className={`px-3 rounded-full hover:bg-slate-600 ${linkOn === "/home/music" ? "bg-slate-200 text-black font-bold" : "bg-slate-700"}`} href="/home/music">Music</Link>
                <Link className={`px-3 rounded-full hover:bg-slate-600 ${linkOn === "/home/podcast" ? "bg-slate-200 text-black font-bold" : "bg-slate-700 "}`} href="/home/podcast">Podcast</Link>
            </div>
        </div>
    </div>
  )
}

export default NavbarMusic