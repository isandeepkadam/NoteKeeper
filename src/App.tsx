import { Navbar, Menu } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Archives, Trash } from './pages';

function App() {
  // const [notes, setNotes] = useState<Note[]>([]);

  // const archiveNote = (id: string) => {
  //   setNotes((prev) => {
  //     return prev.map((note) =>
  //       note.id === id ? { ...note, archieved: true, trash: false } : note
  //     );
  //   });
  // };

  // const deleteNote = (id: string) => {
  //   setNotes((prev) => {
  //     return prev.map((note) =>
  //       note.id === id ? { ...note, trash: true, archieved: false } : note
  //     );
  //   });
  // };

  // const unarchiveNote = (id: string) => {
  //   setNotes((prev) => {
  //     return prev.map((note) =>
  //       note.id === id ? { ...note, archieved: false, trash: false } : note
  //     );
  //   });
  // };

  // const restoreNote = (id: string) => {
  //   setNotes((prev) => {
  //     return prev.map((note) =>
  //       note.id === id ? { ...note, trash: false, archieved: false } : note
  //     );
  //   });
  // };

  // const deleteForever = (id: string) => {
  //   const index = notes
  //     .map((item) => {
  //       return item.id;
  //     })
  //     .indexOf(id);

  //   setNotes(notes.splice(index, 1));
  // };

  return (
    <Router>
      <Navbar />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/archives" element={<Archives />}></Route>
        <Route path="/trash" element={<Trash />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
