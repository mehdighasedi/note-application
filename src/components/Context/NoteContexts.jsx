import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NoteDispatchContext = createContext(null);

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

export function NoteProvider({ children }) {
  const [note, dispatch] = useReducer(reducer, []);
  return (
    <NotesContext.Provider value={note}>
      <NoteDispatchContext.Provider value={dispatch}>
        {children}
      </NoteDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useDispatchNotes() {
  return useContext(NoteDispatchContext);
}
