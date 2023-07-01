import noteContext from './noteContext'
import { useState } from 'react'

const NotesState = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tag, setTag] = useState("")

    const [notes, setNotes] = useState([])

    const host = "http://localhost:3017"

    // Add a note
    const addNote = async () => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5ZDgzOTk1Njk1ZmZmN2E3YTEzNGNmIn0sImlhdCI6MTY4ODA0NTI3NX0.1UTOIT6YCR5CvJD-ElVPCQHb9eRLuTW9ttS3h7WmdVc"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();
    }

    // Edit a note
    const editNote = async () => {
        const response = await fetch(`${host}/api/notes/updatenote/649df0aa6ecf24b4181906fb`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5ZDgzOTk1Njk1ZmZmN2E3YTEzNGNmIn0sImlhdCI6MTY4ODA0NTI3NX0.1UTOIT6YCR5CvJD-ElVPCQHb9eRLuTW9ttS3h7WmdVc"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();
    }

    // Show all notes
    const showNote = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5ZDgzOTk1Njk1ZmZmN2E3YTEzNGNmIn0sImlhdCI6MTY4ODA0NTI3NX0.1UTOIT6YCR5CvJD-ElVPCQHb9eRLuTW9ttS3h7WmdVc"
            },
            body: JSON.stringify()
        });
        const json = await response.json();
        setNotes(json)
        console.log(json)
    }

    // Delete a note
    const deleteAllNotes = async () => {
        const response = await fetch(`${host}/api/notes/deleteallnotes`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5ZDgzOTk1Njk1ZmZmN2E3YTEzNGNmIn0sImlhdCI6MTY4ODA0NTI3NX0.1UTOIT6YCR5CvJD-ElVPCQHb9eRLuTW9ttS3h7WmdVc"
            },
            body: JSON.stringify()
        });
        const json = await response.json();
        console.log(json)
    }

    return (
        <noteContext.Provider value={{ title, setTitle, description, setDescription, tag, setTag, notes, setNotes, addNote, editNote, showNote, deleteAllNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NotesState