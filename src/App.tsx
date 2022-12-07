import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Archives, Trash } from './pages';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/archives" element={<Archives />}></Route>
        <Route path="/trash" element={<Trash />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
