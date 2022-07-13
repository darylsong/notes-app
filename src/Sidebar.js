function Sidebar({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote
}) {
    const shortenText = (text) => {
        return text.length > 50 ? (text.substr(0, 49) + "...") : text;
    }

    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick={onAddNote}>Add</button>
            </div>
            <div className="app-sidebar-notes">
                {notes.map((note) => 
                (
                    <div
                        key={note.id}
                        className={`app-sidebar-note ${note.id === activeNote && "active"}`}
                        onClick={() => setActiveNote(note.id)}
                    >
                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                        </div>
                        <small className="note-meta">
                            {shortenText(note.body.replace(/<[^>]+>/g, ""))} <br/>
                            Last modified {new Date(note.lastModified).toLocaleDateString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;

/*


<p>{note.body && note.body.substr(0, 100) + "..."}</p>

*/