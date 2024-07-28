import "../components/notes.css";
import { useState } from "react";
import { Note, notes, setNotes } from "../components/dummyData";

// interface Note {
//   id: number;
//   title: string;
//   content: string;
// }

const Noter = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const handleAddNote = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("title: ", title);
    console.log("content: ", content);
  };

  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  const newNote: Note = {
    id: notes.length + 1,
    title: title,
    content: content,
  };

  const handleUpdateNote = (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedNote) {
      return;
    }

    const updatedNote: Note = {
      id: selectedNote.id,
      title: title,
      content: content,
    };

    const updatedNotesList = notes.map((note) =>
      note.id === selectedNote.id ? updatedNote : note
    );

    setNotes(updatedNotesList);
    setTitle("");
    setContent("");
    setSelectedNote(null);
  }

    setNotes([...notes, newNote]);

    const handleCancel = () => {
      setTitle("");
      setContent("");
      setSelectedNote(null);
    };

    const deleteNote = (event: React.MouseEvent, noteId: number) => {
      event.stopPropagation();
    
      const updatedNotes = notes.filter((note) => note.id !== noteId);
    
      setNotes(updatedNotes);
    };
  

  return (
    <div className="app-container">
      <form
        className="note-form"
        // onSubmit={handleAddNote}
        onSubmit={(event) =>
          selectedNote ? handleUpdateNote(event) : handleAddNote(event)
        }
      >
        {/* ... other form elements ... */}
        {selectedNote ? (
          <div className="edit-buttons">
            <button type="submit">Save</button>
            <button onClick={ handleCancel }>Cancel</button>
          </div>
        ) : (
          <button type="submit">Add Note</button>
        )}
        <input
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(event) => setTitle(event.target.value)}
          rows={10}
          required
        />
        <button type="submit">Add Note</button>
      </form>
      <div className="notes-grid">
        <div className="note-item">
          <div className="notes-header">
            <button>x</button>
          </div>
          <h2>Note Title</h2>
          <p>Note content</p>
        </div>

        {notes.map((note) => (
          <div
            className="note-item"
            key={note.id}
            onClick={() => handleNoteClick(note)}
          >
            <div className="notes-header">
              <button onClick={(event) => deleteNote(event, note.id)}>Delete</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noter;
