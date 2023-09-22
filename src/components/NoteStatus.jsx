function NoteStatus({ notes }) {
  const allNotes = notes.length;
  const completed = notes.filter((n) => n.completed).length;
  const open = allNotes - completed;

  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completed}</span>
      </li>
      <li>
        Open <span>{open}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
