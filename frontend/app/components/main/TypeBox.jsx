import noteContext from '@/app/context/noteContext'
import React, { useContext } from 'react'

const TypeBox = () => {
  const text = useContext(noteContext)

  const changeHandler = (e) => {
    text.setState(e.target.value);
  }

  const clickHandler = (e) => {
    text.setNoteArr(arr => [...arr, text.state]);
    text.setState("")
    e.preventDefault()
  }

  const keyPressHandle = (e) => {
    e.key === "Enter" ? text.setNoteArr(arr => [...arr, text.state]) || text.setState("") : ""
  }

  const deleteHandler = () => {
    text.setNoteArr([])
  }

  return (
    <>
      <input onChange={changeHandler} onKeyPress={keyPressHandle} className='w-1/2 h-20 flex justify-center items-center text-center text-2xl rounded-lg shadow-sm shadow-zinc-800/20 border' type="text" placeholder="Your text..." value={text.state} />
      <div className="">
        <button onClick={clickHandler} type='submit' className='py-2 px-4 border rounded-md shadow-sm shadow-zinc-800/20 hover:shadow'>Add Note</button>
        <button onClick={deleteHandler} type='submit' className='py-2 px-4 border rounded-md shadow-sm shadow-zinc-800/20 hover:shadow'>Delete All</button>
      </div>
    </>
  )
}

export default TypeBox