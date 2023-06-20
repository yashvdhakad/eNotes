import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='sticky top-0 h-20 px-10 flex flex-row justify-between items-center shadow-sm shadow-zinc-800/20 rounded-lg bg-white/10 backdrop-blur'>
      <Link className='font-bold' href="/">eNotes</Link>
      <div className="space-x-6">
        <Link className='px-4 py-2 rounded hover:shadow-sm hover:shadow-zinc-800/20' href="/allnotes">All Notes</Link>
        <Link className='px-4 py-2 rounded hover:shadow-sm hover:shadow-zinc-800/20' href="/developer">Developer</Link>
        <Link className='px-4 py-2 rounded hover:shadow-sm hover:shadow-zinc-800/20' href="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar