"use client"

import React, { useEffect, useState,useRef } from 'react'
import Image from 'next/image' 
import ccc from '../../public/profil.jpg'
import PlaylistName from './PlaylistName'
import data from './Dummy'
import Navbar from './Navbar'
import { constrainedMemory } from 'process'
import { usePlaylist } from '../context/PlaylistContext'
import AddToPlaylist from './AddToPlaylist'

// interface Props {
//     menu : boolean,
//     click : (index : number) => void
// }
type ObjectProps = {
    [key:string] : any[]
}

const SearchSongList: React.FC = () => {
    const newData = data.slice(0,4)
    const [menu,setMenu] = useState(Array(newData.length).fill(false))
    const {playlist,handleDelete} = usePlaylist()


    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenu(Array(newData.length).fill(false));
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);


    function handleClick (index: number) {
        const updateMenu = [...menu]
        updateMenu[index] = !updateMenu[index]
        setMenu(updateMenu)
    }

    

    return newData.map((item,i) => {
        return (
            <div key={i}>
                <div className={`relative flex justify-between items-center cursor-pointer hover:bg-slate-600 py-2 px-2 ${menu[i] ? "bg-slate-600" : ""}`}>
                    <div className='flex items-center gap-11'>
                        <div>
                            <Image className='rounded-sm' src={ccc} width={40} alt=''></Image>
                        </div>
                        <div>
                            <p>{item.judul}</p>
                            <p>{item.penyanyi}</p> 
                        </div>
                    </div>
                    <div className='flex items-center gap-11'>
                        <p>{item.durasi}</p>
                        <div className='buttonAdd' ref={menuRef}>
                            <button id='add-button' onClick={() => handleClick(i)} className='text-xl hover:text-white'>⋯</button>
                            <p id='element' className='absolute right-0 bg-black px-2 -z-10 rounded-lg -mt-12 opacity-0 duration-200 ease-in-out'>more options for judul lagu by penyanyi</p>
                        </div>
                    </div>
                </div>
                <div id='menu-add'>
                    <div className={`bg-slate-500 h-auto w-[8%] text-justify shadow-lg px-2 py-1 cursor-pointer hover:bg-slate-600 rounded-lg right-16 z-10 absolute ${menu[i] ? "block" : "hidden"}`}>Add To Playlist ➤</div>
                    <div id='playlist-menu' className='absolute w-[10%] bg-slate-500 right-[220px] rounded-lg px-2 py-3 -z-10 opacity-0 duration-300 ease-in-out'>
                        <p className='text-[18px]'>Playlist Name :</p>
                        <AddToPlaylist />
                    </div>
                </div> 
            </div>
          )
    })
}

export default SearchSongList