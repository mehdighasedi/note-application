import { useState } from "react";
import "./App.css";
import AddNewNote from "./Components/AddNewNote";
import NoteContainer from "./Components/NoteContainer";
import NoteStatus from "./Components/NoteStatus";

function App() {
  const [note, setNotes] = useState([]);

  const noteHandler = (newNotes) => {
    setNotes((prevNotes) => [...prevNotes, newNotes]);
  };
  const deleteHandler = (id) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };
  const checkHandler = (e) => {
    const noteID = Number(e.target.value);
    setNotes((prevNote) =>
      prevNote.map((n) =>
        noteID === n.id ? { ...n, completed: !n.completed } : n
      )
    );
  };
  return (
    <div className="container">
      <div className="note-header">
        <h1>note header</h1>
      </div>
      <div className="note-app">
        <div className="add-new-note">
          <AddNewNote noteHandler={noteHandler} />
        </div>
        <div className="note-container">
          <NoteStatus notes={note} />
          <NoteContainer
            note={note}
            onDelete={deleteHandler}
            onChecked={checkHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
