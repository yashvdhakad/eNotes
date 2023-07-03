import noteContext from '@/app/context/noteContext';
import React, { useContext, useEffect } from 'react';
import Button from './Button';

const TypeBox = () => {
  const ctxt = useContext(noteContext);
  const { notes, setNotes, addNote, showNotes, deleteAllNotes } = ctxt

  useEffect(() => {
    showNotes();
  }, [])

  const onChangeHandler = (e) => {
    notes[e.target.name] = e.target.value;
  }

  const clickHandler = (e) => {
    if (notes.title !== "") {
      setNotes((arr) => [...arr, {
        title: notes.title,
        description: notes.description,
        tag: notes.tag
      }]);
    }
    addNote();
  }

  const keyPressHandle = () => {
    if (notes.title !== "") {
      // e.key === "Enter" ? setNotes(arr => [...arr, {
      // title: notes.title,
      // description: notes.description,
      // tag: notes.tag
      // }]) || setTitle("") || setDescription("") || setTag("") : "";
    }
  }

  const deleteAllHandler = () => {
    setNotes([]);
    deleteAllNotes()
  }

  return (
    <section className='w-1/2 p-6 rounded-lg text-center space-y-6'>
      <div className="flex flex-col space-y-4">
        <input onChange={onChangeHandler} onKeyDown={keyPressHandle} className='h-20 bg-transparent border-[bisque]/20 text-center text-2xl rounded-lg shadow-sm shadow-zinc-800/20 border focus:outline-none placeholder:text-[bisque]/60' type="text" name="title" placeholder="Your Title..." value={notes.title} />
        <input onChange={onChangeHandler} onKeyDown={keyPressHandle} className='h-40 bg-transparent border-[bisque]/20 text-center text-2xl rounded-lg shadow-sm shadow-zinc-800/20 border focus:outline-none placeholder:text-[bisque]/60' type="text" name="description" placeholder="Your Description..." value={notes.description} />
        <input onChange={onChangeHandler} onKeyDown={keyPressHandle} className='h-20 bg-transparent border-[bisque]/20 text-center text-2xl rounded-lg shadow-sm shadow-zinc-800/20 border focus:outline-none placeholder:text-[bisque]/60' type="text" name="tag" placeholder="Your Tags..." value={notes.tag} />
      </div>
      <div className="space-x-6">
        <Button cta="Add Note" clickHandler={clickHandler} />
        <Button cta="Delete All" clickHandler={deleteAllHandler} />
      </div>
    </section>
  )
}

export default TypeBox