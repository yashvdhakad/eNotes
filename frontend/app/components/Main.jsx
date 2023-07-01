import React from 'react'
import TypeBox from './main/TypeBox'
import Notes from './main/Notes'

const Main = () => {
  return (
    <div className='py-32 px-20 flex flex-row justify-between items-start space-x-20'>
        <TypeBox />
        <Notes />
    </div>
  )
}

export default Main