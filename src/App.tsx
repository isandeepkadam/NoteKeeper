import './App.css';
import Menu from './components/Menu';
import { Navbar, Note } from './components';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Archives from './pages/Archives';
import Trash from './pages/Trash';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const archiveNote = (id: string) => {
    setNotes((prev) => {
      return prev.map((note) =>
        note.id === id ? { ...note, archieved: true, trash: false } : note
      );
    });
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => {
      return prev.map((note) =>
        note.id === id ? { ...note, trash: true, archieved: false } : note
      );
    });
  };

  const unarchiveNote = (id: string) => {
    setNotes((prev) => {
      return prev.map((note) =>
        note.id === id ? { ...note, archieved: false, trash: false } : note
      );
    });
  };

  const restoreNote = (id: string) => {
    setNotes((prev) => {
      return prev.map((note) =>
        note.id === id ? { ...note, trash: false, archieved: false } : note
      );
    });
  };

  const deleteForever = (id: string) => {
    const index = notes
      .map((item) => {
        return item.id;
      })
      .indexOf(id);

    setNotes(notes.splice(index, 1));
  };

  const displayNotes = notes.filter((note) => !note.archieved && !note.trash);

  const archivedNotes = notes.filter((note) => note.archieved && !note.trash);

  const deletedNotes = notes.filter((note) => note.trash);

  return (
    <Router>
      <Navbar />
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              notes={displayNotes}
              setNotes={setNotes}
              archiveNote={archiveNote}
              deleteNote={deleteNote}
            />
          }
        ></Route>
        <Route
          path="/archives"
          element={
            <Archives
              notes={archivedNotes}
              archiveNote={unarchiveNote}
              deleteNote={deleteNote}
            />
          }
        ></Route>
        <Route
          path="/trash"
          element={
            <Trash
              notes={deletedNotes}
              archiveNote={deleteForever}
              deleteNote={restoreNote}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
