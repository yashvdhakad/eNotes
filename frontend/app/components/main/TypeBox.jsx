import noteContext from '@/app/context/noteContext';
import React, { useContext } from 'react';

const TypeBox = () => {
  const ctxt = useContext(noteContext);

  const changeHandler = (e) => {
    ctxt.setText(e.target.value);
  }

  const clickHandler = () => {
    if (ctxt.text !== "") {
      ctxt.setNoteArr(arr => [...arr, ctxt.text]);
      ctxt.setText("");
    }
  }

  const keyPressHandle = (e) => {
    if (ctxt.text !== "") {
      e.key === "Enter" ? ctxt.setNoteArr(arr => [...arr, ctxt.text]) || ctxt.setText("") : "";
    }
  }

  const deleteAllHandler = () => {
    ctxt.setNoteArr([]);
  }

  return (
    <>
      <input onChange={changeHandler} onKeyDown={keyPressHandle} className='w-1/2 h-20 flex justify-center items-center text-center text-2xl rounded-lg shadow-sm shadow-zinc-800/20 border' type="text" placeholder="Your Title..." value={ctxt.text} />
      <div className="space-x-6">
        <button onClick={clickHandler} type='submit' className='py-2 px-4 border rounded-md shadow-sm shadow-zinc-800/20 hover:shadow'>Add Note</button>
        <button onClick={deleteAllHandler} type='submit' className='py-2 px-4 border rounded-md shadow-sm shadow-zinc-800/20 hover:shadow'>Delete All</button>
      </div>
    </>
  )
}

export default TypeBox