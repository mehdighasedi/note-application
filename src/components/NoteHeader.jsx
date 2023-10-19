import { useNotes } from "./Context/NoteContexts";

function NoteHeader({ sortBy, onSort }) {
  const notes = useNotes();
  return (
    <div className="note-header">
      <h1>My Notes ({notes.length})</h1>
      <div>
        <select value={sortBy} onChange={onSort}>
          <option value="latest">Sort By Latest Notes</option>
          <option value="earliest">Sort By earliest Notes</option>
          <option value="completed">Sort By completed Notes</option>
        </select>
      </div>
    </div>
  );
}

export default NoteHeader;
