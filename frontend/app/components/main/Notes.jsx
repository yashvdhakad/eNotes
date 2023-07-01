import noteContext from '@/app/context/noteContext'
import React, { useContext } from 'react'

const Notes = () => {
    const ctxt = useContext(noteContext)
    const { notes, setNotes, editNote, deleteNote } = ctxt

    return (
        <section className="border-[bisque] w-1/2 p-6 rounded-lg space-y-4">
            {notes.map((note, i) => {
                const deleteHandler = () => {
                    setNotes(notes.toSpliced(i, 1));
                    deleteNote(note._id);
                }

                const editHandler = () => {
                    let newText = prompt("Edit here:")
                    setNotes(notes.toSpliced(i, 1, newText));
                    editNote(note._id);
                }

                return (
                    <div key={i} className='p-6 text-xl rounded-lg shadow-sm shadow-zinc-800/20 border border-[bisque]/20 flex justify-between items-center space-x-6'>
                        <div className="space-y-4">
                            <div className="font-semibold">{note.title}</div>
                            <div className="text-base">{note.description}</div>
                            <div className="w-fit text-sm py-1 px-2 border border-[bisque] rounded">{note.tag}</div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <button onClick={editHandler} type='submit' className='py-2 px-4 text-base border border-[bisque] rounded shadow-sm shadow-zinc-800/20 hover:shadow'>Edit</button>
                            <button onClick={deleteHandler} type='submit' className='py-2 px-4 text-base border border-[bisque] rounded shadow-sm shadow-zinc-800/20 hover:shadow'>Delete</button>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Notes