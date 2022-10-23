import { Menu, Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Archives, Trash } from './pages';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
function App() {
  return (
    <Router>
      <Navbar />
      <Menu />
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/archives" element={<Archives />}></Route>
          <Route path="/trash" element={<Trash />}></Route>
        </Routes>
      </DndProvider>
    </Router>
  );
}

export default App;
