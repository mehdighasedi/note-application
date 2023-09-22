function NoteContainer({ note, onDelete, onChecked }) {
  return (
    <div>
      {note.map((n) => (
        <NoteList
          key={n.id}
          notes={n}
          onDelete={onDelete}
          onChecked={onChecked}
        />
      ))}
    </div>
  );
}

export default NoteContainer;

function NoteList({ notes, onDelete, onChecked }) {
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={`note-item ${notes.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{notes.title}</p>
          <p className="description">{notes.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(notes.id)}>❌</button>
          <input
            type="checkbox"
            name={notes.title}
            value={notes.id}
            id={notes.id}
            onChange={onChecked}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(notes.createdAt).toLocaleDateString("en-US", option)}
      </div>
    </div>
  );
}
