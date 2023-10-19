import { useDispatchNotes, useNotes } from "./Context/NoteContexts";

function NoteContainer({ sortBy }) {
  const note = useNotes();
  let sortedNotes = note;

  if (sortBy === "latest")
    sortedNotes = [...note].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sortBy === "earliest")
    sortedNotes = [...note].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortBy === "completed")
    sortedNotes = [...note].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div>
      {sortedNotes.map((n) => (
        <NoteList key={n.id} notes={n} />
      ))}
    </div>
  );
}

export default NoteContainer;

function NoteList({ notes }) {
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dispatch = useDispatchNotes();
  return (
    <div className={`note-item ${notes.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{notes.title}</p>
          <p className="description">{notes.description}</p>
        </div>
        <div className="actions">
          <button
            onClick={() => dispatch({ type: "Delete", payload: notes.id })}
          >
            ❌
          </button>
          <input
            type="checkbox"
            name={notes.title}
            value={notes.id}
            id={notes.id}
            onChange={(e) => {
              const noteID = Number(e.target.value);
              dispatch({ type: "completed", payload: noteID });
            }}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(notes.createdAt).toLocaleDateString("en-US", option)}
      </div>
    </div>
  );
}
