import noteContext from './noteContext'
import { useState } from 'react'

const NotesState = (props) => {
    const [state, setState] = useState("Type here...")

    return (
        <noteContext.Provider value={{state, setState}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NotesState