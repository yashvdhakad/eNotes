import noteContext from '@/app/context/noteContext';
import React, { useContext, useEffect } from 'react';
import Button from './Button';

const TypeBox = () => {
  const ctxt = useContext(noteContext);
  const { title, setTitle, description, setDescription, tag, setTag, notes, setNotes, addNote, showNote, deleteAllNotes } = ctxt

  const titleHandler = (e) => {
    setTitle(e.target.value);
  }
  const descHandler = (e) => {
    setDescription(e.target.value);
  }
  const tagHandler = (e) => {
    setTag(e.target.value);
  }

  const clickHandler = () => {
    if (title !== "") {
      setNotes(arr => [...arr, { title, description, tag }]);
      setTitle("");
      setDescription("");
      setTag("");
    }
    addNote();
  }

  const keyPressHandle = (e) => {
    if (title !== "") {
      e.key === "Enter" ? setNotes(arr => [...arr, { title, description, tag }]) || setTitle("") || setDescription("") || setTag("") : "";
    }
  }

  const deleteAllHandler = () => {
    setNotes([]);
    deleteAllNotes()
  }

  useEffect(() => {
    showNote();
  }, [])
    
  return (
    <section className='w-1/2 p-6 sticky top-1/2 left-0 rounded-lg text-center space-y-6'>
      <div className="flex flex-col space-y-4">
        <input onChange={titleHandler} onKeyDown={keyPressHandle} className='h-20 bg-transparent border-[bisque]/20 text-center text-2xl rounded-lg shadow-sm shadow-zinc-800/20 border focus:outline-none placeholder:text-[bisque]/60' type="text" placeholder="Your Title..." value={title} />
        <input onChange={descHandler} onKeyDown={keyPressHandle} className='h-40 bg-transparent border-[bisque]/20 text-center text-2xl rounded-lg shadow-sm shadow-zinc-800/20 border focus:outline-none placeholder:text-[bisque]/60' type="text" placeholder="Your Description..." value={description} />
        <input onChange={tagHandler} onKeyDown={keyPressHandle} className='h-20 bg-transparent border-[bisque]/20 text-center text-2xl rounded-lg shadow-sm shadow-zinc-800/20 border focus:outline-none placeholder:text-[bisque]/60' type="text" placeholder="Your Tags..." value={tag} />
      </div>
      <div className="space-x-6">
        <Button cta="Add Note" clickHandler={clickHandler} />
        <Button cta="Delete All" deleteAllHandler={deleteAllHandler} clickHandle={deleteAllHandler} />
      </div>
    </section>
  )
}

export default TypeBox