import noteContext from './noteContext'
import { useState } from 'react'

const NotesState = (props) => {
    const [text, setText] = useState("")

    const [noteArr, setNoteArr] = useState([])

    return (
        <noteContext.Provider value={{text, setText, noteArr, setNoteArr}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NotesState