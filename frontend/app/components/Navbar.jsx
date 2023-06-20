import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 h-20 px-10 flex flex-row justify-between items-center shadow-sm shadow-zinc-800/20 rounded-lg bg-white/10 backdrop-blur'>
      <a className='font-bold' href="">eNotes</a>
      <div className="space-x-6">
        <a className='px-4 py-2 rounded hover:shadow-sm hover:shadow-zinc-800/20' href="">All Notes</a>
        <a className='px-4 py-2 rounded hover:shadow-sm hover:shadow-zinc-800/20' href="">Developer</a>
        <a className='px-4 py-2 rounded hover:shadow-sm hover:shadow-zinc-800/20' href="">Contact</a>
      </div>
    </div>
  )
}

export default Navbar