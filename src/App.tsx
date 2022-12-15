import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Archives, Trash } from './pages';
import { Box } from '@mui/material';
function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/archives" element={<Archives />}></Route>
            <Route path="/trash" element={<Trash />}></Route>
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
