import noteContext from '@/app/context/noteContext'
import React, { useContext } from 'react'

const TypeBox = () => {
  const text = useContext(noteContext)

  const changeHandler = (e) => {
    text.setState(e.target.value);
  }

  const clickHandler = () => {
    text.setNoteArr(arr => [...arr, text.state]);
  }

  const clearHandler = () => {
    text.setState()
    console.log(text)
  }

  return (
    <>
      <input onChange={changeHandler} className='w-1/2 h-20 flex justify-center items-center text-center text-2xl rounded-lg shadow-sm shadow-zinc-800/20 border' type="text" placeholder={text.state} />
      <div className="">
        <button onClick={clickHandler} className='py-2 px-4 border rounded-md shadow-sm shadow-zinc-800/20 hover:shadow'>Add Note</button>
        <button onClick={clearHandler} className='py-2 px-4 border rounded-md shadow-sm shadow-zinc-800/20 hover:shadow'>Clear Note</button>
      </div>
    </>
  )
}

export default TypeBox