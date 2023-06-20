import noteContext from '@/app/context/noteContext'
import React, { useContext } from 'react'

const TypeBox = () => {
  const text = useContext(noteContext)

  const changeHandler = (e) => {
    text.setState(e.target.value);
  }

  return (
    <>
      <input onChange={changeHandler} className='w-1/2 h-20 flex justify-center items-center text-center text-2xl rounded-lg shadow-sm shadow-zinc-800/20 border' type="text" />
      <div>
        here is the result: {text.state}
      </div>
    </>
  )
}

export default TypeBox