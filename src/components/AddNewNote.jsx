import { useState } from "react";
import { useDispatchNotes } from "./Context/NoteContexts";

function AddNewNote() {
  const dispatch = useDispatchNotes();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if ((!title, !description)) return null;
    const newNote = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toISOString(),
      completed: false,
    };
    console.log(newNote);
    dispatch({ type: "Add", payload: newNote });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={submitHandler}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-field"
          type="text"
          placeholder="Note Title ..."
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-field"
          type="text"
          placeholder="Note description ..."
        />
        <button className="btn btn--primary" type="submit">
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
