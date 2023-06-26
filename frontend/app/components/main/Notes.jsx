import noteContext from '@/app/context/noteContext'
import React, { useContext } from 'react'

const Notes = () => {
    const ctxt = useContext(noteContext)

    return (
        ctxt.noteArr.map((note, i) => {
            const deleteHandler = () => {
                ctxt.setNoteArr(ctxt.noteArr.toSpliced(i, 1));
            }

            const editHandler = () => {
                let newText = prompt("Edit here:")
                ctxt.setNoteArr(ctxt.noteArr.toSpliced(i, 1, newText));
            }

            return (
                <div key={i} className='w-1/2 p-6 text-xl rounded-lg shadow-sm shadow-zinc-800/20 border flex justify-between items-center'>{i + 1}. {note}
                    <div className="">
                        <button onClick={deleteHandler} type='submit' className='py-2 px-4 text-base border rounded shadow-sm shadow-zinc-800/20 hover:shadow'>Delete</button>
                        <button onClick={editHandler} type='submit' className='py-2 px-4 text-base border rounded shadow-sm shadow-zinc-800/20 hover:shadow'>Edit</button>
                    </div>
                </div>
            )
        })
    )
}

export default Notes