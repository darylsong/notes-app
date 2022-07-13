import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes-app")) || []);
    const [activeNote, setActiveNote] = useState(false);

    useEffect(() => {
        localStorage.setItem("notes-app", JSON.stringify(notes));
    }, [notes]);

    const onAddNote = () => {
        const newNote = {
            id: uuid(),
            title: "Untitled Note",
            body: "",
            lastModified: Date.now(),
        };

        setNotes([newNote, ...notes]);
        setActiveNote(newNote.id);
    };

    const onDeleteNote = (idToDelete) => {
        setNotes(notes.filter((note) => note.id !== idToDelete));
    }

    const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote);
    }

    const onUpdateNote = (updatedNote) => {
        setNotes(notes.map((note) => note.id === activeNote ? updatedNote : note));
    }

    return (
        <div className="App">
            <Sidebar
                notes={notes}
                onAddNote={onAddNote}
                onDeleteNote={onDeleteNote}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
            />
            <Main
                activeNote={getActiveNote()}
                onUpdateNote={onUpdateNote}
            />
        </div>
    );
}

export default App;
