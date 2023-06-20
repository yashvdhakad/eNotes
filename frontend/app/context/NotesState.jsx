import noteContext from './noteContext'
import { useState } from 'react'

const NotesState = (props) => {
    const [state, setState] = useState("Type here...")
    const [noteArr, setNoteArr] = useState([])

    return (
        <noteContext.Provider value={{state, setState, noteArr, setNoteArr}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NotesState