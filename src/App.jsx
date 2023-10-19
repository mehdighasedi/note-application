import { useState } from "react";
import "./App.css";
import AddNewNote from "./Components/AddNewNote";
import NoteContainer from "./Components/NoteContainer";
import NoteStatus from "./Components/NoteStatus";
import NoteHeader from "./Components/NoteHeader";
import { NoteProvider } from "./Components/Context/NoteContexts";

function App() {
  // const [note, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("");

  // const noteHandler = (newNotes) => {

  // setNotes((prevNotes) => [...prevNotes, newNotes]);
  // };
  // const deleteHandler = (id) => {
  // setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  // };
  // const checkHandler = (e) => {
  // setNotes((prevNote) =>
  //   prevNote.map((n) =>
  //     noteID === n.id ? { ...n, completed: !n.completed } : n
  //   )
  // );
  // };

  return (
    <NoteProvider>
      <div className="container">
        <div className="note-header">
          <NoteHeader
            sortBy={sortBy}
            onSort={(e) => setSortBy(e.target.value)}
          />
        </div>
        <div className="note-app">
          <div className="add-new-note">
            <AddNewNote />
          </div>
          <div className="note-container">
            <NoteStatus />
            <NoteContainer sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NoteProvider>
  );
}

export default App;
