import React from "react";

function NoteContainer({ note }) {
  return (
    <div>
      {note.map((n) => (
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
  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">{notes.title}</p>
          <p className="description">{notes.description}</p>
        </div>
        <div className="actions">
          <button>❌</button>
          <input type="checkbox" />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(notes.createdAt).toLocaleDateString("en-US", option)}
      </div>
    </div>
  );
}
