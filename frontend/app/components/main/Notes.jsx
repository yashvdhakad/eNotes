import noteContext from '@/app/context/noteContext'
import React, { useContext } from 'react'

const Notes = () => {
    const text = useContext(noteContext)

    return (
        text.noteArr.map((note, i) => {
            return (<div key={i} className='w-1/4 h-fit p-6 text-xl rounded-lg shadow-sm shadow-zinc-800/20 border'>{note}</div>)
        })
    )
}

export default Notes