import "quill/dist/quill.snow.css";
import ReactQuill from 'react-quill';
import { useState, useEffect } from "react";

function Main({ activeNote, onUpdateNote }) {
    const [bodyContent, setBodyContent]= useState();

    useEffect(() => {
        if (activeNote == null) return;
        setBodyContent(activeNote.body);
    }, [activeNote]);

    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        });
    };

    if (!activeNote) {
        return (
            <div className="no-active-note">
                No note selected
            </div>
        );
    };

    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input
                    type="text"
                    id="title"
                    value={activeNote.title}
                    onChange={(e) => onEditField("title", e.target.value)}
                    autoFocus
                />
                <ReactQuill 
                    value={bodyContent}
                    onChange={(value) => onEditField("body", value)}
                />
            </div>
        </div>
    );
}

export default Main;