import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='sticky top-0 h-16 px-10 flex flex-row justify-between items-center shadow-sm shadow-zinc-800/20 border border-[bisque]/20 rounded-lg bg-[slateblue]'>
      <Link className='text-lg font-bold' href="/">eNotes</Link>
      <div className="space-x-6">
        <Link className='px-4 py-2 rounded hover:shadow-sm hover:shadow-zinc-800/20' href="/allnotes">All Notes</Link>
        <Link className='px-4 py-2 rounded hover:shadow-sm hover:shadow-zinc-800/20' href="/contact">Contact</Link>
        <Link className='px-4 py-2 rounded hover:shadow-sm hover:shadow-zinc-800/20' href="/developer">Developer</Link>
      </div>
    </div>
  )
}

export default Navbar