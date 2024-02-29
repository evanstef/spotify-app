import React from 'react'
import Link from 'next/link'

const LoginBar = () => {
  return (
    <div className='flex justify-end gap-4'>
        <Link className='bg-slate-700 font-bold rounded-full px-4 py-[3px] duration-300 hover:bg-slate-800' href="/">Sign Up</Link>
        <Link className='bg-slate-50 font-bold rounded-full text-black px-4 py-[3px] duration-300 hover:bg-slate-500' href="/">Log In</Link>
    </div>
  )
}

export default LoginBar