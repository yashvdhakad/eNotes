import noteContext from './noteContext'
import { useState } from 'react'

const NotesState = (props) => {
    const [notes, setNotes] = useState([{
        title: "",
        description: "",
        tag: "",
    }])

    const host = "http://localhost:3017"

    // Add a note
    const addNote = async () => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5ZDgzOTk1Njk1ZmZmN2E3YTEzNGNmIn0sImlhdCI6MTY4ODA0NTI3NX0.1UTOIT6YCR5CvJD-ElVPCQHb9eRLuTW9ttS3h7WmdVc"
            },
            body: JSON.stringify({ title: notes.title, description: notes.description, tag: notes.tag })
        });
        const data = response.json();
    }

    // Edit a note
    const editNote = async (id) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5ZDgzOTk1Njk1ZmZmN2E3YTEzNGNmIn0sImlhdCI6MTY4ODA0NTI3NX0.1UTOIT6YCR5CvJD-ElVPCQHb9eRLuTW9ttS3h7WmdVc"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const data = response.json();
    }

    // Show all notes
    const showNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5ZDgzOTk1Njk1ZmZmN2E3YTEzNGNmIn0sImlhdCI6MTY4ODA0NTI3NX0.1UTOIT6YCR5CvJD-ElVPCQHb9eRLuTW9ttS3h7WmdVc"
            },
        });
        const data = await response.json();
        setNotes(data)
    }

    // Delete all notes
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5ZDgzOTk1Njk1ZmZmN2E3YTEzNGNmIn0sImlhdCI6MTY4ODA0NTI3NX0.1UTOIT6YCR5CvJD-ElVPCQHb9eRLuTW9ttS3h7WmdVc"
            },
        });
        const data = await response.json();
    }

    // Delete all notes
    const deleteAllNotes = async () => {
        const response = await fetch(`${host}/api/notes/deleteallnotes`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5ZDgzOTk1Njk1ZmZmN2E3YTEzNGNmIn0sImlhdCI6MTY4ODA0NTI3NX0.1UTOIT6YCR5CvJD-ElVPCQHb9eRLuTW9ttS3h7WmdVc"
            },
        });
        const data = await response.json();
    }

    return (
        <noteContext.Provider value={{ notes, setNotes, addNote, editNote, showNotes, deleteNote, deleteAllNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NotesState