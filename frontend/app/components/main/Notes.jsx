import noteContext from '@/app/context/noteContext'
import React, { useContext } from 'react'

const Notes = () => {
    const ctxt = useContext(noteContext)

    const deleteHandler = () => {
        ctxt.setNoteArr(ctxt.noteArr.toSpliced(-1, 1));
      }

    return (
        ctxt.noteArr.map((note, i) => {
            return (
                <div key={i} className='w-1/4 h-fit p-6 text-xl rounded-lg shadow-sm shadow-zinc-800/20 border flex justify-between'>{note}
                <button onClick={deleteHandler} type='submit' className='py-2 px-4 text-base border rounded shadow-sm shadow-zinc-800/20 hover:shadow'>Delete</button>
                </div>
            )
        })
    )
}

export default Notes