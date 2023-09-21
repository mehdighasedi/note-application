import { useState } from "react";
import "./App.css";
import AddNewNote from "./Components/AddNewNote";
import NoteContainer from "./Components/NoteContainer";
function App() {
  const [note, setNotes] = useState([]);

  const noteHandler = (newNotes) => {
    setNotes((prevNotes) => [...prevNotes, newNotes]);
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
          <NoteContainer note={note} />
        </div>
      </div>
    </div>
  );
}

export default App;
