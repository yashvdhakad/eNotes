import React from 'react'
import TypeBox from './main/TypeBox'
import Notes from './main/Notes'

const Main = () => {

  return (
    <div className='py-60 flex flex-col justify-start items-center'>
        <TypeBox />
        <Notes />
    </div>
  )
}

export default Main