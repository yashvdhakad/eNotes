import React from 'react'
import TypeBox from './main/TypeBox'
import Notes from './main/Notes'

const Main = () => {
  return (
    <div className='py-40 flex flex-col justify-start items-center space-y-10'>
        <TypeBox />
        <Notes />
    </div>
  )
}

export default Main