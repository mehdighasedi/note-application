import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./Components/AddNewNote";
import NoteContainer from "./Components/NoteContainer";
import NoteStatus from "./Components/NoteStatus";
import NoteHeader from "./Components/NoteHeader";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "Add": {
      return [...state, payload];
    }
    case "Delete": {
      return state.filter((n) => n.id !== payload);
    }
    case "completed": {
      return state.map((n) =>
        payload === n.id ? { ...n, completed: !n.completed } : n
      );
    }
    default:
      throw new Error("An Unknown Error Happened" + type);
  }
};
function App() {
  // const [note, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [note, dispatch] = useReducer(reducer, []);

  const noteHandler = (newNotes) => {
    dispatch({ type: "Add", payload: newNotes });
    // setNotes((prevNotes) => [...prevNotes, newNotes]);
  };
  const deleteHandler = (id) => {
    dispatch({ type: "Delete", payload: id });
    // setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };
  const checkHandler = (e) => {
    const noteID = Number(e.target.value);
    dispatch({ type: "completed", payload: noteID });
    // setNotes((prevNote) =>
    //   prevNote.map((n) =>
    //     noteID === n.id ? { ...n, completed: !n.completed } : n
    //   )
    // );
  };

  return (
    <div className="container">
      <div className="note-header">
        <NoteHeader
          notes={note}
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value)}
        />
      </div>
      <div className="note-app">
        <div className="add-new-note">
          <AddNewNote noteHandler={noteHandler} />
        </div>
        <div className="note-container">
          <NoteStatus notes={note} />
          <NoteContainer
            note={note}
            sortBy={sortBy}
            onDelete={deleteHandler}
            onChecked={checkHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
